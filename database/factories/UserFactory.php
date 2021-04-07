<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use App\Entities\Department;
use App\Entities\Title;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $name = $faker->name;
    return [
        'name' => Str::contains($name, '.') ? explode('.', $name)[1] : $name,
        'email' => $faker->unique()->safeEmail,
        'tel' => $faker->phoneNumber,
        'birthday' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'department_id' => Department::all()->random()->id,
        'title_id' => Title::all()->random()->id,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    ];
});
