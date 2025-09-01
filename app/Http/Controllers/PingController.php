<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PingController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/health",
     *      operationId="ping_get",
     *      tags={"Healthcheck"},
     *      summary="Healthcheck endpoint",
     *      description="Returns pong",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string", example="pong")
     *          )
     *      )
     * )
     * @OA\Post(
     *      path="/api/health",
     *      operationId="ping_post",
     *      tags={"Healthcheck"},
     *      summary="Healthcheck endpoint",
     *      description="Returns pong",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string", example="pong")
     *          )
     *      )
     * )
     */
    public function ping()
    {
        return response()->json(['message' => 'pong']);
    }
}
