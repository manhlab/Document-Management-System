<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Document;
use Faker\Generator as Faker;

$factory->define(Document::class, function (Faker $faker) {
    $faker->addProvider(new App\Fakers\AbstractDocumentFacker($faker));
    return $faker->document();
});
