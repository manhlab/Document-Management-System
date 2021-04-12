<?php

use Illuminate\Database\Seeder;

class SignerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('signers')->insert([
            ['name' => 'Головченко Юрий Алексеевич', 'description' => 'Главный финансовый директор'],
            ['name' => 'Сергеев Николай Михайлович', 'description' => 'Генеральный директор'],
            ['name' => 'Сергеев Николай Михайлович', 'description' => 'Руководитель компание'],
            ['name' => 'Сурикова Анастасия Николаевна', 'description' => null],
            ['name' => 'Майшева Полина Родионовна', 'description' => 'Замдиректор'],
        ]);
    }
}
