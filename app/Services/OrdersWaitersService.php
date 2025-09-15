<?php

namespace App\Services;

use App\Models\OrdersWaiters;
use App\Queries\OrdersWaitersQuery;

class OrdersWaitersService extends Service
{
    private OrdersWaitersQuery $ordersWaitersQuery;

    public function __construct(OrdersWaitersQuery $ordersWaitersQuery)
    {
        $this->ordersWaitersQuery = $ordersWaitersQuery;
    }

    public function getAll()
    {
        return OrdersWaiters::all();
    }

    public function find($id)
    {
        return $this->ordersWaitersQuery->getByOrderDetId($id);
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
