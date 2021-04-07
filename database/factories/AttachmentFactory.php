<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Attachment;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Entities\Document;

$factory->define(Attachment::class, function (Faker $faker) {
    $exts = ['doc', 'docx', 'xls', 'xlsx', 'png', 'jpg'];
    return [
        'document_id' => Document::all()->random()->id,
        'name' => $name = Str::random(rand(10, 30)),
        'extension' => $ext = $exts[array_rand($exts)],
        'size' => rand(0, 99),
        'path' => 'attachemts/'.$name.'.'.$ext,
    ];
});
