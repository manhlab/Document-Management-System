<?php

use Illuminate\Database\Seeder;

class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('titles')->insert([
            ['id' => 'GD', 'name' => 'Директор'],
            ['id' => 'PGD', 'name' => 'ЗамДиректор'],
            ['id' => 'TP', 'name' => 'Менеджер'],
            ['id' => 'PP', 'name' => 'ЗамМенеджер'],
            ['id' => 'CV', 'name' => 'Ведущий специалист'],
        ]);
    }
}
