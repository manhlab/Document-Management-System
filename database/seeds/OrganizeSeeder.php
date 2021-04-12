<?php

use Illuminate\Database\Seeder;

class OrganizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('organizes')->insert([
            ['id' => 'HS', 'name' => 'ООО"Технопарк"'],
            ['id' => 'TCHQ', 'name' => 'Федеральная таможенная служба'],
            ['id' => 'BTC', 'name' => 'Минфин России'],
            ['id' => 'BCT', 'name' => 'Минпромторг России'],
            ['id' => 'VPTT', 'name' => 'ООО "Абсолют"'],
            ['id' => 'BTNMT', 'name' => 'Сбербанк России'],
            ['id' => 'BQP', 'name' => 'Федеральная налоговая служба'],
            ['id' => 'SHC', 'name' => 'ООО "Сириус'],
        ]);
    }
}
