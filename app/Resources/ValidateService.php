<?php

namespace App\Resources;

use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class ValidateService
{
    public static function validateModel($rules, $request)
    {
        $extraFields = array_diff(array_keys($request->all()), array_keys($rules));

        if (!empty($extraFields)) {
            throw ValidationException::withMessages([
                'extra' => 'Campos adicionales no permitidos: ' . implode(', ', $extraFields),
            ]);
        }

        $validatedData = $request->validate($rules);
        return $validatedData;
    }
}
