<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="OrderWaiter",
 *     type="object",
 *     title="Order Waiter Assignment",
 *     @OA\Property(property="id", type="integer", format="int64", readOnly=true),
 *     @OA\Property(property="order_det_id", type="integer"),
 *     @OA\Property(property="waiter_id", type="integer"),
 *     @OA\Property(property="comision", type="number", format="decimal"),
 *     @OA\Property(property="waiter", ref="#/components/schemas/User")
 * )
 */
class OrdersWaiters extends Model
{
    protected $table = 'ORDER_WAITERS';

    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int'; // aunque sea bigint en DB, PHP lo maneja como int

    public $timestamps = false;

    protected $fillable = [
        'order_det_id',
        'waiter_id',
    ];

    protected $casts = [
        'order_det_id' => 'integer',
        'waiter_id'    => 'integer',
        'comision'     => 'decimal:2'
    ];
    
    protected $with = ['waiter'];
    // Relaciones
    public function orderDetail()
    {
        return $this->belongsTo(OrdersDetails::class, 'order_det_id', 'id');
    }

    public function waiter()
    {
        return $this->belongsTo(Users::class, 'waiter_id', 'id');
    }
}

