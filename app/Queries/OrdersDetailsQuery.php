<?php

namespace App\Queries;

use App\Models\OrdersDetails;

class OrdersDetailsQuery
{
    /**
     * @param int $orderId
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getByOrderId(int $orderId)
    {
        return OrdersDetails::where('order_id', $orderId)->get();
    }
}
