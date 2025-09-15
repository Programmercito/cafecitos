<?php

namespace App\Services;

use App\Models\Orders;
use App\Queries\OrdersQuery;
use Illuminate\Http\Request;

class OrdersService
{
    private OrdersQuery $ordersQuery;

    public function __construct(OrdersQuery $ordersQuery)
    {
        $this->ordersQuery = $ordersQuery;
    }

    public function getAll(array $params)
    {
        $status = $params['status'];
        $waiter_id = $params['waiter_id'];
        $date_from = $params['date_from'];
        $date_to = $params['date_to'];
        $sort = $params['sort'];
        $page = $params['page'];
        $lenPage = $params['lenPage'];
        return $this->ordersQuery->getOrders($status, $waiter_id, $date_from, $date_to, $sort, $page, $lenPage);
    }

    public function getMyOrders(array $params)
    {
        $status = $params['status'];
        $waiter_id = $params['waiter_id'];
        $date_from = $params['date_from'];
        $date_to = $params['date_to'];
        $sort = $params['sort'];
        $page = $params['page'];
        $lenPage = $params['lenPage'];
        $type = $params['type'];
        return $this->ordersQuery->getMyOrders($status, $waiter_id, $date_from, $date_to, $sort, $page, $lenPage, $type);
    }

    public function find($id)
    {
        return Orders::find($id);
    }

    public function create(array $data)
    {
        $order = Orders::create($data);
        return $order->fresh();
    }

    public function update($id, array $data)
    {
        $order = Orders::find($id);
        if ($order) {
            $order->update($data);
        }
        return $order;
    }

    public function updateStatus($id, $status)
    {
        $order = Orders::find($id);
        if ($order) {
            $order->status = $status;
            $order->save();
        }
        return $order;
    }

    public function calculateComisions($id)
    {
        $order = Orders::find($id);
        if ($order) {
            // recorremos el detalle
            $total_comision = 0;
            foreach ($order->details as $detail) {
                if ($detail->type === 'CLIENT' || $detail->type === 'ANIMATION') {
                    $total_comision += $detail->product()->waiter_commission * $detail->quantity;
                } else if ($detail->type === 'WAITER') {
                    // obtengo el detalle de waiters que esta en $detail->orderWaiters()
                    $cuantos = $detail->orderWaiters->count();
                    foreach ($detail->orderWaiters as $waiter) {
                        $comision = ($detail->product->waiter_commission * $detail->quantity) / $cuantos;
                        $waiter->comision = $comision;
                        $waiter->save();
                    }
                }
            }
            $have_waiter_commissiong = env('CLIENT_COMMISSION_FOR_WAITER', 0);
            if ($have_waiter_commissiong) {
                $order->waiter_comision = $total_comision;
            } else {
                $order->waiter_comision = 0;
            }
            $order->save();
        }
    }

    public function calculateTotals($id)
    {
        $order = Orders::find($id);
        if ($order) {
            // recorremos el detalle
            $total = 0;
            foreach ($order->details as $detail) {
                $total += $detail->price;
            }
            $order->price_final = $total;
            $order->save();
        }
    }

    public function moveAllPaidToCommissiong(): int
    {
        return $this->ordersQuery->moveAllPaidToCommissiong();
    }

    public function moveAllPaidToProcessed(): int
    {
        return $this->ordersQuery->moveAllPaidToProcessed();
    }
}
