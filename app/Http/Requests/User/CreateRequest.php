<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasPermissionTo('Разрешении пользователь');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:32|confirmed',
            'tel' => 'nullable|string|unique:users,tel',
            'birthday' => 'nullable|date',
            'department_id' => 'nullable|exists:departments,id',
            'title_id' => 'nullable|exists:titles,id',
            'active' => 'nullable|boolean',
        ];
    }
}
