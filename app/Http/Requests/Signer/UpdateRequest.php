<?php

namespace App\Http\Requests\Signer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasPermissionTo('Разрешении подписал');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|numeric|unique:signers,id,'.$this->signer,
            'name' => 'nullable|string',
            'description' => 'nullable|string',
        ];
    }
}
