<?php
namespace App\Services;

use App\Exceptions\OrderIsClosedException;
use App\Models\Orders;
use Illuminate\Support\Facades\Auth;

class Service
{
    public function validateModify(Orders $orders, $action)
    {
        $user = Auth::user();
        $perfil = $user->type;
        $iduser = $user->id;

        if ($action === 'new' && $iduser != $orders->waiter_id) {
            throw new OrderIsClosedException('La orden solo se le puede agregar productos si eres el creador de esta');
        } else if ($action === 'edit' && $perfil === 'WAITER') {
            throw new OrderIsClosedException('La orden solo puede ser modificada si eres admin o encargado');
        }

        if ($orders->status !== 'OPEN') {
            throw new OrderIsClosedException('La orden no está abierta y no puede ser modificada.');
        }
    }
}
