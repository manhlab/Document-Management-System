<?php

namespace App\Imports;

use App\Entities\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsErrors;

class UsersImport
implements 
    ToModel, 
    WithHeadingRow,
    WithValidation,
    SkipsOnError
{
    use SkipsErrors;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new User([
            'name' => $row['ten'],
            'email' => $row['email'],
            'tel' => $row['so_dien_thoai'],
            'birthday' => $row['ngay_sinh'],
            'title_id' => $row['chuc_danh'],
            'department_id' => $row['phong_ban'],
            'active' => $row['kich_hoat'],
            'password' => \Hash::make($row['mat_khau'] ?? 'password'),
        ]);
    }

    public function headingRow(): int
    {
        return 1;
    }

    public function rules(): array
    {
        return [
            'ten' => 'required|string',
            'email' => 'required|email',
            'mat_khau' => 'nullable|string|min:6|max:32',
            'so_dien_thoai' => 'nullable|string',
            'ngay_sinh' => 'nullable|date',
            'phong_ban' => 'nullable|exists:departments,id',
            'chuc_danh' => 'nullable|exists:titles,id',
            'kich_hoat' => 'nullable|boolean',
        ];
    }

}
