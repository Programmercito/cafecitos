<?php

namespace App\Services;

use App\Models\OrdersWaiters;

class OrdersWaitersService extends Service
{
    public function getAll()
    {
        return OrdersWaiters::all();
    }

    public function find($id)
    {
        return OrdersWaiters::find($id);
    }

    public function create(array $data)
    {
        $orderWaiter = new OrdersWaiters($data);
        $this->validateModify($orderWaiter->orderDetail()->order());
        return OrdersWaiters::create($data);
    }

    public function update($id, array $data)
    {
        $orderWaiter = OrdersWaiters::find($id);
        if ($orderWaiter) {
            $this->validateModify($orderWaiter->orderDetail()->order());
            $orderWaiter->update($data);
        }
        return $orderWaiter;
    }

    public function delete($id)
    {
        $orderWaiter = OrdersWaiters::find($id);
        if ($orderWaiter) {
            $this->validateModify($orderWaiter->orderDetail()->order());
            return $orderWaiter->delete();
        }
        return false;
    }
}
