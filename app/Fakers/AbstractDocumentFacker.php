<?php

namespace App\Fakers;

use Faker\Provider\Base;
use Illuminate\Support\Facades\Http;
use App\Entities\Book;
use App\Entities\DocumentType;
use App\Entities\User;
use App\Entities\Signer;
use App\Entities\Organize;

class AbstractDocumentFacker extends Base
{
    public function document()
    {
        $response = Http::get('https://vanbanphapluat.co/api/search');

        $items = $response->json()['Items'];
        $num = count($items);

        $id = random_int(0, $num - 1);

        return $this->map($items[$id]);
    }

    protected function map(array $attributes)
    {
        $pHCHCUsers = User::where('department_id', 'PHCHC')->get();

        return [
            'symbol' => $attributes['SoHieu'],
            'abstract' => $attributes['TrichYeu'],
            'book_id' => Book::all()->random()->id,
            'type_id' => DocumentType::all()->random()->id,
            'signer_id' =>  Signer::all()->random()->id,
            'creator_id' => $pHCHCUsers->first() ? $pHCHCUsers->random()->id : 1,
            'effective_at' => date_create($attributes['NgayBanHanh'] ?? "now"),
            'sign_at' => date_create($attributes['NgayHieuLuc'] ?? "now"),
            'publisher_id' => Organize::all()->random()->id,
            'writer_id' => $pHCHCUsers->first() ? $pHCHCUsers->random()->id : 1,
            'link_id' => null,
        ];
    }
}