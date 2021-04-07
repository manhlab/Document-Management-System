<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\Document;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Document::find($this->document)->creator_id == $this->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|numeric|unique:documents,id,'.$this->document,
            'symbol' => 'nullable|string|max:30',
            'abstract' => 'nullable|string',
            'book_id' => 'nullable|exists:books,id',
            'type_id' => 'nullable|exists:document_types,id',
            'signer_id' => 'nullable|exists:signers,id',
            'writer_id' => 'nullable|exists:users,id',
            'effective_at' => 'nullable|date',
            'sign_at' => 'nullable|date',
            'publisher_id' => 'nullable|exists:organizes,id',
            'link_id' => 'nullable|exists:documents,id',
        ];
    }
}
