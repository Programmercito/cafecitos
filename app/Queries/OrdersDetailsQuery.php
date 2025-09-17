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

    public function pendings()
    {
        $query = OrdersDetails::where('entregado', 0);
        // filtro que la orden padre sea open o closed
        $query
            ->select(
                'ORDER_DETAILS.*',
                'u.username',
                'u.first_name',
                'u.last_name'
            )
            ->join('ORDERS as o', 'o.id', '=', 'ORDER_DETAILS.order_id')
            ->join('USERS as u', 'u.id', '=', 'o.waiter_id')
            ->whereIn('o.status', ['OPEN', 'CLOSED']);
        return $query->get();
    }
}
