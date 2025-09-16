<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WaiterCommission extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The table associated with the model.
     *
     * @var string|null
     */
    protected $table = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'waiter_id',
        'price',
        'waiter_comision',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'waiter_id' => 'integer',
        'price' => 'float',
        'waiter_comision' => 'float',
    ];

    /**
     * Get the waiter that owns the commission.
     */
    public function waiter()
    {
        return $this->belongsTo(Users::class, 'waiter_id', 'id');
    }
    protected $with = ['waiter'];

}
