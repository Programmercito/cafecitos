<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Order",
 *     type="object",
 *     title="Order",
 *     @OA\Property(property="id", type="integer", format="int64", readOnly=true),
 *     @OA\Property(property="order_date", type="string", format="date-time"),
 *     @OA\Property(property="status", type="string"),
 *     @OA\Property(property="waiter_id", type="integer"),
 *     @OA\Property(property="price_final", type="number", format="decimal"),
 *     @OA\Property(property="waiter_comision", type="number", format="decimal"),
 *     @OA\Property(property="updated_at", type="string", format="date-time"),
 *     @OA\Property(property="waiter", ref="#/components/schemas/User"),
 *     @OA\Property(property="details", type="array", @OA\Items(ref="#/components/schemas/OrderDetail"))
 * )
 */
class Orders extends Model
{
    protected $table = 'ORDERS';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'int';

    public $timestamps = false;

    protected $fillable = [
        'order_date',
        'status',
        'waiter_id',
        'price_final',
        'waiter_comision',
        'updated_at'
    ];

    protected $casts = [
        'order_date' => 'datetime',
        'status' => 'string',
        'waiter_id' => 'integer',
        'price_final' => 'decimal:2',
        'waiter_comision' => 'decimal:2',
        'updated_at' => 'datetime'
    ];

    protected $with = ['details', 'waiter'];

    // Relaciones
    public function waiter()
    {
        return $this->belongsTo(Users::class, 'waiter_id', 'id');
    }

    public function details()
    {
        return $this->hasMany(OrdersDetails::class, 'order_id', 'id');
    }
}
