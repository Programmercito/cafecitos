<?php

namespace App\Http\Controllers;

use App\Services\OrdersService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    private OrdersService $ordersService;

    public function __construct(OrdersService $ordersService)
    {
        $this->ordersService = $ordersService;
    }

    /**
     * @OA\Post(
     *     path="/api/orders",
     *     summary="Create a new order",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Response(
     *         response=201,
     *         description="Order created successfully"
     *     )
     * )
     */
    public function store(Request $request)
    {
        $data = [
            'order_date' => now(),
            'status' => 'OPEN',
            'waiter_id' => $this->currentUser()->id,
            'price_final' => 0
        ];
        $order = $this->ordersService->create($data);
        return response()->json($order, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/orders/{id}",
     *     summary="Get an order by ID",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Order not found"
     *     )
     * )
     */
    public function show($id)
    {
        $order = $this->ordersService->find($id);
        if ($order) {
            return response()->json($order, 200);
        } else {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }

    /**
     * @OA\Patch(
     *     path="/api/orders/{id}/status/{status}",
     *     summary="Change order status",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="status",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Status updated"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Order not found"
     *     )
     * )
     */
    public function changeStatus($id, $status)
    {
        $order = $this->ordersService->find($id);
        if ($order) {
            $validation = $this->validateStatus($status, $order);
            if ($validation) {
                return $validation;
            }
            if ($status === 'PAID') {
                $this->ordersService->calculateComisions($id);
            }
            if ($status === 'CLOSED') {
                $this->ordersService->calculateTotals($id);
            }
            $order = $this->ordersService->updateStatus($id, $status);
            return response()->json($order, 200);
        } else {
            return response()->json(['message' => 'Order no encontrada'], 404);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/orders/types",
     *     summary="Get all order types",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function ordersType()
    {
        $listaDeEstados = [
            'Abierto' => 'OPEN',
            'Cerrado' => 'CLOSED',
            'Pagado' => 'PAID',
            'En preparación' => 'COMMISSIONING',
            'Procesado' => 'PROCESSED',
            'Anulado' => 'VOIDED'
        ];

        $result = [];
        foreach ($listaDeEstados as $name => $value) {
            $result[] = ['name' => $name, 'value' => $value];
        }

        return $result;
    }

    /**
     * @OA\Get(
     *     path="/api/orders/history",
     *     summary="Get all orders",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="status", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="waiter_id", in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="date_from", in="query", @OA\Schema(type="string", format="date")),
     *     @OA\Parameter(name="date_to", in="query", @OA\Schema(type="string", format="date")),
     *     @OA\Parameter(name="sort", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="lenPage", in="query", @OA\Schema(type="integer")),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function getAll(Request $request)
    {
        $params = [
            'status' => $request->query('status'),
            'date_from' => $request->query('date_from'),
            'date_to' => $request->query('date_to'),
            'sort' => $request->query('sort'),
        ];
        return response()->json($this->ordersService->getAll($params));
    }

    /**
     * @OA\Get(
     *     path="/api/me/orders",
     *     summary="Get my orders",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="status", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="date_from", in="query", @OA\Schema(type="string", format="date")),
     *     @OA\Parameter(name="date_to", in="query", @OA\Schema(type="string", format="date")),
     *     @OA\Parameter(name="sort", in="query", @OA\Schema(type="string")),
     *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="lenPage", in="query", @OA\Schema(type="integer")),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function getMyOrders(Request $request)
    {
        $user = Auth::user();
        $params = [
            'status' => $request->query('status'),
            'waiter_id' => $user->id,
            'date_from' => $request->query('date_from'),
            'date_to' => $request->query('date_to'),
            'sort' => $request->query('sort'),
            'page' => $request->query('page', 1),
            'lenPage' => $request->query('lenPage', 15),
            'type' => $user->type
        ];
        return response()->json($this->ordersService->getMyOrders($params));
    }

    /**
     * @OA\Get(
     *     path="/api/orders/move-to-commissiong",
     *     summary="Move all paid orders to commissioning",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function moveToCommissiong()
    {
        return $this->ordersService->moveAllPaidToCommissiong();
    }

    /**
     * @OA\Get(
     *     path="/api/orders/move-to-processed",
     *     summary="Move all paid orders to processed",
     *     tags={"Orders"},
     *     security={{"csrf":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function moveToProcessed()
    {
        return $this->ordersService->moveAllPaidToProcessed();
    }
}
