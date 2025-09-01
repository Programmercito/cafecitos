<?php

namespace App\Queries;

use App\Models\Orders;
use App\Resources\PaginatorService;
use Illuminate\Http\Request;

class OrdersQuery
{
    protected $paginatorService;

    public function __construct(PaginatorService $paginatorService)
    {
        $this->paginatorService = $paginatorService;
    }

    public function getOrders($status, $waiter_id, $date_from, $date_to, $sort, $page, $lenPage)
    {
        $query = Orders::query();
        $query->where('status', $status);
        if ($waiter_id) {
            $query->where('waiter_id', $waiter_id);
        }
        if ($date_from && $date_to) {
            $query->whereBetween('order_date', $date_from, $date_to);
        }
        $query->orderBy('desc');
        if ($sort) {
            $query->orderBy($sort);
        }
        if ($waiter_id) {
            $query->where('waiter_id', $waiter_id);
        }
        $paginator = $query->paginate($lenPage, ['*'], 'page', $page);
        return $this->paginatorService->paginate($paginator);
    }

    /**
     * Misma firma, pero aplica (orders.waiter_id = ? OR EXISTS (...)) usando el mismo waiter_id.
     * Si $waiter_id es null/0, NO aplica el bloque OR (devuelve por status/fechas/orden).
     */
    public function getMyOrders($status, $waiter_id, $date_from, $date_to, $sort, $page, $lenPage)
    {
        $ordersTable = (new Orders())->getTable();

        $query = Orders::query()
            ->where("{$ordersTable}.status", $status);

        if ($waiter_id) {
            $query->where(function ($q) use ($waiter_id, $ordersTable) {
                // Opción A: waiter asignado directamente en ORDERS
                $q
                    ->where("{$ordersTable}.waiter_id", $waiter_id)
                    // Opción B: existe un detalle atendido por el mismo waiter
                    ->orWhereExists(function ($qq) use ($waiter_id, $ordersTable) {
                        $qq
                            ->selectRaw('1')
                            ->from('ORDER_DETAILS as od')
                            ->join('ORDER_WAITERS as ow', 'ow.order_det_id', '=', 'od.id')
                            ->where('ow.waiter_id', $waiter_id)
                            ->whereColumn('od.order_id', "{$ordersTable}.id");
                    });
            });
        }

        $this->applyDateFilter($query, $date_from, $date_to);
        $this->applySorting($query, $sort);

        $paginator = $query->paginate($lenPage, ['*'], 'page', $page);

        return $this->paginatorService->paginate($paginator);
    }

    protected function applyDateFilter($query, $date_from, $date_to): void
    {
        if ($date_from && $date_to) {
            $query->whereBetween('order_date', [$date_from, $date_to]);
        } elseif ($date_from) {
            $query->where('order_date', '>=', $date_from);
        } elseif ($date_to) {
            $query->where('order_date', '<=', $date_to);
        }
    }

    protected function applySorting($query, $sort): void
    {
        if ($sort) {
            // Permite "col" o "col:desc"
            [$col, $dir] = array_pad(explode(':', $sort, 2), 2, 'asc');
            $dir = strtolower($dir) === 'desc' ? 'desc' : 'asc';
            $query->orderBy($col, $dir);
        } else {
            $query->orderByDesc('id');
        }
    }

    public function moveAllPaidToCommissiong(): int
    {
        return Orders::where('status', 'PAID')
            ->update([
                'status' => 'COMMISSIONG',
                'updated_at' => now(),
            ]);
    }

    public function moveAllPaidToProcessed(): int
    {
        return Orders::where('status', 'COMMISSIONG')
            ->update([
                'status' => 'PROCESSED',
                'updated_at' => now(),
            ]);
    }
}
