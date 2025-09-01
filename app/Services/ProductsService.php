<?php

namespace App\Services;

use App\Models\Products;
use App\Resources\PaginatorService;

class ProductsService
{
    protected $paginatorService;

    public function __construct(PaginatorService $paginatorService)
    {
        $this->paginatorService = $paginatorService;
    }

    public function getAll($active = null, $name = '', $perPage = 15, $page = 1)
    {
        $query = Products::query();
        if (!is_null($active)) {
            $query->where('is_active', $active ? 1 : 0);
        }
        if (!empty($name)) {
            $query->where('description', 'like', "%$name%");
        }

        $paginator = $query->paginate($perPage, ['*'], 'page', $page);
        return $this->paginatorService->paginate($paginator);
    }

    public function find($id)
    {
        return Products::find($id);
    }

    public function create(array $data)
    {
        return Products::create($data);
    }

    public function update($id, array $data)
    {
        $product = Products::find($id);
        if ($product) {
            $product->update($data);
        }
        return $product;
    }

    public function changeStatus($id, $isActive)
    {
        $product = Products::find($id);
        if ($product) {
            $product->is_active = $isActive ? 1 : 0;
            $product->save();
        }
        return $product;
    }
}
