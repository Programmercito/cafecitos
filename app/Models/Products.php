<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Product",
 *     type="object",
 *     title="Product",
 *     required={"type", "description", "client_price", "waiter_price", "animation_price", "waiter_commission", "is_active"},
 *     @OA\Property(property="id", type="integer", format="int64", readOnly=true),
 *     @OA\Property(property="type", type="string"),
 *     @OA\Property(property="description", type="string"),
 *     @OA\Property(property="client_price", type="number", format="decimal"),
 *     @OA\Property(property="waiter_price", type="number", format="decimal"),
 *     @OA\Property(property="animation_price", type="number", format="decimal"),
 *     @OA\Property(property="waiter_commission", type="number", format="decimal"),
 *     @OA\Property(property="is_active", type="boolean")
 * )
 */
class Products extends Model
{
    // Nombre real de la tabla
    protected $table = 'PRODUCTS';

    // Clave primaria
    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'int';

    // No hay created_at / updated_at
    public $timestamps = false;

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'type',
        'description',
        'client_price',
        'waiter_price',
        'animation_price',
        'image',
        'waiter_commission',
        'is_active',
    ];

    // Opcional: casts para columnas
    protected $casts = [
        'client_price' => 'decimal:2',
        'waiter_price' => 'decimal:2',
        'animation_price' => 'decimal:2',
        'waiter_commission' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'image',
    ];
}

