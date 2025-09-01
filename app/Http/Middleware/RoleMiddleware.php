<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use app\Models\Users;

class RoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        $user = Auth::user();
        if (! $user || ! in_array($user->type, $roles)) {
            abort(403);
        }
        return $next($request);
    }
}
