<?php

use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('document_types')->insert([
            ['id' => 'BC', 'name' => 'Отчет'],
            ['id' => 'CV', 'name' => 'Приказ'],
            ['id' => 'HD', 'name' => 'Интрукция'],
            ['id' => 'KH', 'name' => 'Справка'],
            ['id' => 'NQ', 'name' => 'Положение'],
            ['id' => 'ND', 'name' => 'Заявление'],
            ['id' => 'QD', 'name' => 'Договор'],
        ]);
    }
}
