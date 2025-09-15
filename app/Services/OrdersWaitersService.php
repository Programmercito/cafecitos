<?php

namespace App\Services;

use App\Models\OrdersWaiters;
use App\Models\Orders;
use App\Queries\OrdersDetailsQuery;
use App\Queries\OrdersWaitersQuery;

class OrdersWaitersService extends Service
{
    private OrdersWaitersQuery $ordersWaitersQuery;
    private OrdersDetailsService $ordersDetailsService;

    public function __construct(OrdersWaitersQuery $ordersWaitersQuery, OrdersDetailsService $ordersDetailsService)
    {
        $this->ordersWaitersQuery = $ordersWaitersQuery;
        $this->ordersDetailsService = $ordersDetailsService;
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
        $detail = $this->ordersDetailsService->find($data['order_det_id']);
        $this->validateModify($detail->order);
        return OrdersWaiters::create($data);
    }

    public function update($id, array $data)
    {
        $orderWaiter = OrdersWaiters::find($id);
        if ($orderWaiter) {
            $detail = $this->ordersDetailsService->find($data['order_det_id']);
            $this->validateModify($detail->order);
            $orderWaiter->update($data);
        }
        return $orderWaiter;
    }

    public function delete($id)
    {
        $orderWaiter = OrdersWaiters::find($id);
        if ($orderWaiter) {
            $detail = $this->ordersDetailsService->find($orderWaiter->order_det_id);
            $this->validateModify($detail->order);
            return $orderWaiter->delete();
        }
        return false;
    }
}
