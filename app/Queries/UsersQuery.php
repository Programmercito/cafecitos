<?php

namespace App\Queries;

use App\Models\Users;

class UsersQuery
{
    public function findByUsername(string $username)
    {
        return Users::where('username', $username)
            ->where('is_active', 1)
            ->first();
    }
}
