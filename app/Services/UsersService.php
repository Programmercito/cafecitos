<?php

namespace App\Services;

use App\Models\Users;
use App\Queries\UsersQuery;
use App\Resources\PaginatorService;
use Illuminate\Support\Facades\Hash;

class UsersService
{
    protected $usersQuery;
    protected $paginatorService;

    public function __construct(UsersQuery $usersQuery, PaginatorService $paginatorService)
    {
        $this->usersQuery = $usersQuery;
        $this->paginatorService = $paginatorService;
    }

    public function login(string $username, string $password)
    {
        $user = $this->usersQuery->findByUsername($username);

        if (!$user || !Hash::check($password, $user->password)) {
            return null;
        }

        return $user;
    }

    public function getAll()
    {
        return Users::all();
    }

    public function find($id)
    {
        return Users::find($id);
    }

    public function create(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        $data['id'] = null;
        return Users::create($data);
    }

    public function update($id, array $data)
    {
        $user = Users::find($id);
        if ($user) {
            $user->update($data);
        }
        return $user;
    }

    public function delete($id)
    {
        $user = Users::find($id);
        if ($user) {
            return $user->delete();
        }
        return false;
    }

    public function getUsers($active = null, $perPage = 15, $page = 1, $username = null)
    {
        $query = Users::query();

        if (!is_null($active)) {
            $query->where('is_active', $active ? 1 : 0);
        }

        if (!is_null($username)) {
            $query->where('username', 'like', "%{$username}%");
        }

        $paginator = $query->paginate($perPage, ['*'], 'page', $page);
        return $this->paginatorService->paginate($paginator);
    }

    public function changePassword($userId, $newPassword)
    {
        $user = Users::find($userId);
        if ($user) {
            $user->password = Hash::make($newPassword);
            $user->save();
            return $user;
        }
        return null;
    }
}
