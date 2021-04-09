<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class ExportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasPermissionTo('Статистическая');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'book' => 'nullable|exists:books,id',
            'type' => 'nullable|exists:document_types,id',
            'from' => 'nullable|date',
            'to' => 'nullable|date',
            'export' => 'required|in:Xlsx,Csv,Xls,Html',
        ];
    }
}
