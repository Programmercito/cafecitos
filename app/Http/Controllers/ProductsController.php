<?php

namespace App\Http\Controllers;

use App\Services\ProductsService;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    protected $productsService;

    public function __construct(ProductsService $productsService)
    {
        $this->productsService = $productsService;
    }

    /**
     * @OA\Get(
     *     path="/api/products",
     *     summary="Get all products",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="active", in="query", @OA\Schema(type="boolean")),
     *     @OA\Parameter(name="name", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="perPage", in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation")
     * )
     */
    public function index(Request $request)
    {
        $active = $request->query('active');
        $name = $request->query('name');
        $perPage = $request->query('perPage', 15);
        $page = $request->query('page', 1);
        $products = $this->productsService->getAll($active, $name, $perPage, $page);
        return response()->json($products);
    }

    /**
     * @OA\Get(
     *     path="/api/products/{id}",
     *     summary="Get a product by ID",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation"),
     *     @OA\Response(response=404, description="Product not found")
     * )
     */
    public function show($id)
    {
        $product = $this->productsService->find($id);
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
        return response()->json($product);
    }

    /**
     * @OA\Post(
     *     path="/api/products",
     *     summary="Create a new product",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"type", "description", "client_price", "waiter_price", "animation_price", "waiter_commission", "is_active"},
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="description", type="string"),
     *              @OA\Property(property="client_price", type="number"),
     *              @OA\Property(property="waiter_price", type="number"),
     *              @OA\Property(property="animation_price", type="number"),
     *              @OA\Property(property="waiter_commission", type="number"),
     *              @OA\Property(property="is_active", type="boolean")
     *         )
     *     ),
     *     @OA\Response(response=201, description="Product created")
     * )
     */
    public function store(Request $request)
    {
        $rules = [
            'type' => 'required|string',
            'description' => 'required|string',
            'client_price' => 'required|numeric',
            'waiter_price' => 'required|numeric',
            'animation_price' => 'required|numeric',
            'waiter_commission' => 'required|numeric',
            'is_active' => 'required|boolean',
        ];
        $validated = $this->validate($rules, $request);
        $product = $this->productsService->create($validated);
        return response()->json($product, 201);
    }

    /**
     * @OA\Put(
     *     path="/api/products/{id}",
     *     summary="Update a product",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"type", "description", "client_price", "waiter_price", "animation_price", "waiter_commission", "is_active"},
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="description", type="string"),
     *              @OA\Property(property="client_price", type="number"),
     *              @OA\Property(property="waiter_price", type="number"),
     *              @OA\Property(property="animation_price", type="number"),
     *              @OA\Property(property="waiter_commission", type="number"),
     *              @OA\Property(property="is_active", type="boolean")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Product updated"),
     *     @OA\Response(response=404, description="Product not found")
     * )
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'type' => 'required|string',
            'description' => 'required|string',
            'client_price' => 'required|numeric',
            'waiter_price' => 'required|numeric',
            'animation_price' => 'required|numeric',
            'waiter_commission' => 'required|numeric',
            'is_active' => 'required|boolean',
        ];

        $validated = $this->validate($rules, $request);
        $product = $this->productsService->update($id, $validated);
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
        return response()->json($product);
    }

    /**
     * @OA\Patch(
     *     path="/api/products/{id}/status",
     *     summary="Change product status",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(required={"is_active"}, @OA\Property(property="is_active", type="boolean"))
     *     ),
     *     @OA\Response(response=200, description="Status updated"),
     *     @OA\Response(response=404, description="Product not found")
     * )
     */
    public function changeStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'is_active' => 'required|boolean',
        ]);
        $product = $this->productsService->changeStatus($id, $validated['is_active']);
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
        return response()->json($product);
    }

    /**
     * @OA\Post(
     *     path="/api/products/{id}/image",
     *     summary="Upload a product image",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(required={"image"}, @OA\Property(property="image", type="string", format="binary"))
     *         )
     *     ),
     *     @OA\Response(response=200, description="Image uploaded"),
     *     @OA\Response(response=404, description="Product not found")
     * )
     */
    public function uploadImage(Request $request, $id)
    {
        $validated = $request->validate([
            'image' => 'required|file|mimes:png',
        ]);
        $product = $this->productsService->find($id);
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
        $file = $request->file('image');
        $filename = 'product_' . $id . '_' . time() . '.png';
        $path = $file->storeAs('images', $filename);
        $product->image = $filename;
        $product->save();
        return response()->json(['image' => $filename, 'path' => $path]);
    }

    /**
     * @OA\Get(
     *     path="/api/products/{id}/image",
     *     summary="Get a product image",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Image file", @OA\MediaType(mediaType="image/png")),
     *     @OA\Response(response=404, description="Image not found")
     * )
     */
    public function showImage($id)
    {
        $product = $this->productsService->find($id);
        if (!$product || !$product->image) {
            return response()->json(['message' => 'Imagen no encontrada'], 404);
        }
        $path = storage_path('app/private/images/' . $product->image);
        if (!file_exists($path)) {
            return response()->json(['message' => 'Archivo no encontrado'], 404);
        }
        return response()->file($path, [
            'Content-Type' => 'image/png'
        ]);
    }

    /**
     * @OA\Get(
     *     path="/api/products/types",
     *     summary="Get all product types",
     *     tags={"Products"},
     *     security={{"csrf":{}}},
     *     @OA\Response(response=200, description="Successful operation")
     * )
     */
    public function productosType()
    {
        $listaDeCategorias = [
            'Bebida' => 'BEBIDA',
            'Comida' => 'COMIDA',
            'Postre' => 'POSTRE',
            'Reposición' => 'REPOSICION',
            'Otros' => 'OTROS'
        ];

        $result = [];
        foreach ($listaDeCategorias as $name => $value) {
            $result[] = ['name' => $name, 'value' => $value];
        }

        return response()->json($result);
    }
}
