<?php

namespace App\Queries;

use App\Models\Users;
use Illuminate\Database\Eloquent\Builder;

class UsersQuery
{
    public function findByUsername(string $username)
    {
        return Users::where('username', $username)
            ->where('is_active', 1)
            ->first();
    }

    public function getWaiters(string $username): Builder
    {
        $query = Users::query()
            ->whereIn('type', ['WAITER', 'IN_CHARGE'])
            ->where('is_active', 1);

        if (!is_null($username)) {
            $query->where('username', 'like', "%{$username}%");
        }

        return $query->orderBy('username', 'asc');
    }
}
