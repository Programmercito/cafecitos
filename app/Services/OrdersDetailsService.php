<?php

namespace App\Services;

use App\Models\OrdersDetails;
use App\Services\ProductsService;

class OrdersDetailsService extends Service
{
    private ProductsService $productsService;

    public function __construct(ProductsService $productsService)
    {
        $this->productsService = $productsService;
    }

    public function getAll()
    {
        return OrdersDetails::all();
    }

    public function find($id)
    {
        return OrdersDetails::find($id);
    }

    public function create(array $data)
    {
        $data['price'] = $this->calculatePrice($data);
        $orderDetail = new OrdersDetails($data);
        $this->validateModify($orderDetail->order);
        return OrdersDetails::create($data);
    }

    public function update($id, array $data)
    {
        $data['price'] = $this->calculatePrice($data);
        $orderDetail = OrdersDetails::with('order')->findOrFail($id);
        $this->validateModify($orderDetail->order);
        if (!$data['type']==='WAITER'){
            $orderDetail->orderWaiters()->delete();
        }
        $orderDetail->update($data);

        return $orderDetail;
    }

    public function delete($id)
    {
        $orderDetail = OrdersDetails::find($id);
        $this->validateModify($orderDetail->order);
        if ($orderDetail) {
            return $orderDetail->delete();
        }
        return false;
    }

    public function calculatePrice(array $data)
    {
        $product = $this->productsService->find($data['product_id']);
        $total = 0;
        if ($product) {
            if ($data['type'] === 'CLIENT') {
                $total = $product->client_price * $data['quantity'];
            } else if ($data['type'] === 'WAITER') {
                $total = $product->waiter_price * $data['quantity'];
            } else if ($data['type'] === 'ANIMATION') {
                $total = $product->animation_price * $data['quantity'];
            } else {
                // error
                throw new \InvalidArgumentException('Invalid product type');
            }
            // round 2 decimal
            return round($total, 2);
        } else {
            throw new \InvalidArgumentException('Invalid product');
        }
    }
}
