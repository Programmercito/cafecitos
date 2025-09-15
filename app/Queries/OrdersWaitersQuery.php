<?php

namespace App\Queries;

use App\Models\OrdersWaiters;

class OrdersWaitersQuery
{
    public function getByOrderDetId(int $orderId)
    {
        return OrdersWaiters::where('order_det_id', $orderId)->get();
    }
}
