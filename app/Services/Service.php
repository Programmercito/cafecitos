<?php 
namespace App\Services;

use App\Exceptions\OrderIsClosedException;
use Illuminate\Support\Facades\Auth;
use App\Models\Orders;

class Service
{
    public function validateModify(Orders $orders){
        $user = Auth::user();
        $perfil=$user->type;
        
        if ($orders->status !== 'OPEN') {
            throw new OrderIsClosedException('La orden no está abierta y no puede ser modificada.');
        }
    }
}