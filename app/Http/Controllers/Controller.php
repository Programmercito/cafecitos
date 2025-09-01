<?php

namespace App\Http\Controllers;

use App\Resources\ValidateService;
use Illuminate\Support\Facades\Auth;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Cafecitos API WEB",
 *      description="API for Cafecitos",
 *      @OA\Contact(
 *          email="devcitobo@outlook.com"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *      )
 * )
 * @OA\Components(
 *     @OA\SecurityScheme(
 *         securityScheme="csrf",
 *         type="apiKey",
 *         in="header",
 *         name="X-XSRF-TOKEN",
 *         description="Para obtener este token, primero asegúrate de haber iniciado sesión. Luego, ejecuta el endpoint GET /sanctum/csrf-cookie. Finalmente, abre las herramientas de desarrollador de tu navegador, busca la cookie 'XSRF-TOKEN', copia su valor y pégalo aquí. Este token es necesario para todas las peticiones que modifican datos (POST, PUT, PATCH, DELETE)."
 *     )
 * )
 * @OA\Get(
 *     path="/sanctum/csrf-cookie",
 *     summary="Get CSRF cookie for SPA authentication",
 *     description="Call this endpoint to receive the XSRF-TOKEN cookie. The value of this cookie must then be sent in the X-XSRF-TOKEN header on all subsequent state-changing requests.",
 *     tags={"CSRF"},
 *     @OA\Response(
 *         response=204,
 *         description="CSRF cookie set successfully"
 *     )
 * )
 */
abstract class Controller
{
    public function currentUser()
    {
        return Auth::user();
    }

    public function validate($rules, $request)
    {
        return ValidateService::validateModel($rules, $request);
    }

    public function validateStatus($status, $order)
    {
        $validStatuses = ['OPEN', 'CLOSED', 'PAID', 'COMISSIONED', 'PROCESSED', 'VOIDED'];

        if (!in_array($status, $validStatuses)) {
            return response()->json(['message' => 'Estado invalido'], 400);
        } else if ($status === 'CLOSED' && $order->status !== 'OPEN') {
            return response()->json(['message' => 'Orden no está abierta'], 400);
        } else if ($status === 'PAID' && $order->status !== 'CLOSED') {
            return response()->json(['message' => 'Orden no está cerrada por el mesero'], 400);
        } else if ($status === 'COMISSIONED' && $order->status !== 'PAID') {
            return response()->json(['message' => 'Orden no está pagada'], 400);
        } else if ($status === 'PROCESSED' && $order->status !== 'COMISSIONED') {
            return response()->json(['message' => 'Orden no está comisionada'], 400);
        } else if ($status === $order->status) {
            return response()->json(['message' => 'Orden ya está en este estado'], 400);
        } else if ($status === 'VOIDED' && !in_array($order->status, ['CLOSED', 'PAID', 'COMISSIONED'])) {
            return response()->json(['message' => 'Orden no puede ser anulada'], 400);
        }
        
        $typeuser = Auth::user()->type;
        if ($status === 'CLOSED' && !in_array($typeuser, ['IN_CHARGE', 'WAITER', 'ADMINISTRATOR'])) {
            return response()->json(['message' => 'No tiene permisos para cerrar esta orden'], 403);
        } else if ($status === 'PAID' && !in_array($typeuser, ['IN_CHARGE', 'ADMINISTRATOR'])) {
            return response()->json(['message' => 'No tiene permisos para marcar esta orden como pagada'], 403);
        } else if ($status === 'COMISSIONED' && !in_array($typeuser, ['ADMINISTRATOR'])) {
            return response()->json(['message' => 'No tiene permisos para marcar esta orden como comisionada'], 403);
        } else if ($status === 'PROCESSED' && !in_array($typeuser, ['ADMINISTRATOR'])) {
            return response()->json(['message' => 'No tiene permisos para marcar esta orden como procesada'], 403);
        } else if ($status === 'VOIDED' && !in_array($typeuser, ['ADMINISTRATOR', 'WAITER', 'IN_CHARGE'])) {
            return response()->json(['message' => 'No tiene permisos para anular esta orden'], 403);
        }
    }
}
