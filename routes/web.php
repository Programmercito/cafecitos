<?php

use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrdersDetailsController;
use App\Http\Controllers\OrdersWaitersController;
use App\Http\Controllers\PingController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'hi!';
});

// =======================
// API v1 (solo rename de endpoints)
// =======================
Route::prefix('api/')->group(function () {
    // Healthcheck (GET/POST como tenías)
    Route::match(['get', 'post'], '/health', [PingController::class, 'ping']);

    // Auth pública
    Route::post('/auth/login', [UsersController::class, 'login']);
    Route::delete('/auth/logout', [UsersController::class, 'logout'])->middleware('auth');
    Route::post('/auth/change-password', [UsersController::class, 'changePassword'])->middleware('auth');
    Route::get('/users/waiters', [UsersController::class, 'waiters']);

    // -----------------------
    // Lecturas generales (auth)
    // -----------------------
    Route::middleware(['auth'])->group(function () {
        Route::get('/users/types', [UsersController::class, 'usersType']);
        Route::get('/orders/types', [OrdersController::class, 'ordersType']);
        Route::get('/order-details/types', [OrdersDetailsController::class, 'detailsType']);
        Route::get('/products/types', [ProductsController::class, 'productosType']);

        // Productos (lectura)
        Route::get('/products', [ProductsController::class, 'index']);
        Route::get('/products/{id}/image', [ProductsController::class, 'showImage']);
        Route::get('/products/{id}', [ProductsController::class, 'show']);
    });

    // -----------------------
    // Admin: Usuarios
    // -----------------------
    Route::middleware(['auth', 'role:ADMINISTRATOR'])->group(function () {
        Route::post('/users', [UsersController::class, 'store']);
        Route::get('/users', [UsersController::class, 'index']);
        Route::get('/users/{id}', [UsersController::class, 'show']);
        Route::put('/users/{id}', [UsersController::class, 'update']);
        Route::patch('/users/{id}/status', [UsersController::class, 'changeStatus']);
    });

    // -----------------------
    // Admin: Productos (escritura)
    // -----------------------
    Route::middleware(['auth', 'role:ADMINISTRATOR'])->group(function () {
        Route::post('/products', [ProductsController::class, 'store']);
        Route::put('/products/{id}', [ProductsController::class, 'update']);
        Route::patch('/products/{id}/status', [ProductsController::class, 'changeStatus']);
        Route::post('/products/{id}/image', [ProductsController::class, 'uploadImage']);
    });

    // -----------------------
    // Admin: Ordenes
    // -----------------------
    Route::middleware(['auth', 'role:ADMINISTRATOR'])->group(function () {
        Route::get('/orders/move-to-commissiong', [OrdersController::class, 'moveToCommissiong']);
        Route::get('/orders/move-to-processed', [OrdersController::class, 'moveToProcessed']);
    });

    // -----------------------
    // Histórico de órdenes (Admin + Encargado)
    // -----------------------
    Route::middleware(['auth', 'role:ADMINISTRATOR,IN_CHARGE'])->group(function () {
        Route::get('/orders/history', [OrdersController::class, 'getAll']);
        Route::put('/order-details/{id}', [OrdersDetailsController::class, 'update']);
        Route::delete('/order-details/{id}', [OrdersDetailsController::class, 'delete']);

    });

    // -----------------------
    // Órdenes (Admin + Mozo + Encargado)
    // -----------------------
    Route::middleware(['auth', 'role:ADMINISTRATOR,WAITER,IN_CHARGE'])->group(function () {
        Route::get('/orders/{id}', [OrdersController::class, 'show']);
        Route::get('/order-details/{id}', [OrdersDetailsController::class, 'show']);
        Route::get('/order-waiters/{id}', [OrdersWaitersController::class, 'show']);
        Route::patch('/orders/{id}/status/{status}', [OrdersController::class, 'changeStatus']);
    });

    // -----------------------
    // Detalles y asignaciones (Mozo + Encargado)
    // -----------------------
    Route::middleware(['auth', 'role:WAITER,IN_CHARGE'])->group(function () {
        Route::post('/orders', [OrdersController::class, 'store']);
        Route::post('/order-details', [OrdersDetailsController::class, 'store']);

        Route::post('/order-waiters', [OrdersWaitersController::class, 'store']);
        Route::put('/order-waiters/{id}', [OrdersWaitersController::class, 'update']);
        Route::delete('/order-waiters/{id}', [OrdersWaitersController::class, 'delete']);

        Route::get('/me/orders', [OrdersController::class, 'getMyOrders']);
    });
});
