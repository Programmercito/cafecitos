<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Services\UsersService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    protected $usersService;

    public function __construct(UsersService $usersService)
    {
        $this->usersService = $usersService;
    }

    /**
     * @OA\Post(
     *     path="/api/auth/login",
     *     summary="Authenticate user and start a session",
     *     tags={"Auth"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"username", "password"},
     *             @OA\Property(property="username", type="string"),
     *             @OA\Property(property="password", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Authentication successful"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials"
     *     )
     * )
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $user = $this->usersService->login($credentials['username'], $credentials['password']);

        if ($user) {
            Auth::login($user);
            $request->session()->regenerate();
            $request->session()->put('role', $user->type);
            return response()->json(Auth::user());
        }

        return response()->json([
            'error' => 'The provided credentials do not match our records.',
        ], 401);
    }

    /**
     * @OA\Post(
     *     path="/api/users",
     *     summary="Create a new user",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"username", "password", "is_active", "type", "first_name", "last_name"},
     *              @OA\Property(property="username", type="string"),
     *              @OA\Property(property="password", type="string"),
     *              @OA\Property(property="is_active", type="boolean"),
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="first_name", type="string"),
     *              @OA\Property(property="last_name", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="User created successfully"
     *     )
     * )
     */
    public function store(Request $request): JsonResponse
    {
        $rules = [
            'username' => ['required', 'string', 'max:100', Rule::unique('USERS', 'username')],
            'password' => ['required', 'string', 'min:8'],
            'is_active' => ['required', 'boolean'],
            'type' => ['required', 'string'],
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
        ];

        $validatedData = $this->validate($rules, $request);
        $user = $this->usersService->create($validatedData);
        return response()->json($user, 201);
    }

    /**
     * @OA\Put(
     *     path="/api/users/{id}",
     *     summary="Update a user",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              @OA\Property(property="username", type="string"),
     *              @OA\Property(property="password", type="string"),
     *              @OA\Property(property="is_active", type="boolean"),
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="first_name", type="string"),
     *              @OA\Property(property="last_name", type="string")
     *         )
     *     ),
     *     @OA\Response(response=200, description="User updated"),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function update(Request $request, $id): JsonResponse
    {
        if (!Users::where('id', $id)->exists()) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $rules = [
            'username' => ['sometimes', 'string', 'max:100', Rule::unique('USERS', 'username')->ignore($id)],
            'password' => ['sometimes', 'string', 'min:8'],
            'is_active' => ['sometimes', 'boolean'],
            'type' => ['sometimes', 'string'],
            'first_name' => ['sometimes', 'string', 'max:100'],
            'last_name' => ['sometimes', 'string', 'max:100'],
        ];

        $validatedData = $this->validate($rules, $request);
        if (isset($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }
        $user = $this->usersService->update($request['id'], $validatedData);

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['error' => 'User not found'], 404);
    }

    /**
     * @OA\Delete(
     *     path="/api/auth/logout",
     *     summary="Logout user",
     *     tags={"Auth"},
     *     security={{"csrf":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Logged out successfully"
     *     )
     * )
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }

    /**
     * @OA\Get(
     *     path="/api/users/{id}",
     *     summary="Get a user by ID",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation"),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function show($id): JsonResponse
    {
        $user = $this->usersService->find($id);

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['error' => 'User not found'], 404);
    }

    /**
     * @OA\Get(
     *     path="/api/users",
     *     summary="Get all users",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="active", in="query", @OA\Schema(type="boolean")),
     *     @OA\Parameter(name="username", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="per_page", in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation")
     * )
     */
    public function index(Request $request): JsonResponse
    {
        $active = $request->query('active');
        $username = $request->query('username');
        $perPage = $request->query('per_page', 15);
        $page = $request->query('page', 1);

        $users = $this->usersService->getUsers($active, $perPage, $page, $username);

        return response()->json($users);
    }

    /**
     * @OA\Patch(
     *     path="/api/users/{id}/status",
     *     summary="Change user status",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(required={"is_active"}, @OA\Property(property="is_active", type="boolean"))
     *     ),
     *     @OA\Response(response=200, description="Status updated"),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function changeStatus(Request $request, $id): JsonResponse
    {
        if (!Users::where('id', $id)->exists()) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $validatedData = $request->validate([
            'is_active' => ['required', 'boolean']
        ]);

        $user = $this->usersService->update($id, ['is_active' => $validatedData['is_active']]);

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['error' => 'User not found'], 404);
    }

    /**
     * @OA\Get(
     *     path="/api/users/types",
     *     summary="Get all user types",
     *     tags={"Users"},
     *     security={{"csrf":{}}},
     *     @OA\Response(response=200, description="Successful operation")
     * )
     */
    public function usersType()
    {
        $userTypes = [
            'Administrador' => 'ADMINISTRATOR',
            'Mesero' => 'WAITER',
            'Encargado' => 'IN_CHARGE'
        ];

        $result = [];
        foreach ($userTypes as $name => $value) {
            $result[] = ['name' => $name, 'value' => $value];
        }

        return $result;
    }

    /**
     * @OA\Post(
     *     path="/api/auth/change-password",
     *     summary="Change current user's password",
     *     tags={"Auth"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"current_password", "new_password", "new_password_confirmation"},
     *             @OA\Property(property="current_password", type="string", format="password"),
     *             @OA\Property(property="new_password", type="string", format="password"),
     *             @OA\Property(property="new_password_confirmation", type="string", format="password")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Password changed successfully"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error"
     *     )
     * )
     */
    public function changePassword(Request $request): JsonResponse
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Invalid current password'], 401);
        }

        $updatedUser = $this->usersService->changePassword($user->id, $request->new_password);

        if ($updatedUser) {
            return response()->json(['message' => 'Password changed successfully']);
        } else {
            return response()->json(['message' => 'Failed to change password'], 500);
        }
    }
}

