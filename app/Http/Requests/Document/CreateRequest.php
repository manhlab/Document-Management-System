<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;
use App\Entities\Book;
use Illuminate\Support\Str;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $typeName = Str::lower(Book::find($this->book_id)->name);
        return $this->user()->hasPermissionTo('Разрешении '. $typeName);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|numeric|unique:documents,id',
            'symbol' => 'nullable|string|max:30|unique:documents,symbol',
            'abstract' => 'nullable|string',
            'book_id' => 'required|exists:books,id',
            'type_id' => 'required|exists:document_types,id',
            'signer_id' => 'required|exists:signers,id',
            'creator_id' => 'required|exists:users,id',
            'writer_id' => 'nullable|exists:users,id',
            'effective_at' => 'required|date',
            'sign_at' => 'nullable|date',
            'publisher_id' => 'required|exists:organizes,id',
            'attachments.*' => 'nullable|file',
            'link_id' => 'nullable|exists:documents,id',
        ];
    }

    /**
     * Get all of the input and files for the request.
     *
     * @param  array|mixed|null  $keys
     * @return array
     */
    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['creator_id'] = $this->user()->id;
        return $data;
    }
}
