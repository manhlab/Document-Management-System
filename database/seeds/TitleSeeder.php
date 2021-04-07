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
            ['id' => 'GD', 'name' => 'Giám đốc'],
            ['id' => 'PGD', 'name' => 'Phó giám đốc'],
            ['id' => 'TP', 'name' => 'Trưởng phòng'],
            ['id' => 'PP', 'name' => 'Phó phòng'],
            ['id' => 'CV', 'name' => 'Chuyên viên'],
        ]);
    }
}
