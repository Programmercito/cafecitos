<?php

namespace App\Http\Controllers;

use App\Exceptions\OrderIsClosedException;
use App\Services\OrdersDetailsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use OpenApi\Examples\Specs\Petstore\Annotations\Models\Order;

class OrdersDetailsController extends Controller
{
    private OrdersDetailsService $ordersDetailsService;

    public function __construct(OrdersDetailsService $ordersDetailsService)
    {
        $this->ordersDetailsService = $ordersDetailsService;
    }

    /**
     * @OA\Post(
     *     path="/api/order-details",
     *     summary="Create a new order detail",
     *     tags={"OrderDetails"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"order_id", "product_id", "quantity", "type"},
     *              @OA\Property(property="order_id", type="integer"),
     *              @OA\Property(property="product_id", type="integer"),
     *              @OA\Property(property="quantity", type="integer"),
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="observation", type="string")
     *         )
     *     ),
     *     @OA\Response(response=201, description="Order detail created"),
     *     @OA\Response(response=400, description="Invalid type"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function store(Request $request)
    {
        $rules = [
            'order_id' => 'required|integer',
            'product_id' => 'required|integer',
            'quantity' => 'required|integer',
            'type' => 'required|string',
            'observation' => 'nullable|string',
        ];
        $validatedData = $this->validate($rules, $request);
        if (!$this->validaType($validatedData['type'])) {
            return response()->json(['message' => 'Invalid type'], 400);
        }
        try {
            $orderDetail = $this->ordersDetailsService->create($validatedData);
            if ($orderDetail->type === 'WAITER') {
                $previousOrderDetail = \App\Models\OrdersDetails::where('id', '<', $orderDetail->id)
                    ->where('type', 'WAITER')
                    ->latest('id')
                    ->first();

                if ($previousOrderDetail) {
                    $waiterIds = $previousOrderDetail->waiters()->pluck('users.id');
                    if ($waiterIds->isNotEmpty()) {
                        $orderDetail->waiters()->attach($waiterIds);
                        $orderDetail->refresh();
                    }
                }
            }
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
        return response()->json($orderDetail, 201);
    }

    /**
     * @OA\Put(
     *     path="/api/order-details/{id}",
     *     summary="Update an order detail",
     *     tags={"OrderDetails"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"product_id", "quantity", "type"},
     *              @OA\Property(property="product_id", type="integer"),
     *              @OA\Property(property="quantity", type="integer"),
     *              @OA\Property(property="type", type="string"),
     *              @OA\Property(property="observation", type="string")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Order detail updated"),
     *     @OA\Response(response=400, description="Invalid type"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'product_id' => 'required|integer',
            'order_id' => 'required|integer',
            'quantity' => 'required|integer',
            'type' => 'required|string',
            'observation' => 'nullable|string',
        ];
        $validatedData = $this->validate($rules, $request);
        if (!$this->validaType($validatedData['type'])) {
            return response()->json(['message' => 'Invalid type'], 400);
        }
        try {
            $orderDetail = $this->ordersDetailsService->update($id, $validatedData);
            $orderDetail->refresh();
            return response()->json($orderDetail, 200);
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/order-details/{id}",
     *     summary="Delete an order detail",
     *     tags={"OrderDetails"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Order detail deleted"),
     *     @OA\Response(response=404, description="Order detail not found"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function delete($id)
    {
        try {
            $deleted = $this->ordersDetailsService->delete($id);
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
        if ($deleted) {
            return response()->json(['message' => 'Order detail deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Order detail not found'], 404);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/order-details/{id}",
     *     summary="Get an order detail by ID",
     *     tags={"OrderDetails"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation"),
     *     @OA\Response(response=404, description="Order detail not found")
     * )
     */
    public function show($id)
    {
        $orderDetail = $this->ordersDetailsService->findbyOrderId($id);
        if ($orderDetail) {
            return response()->json($orderDetail, 200);
        } else {
            return response()->json(['message' => 'Order detail not found'], 404);
        }
    }

    public function type()
    {
        $diff = env('DIFF_COMMISSIONS', 0);
        $extras = [];
        if ($diff === true) {
            $extras = ['Animación' => 'ANIMATION'];
        }

        $listaDeTipos = [
            'Cliente' => 'CLIENT',
            'Mesero' => 'WAITER'
        ];
        $listaDeTipos = array_merge($listaDeTipos, $extras);
        return $listaDeTipos;
    }

    public function validaType($type)
    {
        $listaDeTipos = $this->type();
        // buscamos $type en $listadeTipos pero en los values
        return in_array($type, $listaDeTipos);
    }

    /**
     * @OA\Get(
     *     path="/api/order-details/types",
     *     summary="Get all order detail types",
     *     tags={"OrderDetails"},
     *     security={{"csrf":{}}},
     *     @OA\Response(response=200, description="Successful operation")
     * )
     */
    public function detailsType()
    {
        $listaDeTipos = $this->type();

        $result = [];
        foreach ($listaDeTipos as $name => $value) {
            $result[] = ['name' => $name, 'value' => $value];
        }

        return response()->json($result, 200);
    }
}
