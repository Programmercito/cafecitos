<?php

namespace App\Resources;

class ValidateService
{
    public static function validateModel($rules, $request)
    {
        $extraFields = array_diff(array_keys($request->all()), array_keys($rules));

        if (!empty($extraFields)) {
            return response()->json(['message' => 'Campos adicionales no permitidos: ' . implode(', ', $extraFields)], 422);
        }

        $validatedData = $request->validate($rules);
        return $validatedData;
    }
}
