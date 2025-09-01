<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="OrderDetail",
 *     type="object",
 *     title="Order Detail",
 *     @OA\Property(property="id", type="integer", format="int64", readOnly=true),
 *     @OA\Property(property="order_id", type="integer"),
 *     @OA\Property(property="product_id", type="integer"),
 *     @OA\Property(property="quantity", type="integer"),
 *     @OA\Property(property="price", type="number", format="decimal"),
 *     @OA\Property(property="type", type="string"),
 *     @OA\Property(property="observation", type="string"),
 *     @OA\Property(property="product", ref="#/components/schemas/Product"),
 *     @OA\Property(property="orderWaiters", type="array", @OA\Items(ref="#/components/schemas/OrderWaiter"))
 * )
 */
class OrdersDetails extends Model
{
    protected $table = 'ORDER_DETAILS';

    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int'; 

    public $timestamps = false;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
        'type',
        'observation',
    ];

    protected $casts = [
        'order_id'    => 'integer',
        'product_id'  => 'integer',
        'quantity'    => 'integer',
        'price'       => 'decimal:2',
        'type'        => 'string',
        'observation' => 'string',
    ];

    protected $with = ['product','orderWaiters'];

    // Relaciones
    public function order()
    {
        return $this->belongsTo(Orders::class, 'order_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo(Products::class, 'product_id', 'id');
    }

    public function orderWaiters()
    {
        return $this->hasMany(OrdersWaiters::class, 'order_det_id', 'id');
    }

    public function waiters()
    {
        return $this->belongsToMany(
            Users::class,
            'ORDER_WAITERS',
            'order_det_id',
            'waiter_id'
        )->withPivot('id');
    }
}

