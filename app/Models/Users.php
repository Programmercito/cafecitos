<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Waiters;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Auth\Authenticatable;

/**
 * @OA\Schema(
 *     schema="User",
 *     type="object",
 *     title="User",
 *     required={"username", "is_active", "type", "first_name", "last_name"},
 *     @OA\Property(property="id", type="integer", format="int64", readOnly=true),
 *     @OA\Property(property="username", type="string"),
 *     @OA\Property(property="is_active", type="boolean"),
 *     @OA\Property(property="type", type="string", description="User role"),
 *     @OA\Property(property="first_name", type="string"),
 *     @OA\Property(property="last_name", type="string")
 * )
 */
class Users extends Model implements AuthenticatableContract
{
    use Authenticatable;

    // Nombre de la tabla real (está en mayúsculas en tu DB)
    protected $table = 'USERS';

    // PK
    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'int';

    // No tienes created_at / updated_at
    public $timestamps = false;

    // Campos asignables
    protected $fillable = [
        'username',
        'password',
        'is_active',
        'type',
        'first_name',
        'last_name'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

}

    
