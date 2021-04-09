<?php

use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            ['name' => 'Входящие документы'],
            ['name' => 'Исходящие документы'],
            ['name' => 'Внутренние документы'],
        ]);
    }
}
