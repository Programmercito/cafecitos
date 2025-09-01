<?php

namespace App\Http\Controllers;

use App\Exceptions\OrderIsClosedException;
use App\Services\OrdersWaitersService;
use Illuminate\Http\Request;

class OrdersWaitersController extends Controller
{
    private OrdersWaitersService $ordersWaitersService;

    public function __construct(OrdersWaitersService $ordersWaitersService)
    {
        $this->ordersWaitersService = $ordersWaitersService;
    }

    /**
     * @OA\Post(
     *     path="/api/order-waiters",
     *     summary="Create a new order waiter assignment",
     *     tags={"OrderWaiters"},
     *     security={{"csrf":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"order_det_id", "waiter_id"},
     *              @OA\Property(property="order_det_id", type="integer"),
     *              @OA\Property(property="waiter_id", type="integer")
     *         )
     *     ),
     *     @OA\Response(response=201, description="Order waiter created"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function store(Request $request)
    {
        $rules = [
            'order_det_id' => 'required|integer',
            'waiter_id' => 'required|integer',
        ];
        $validatedData = $this->validate($rules, $request);
        try {
            $orderWaiter = $this->ordersWaitersService->create($validatedData);
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
        return response()->json($orderWaiter, 201);
    }

    /**
     * @OA\Put(
     *     path="/api/order-waiters/{id}",
     *     summary="Update an order waiter assignment",
     *     tags={"OrderWaiters"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"waiter_id"},
     *              @OA\Property(property="waiter_id", type="integer")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Order waiter updated"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function update(Request $request, $id)
    {
        $rules = [
            'waiter_id' => 'required|integer',
        ];
        $validatedData = $this->validate($rules, $request);
        try {
            $orderWaiter = $this->ordersWaitersService->update($id, $validatedData);
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
        $orderWaiter->refresh();
        return response()->json($orderWaiter, 200);
    }

    /**
     * @OA\Delete(
     *     path="/api/order-waiters/{id}",
     *     summary="Delete an order waiter assignment",
     *     tags={"OrderWaiters"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Order waiter deleted"),
     *     @OA\Response(response=404, description="Order waiter not found"),
     *     @OA\Response(response=409, description="Order is closed")
     * )
     */
    public function delete($id)
    {
        try {
            $deleted = $this->ordersWaitersService->delete($id);
        } catch (OrderIsClosedException $e) {
            return response()->json(['message' => $e->getMessage()], 409);
        }
        if ($deleted) {
            return response()->json(['message' => 'Order waiter deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Order waiter not found'], 404);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/order-waiters/{id}",
     *     summary="Get an order waiter assignment by ID",
     *     tags={"OrderWaiters"},
     *     security={{"csrf":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Successful operation"),
     *     @OA\Response(response=404, description="Order waiter not found")
     * )
     */
    public function show($id)
    {
        $orderWaiter = $this->ordersWaitersService->find($id);
        if ($orderWaiter) {
            return response()->json($orderWaiter, 200);
        } else {
            return response()->json(['message' => 'Order waiter not found'], 404);
        }
    }
}
