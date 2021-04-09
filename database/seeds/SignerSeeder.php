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
            ['name' => 'Nguyễn Thanh Toàn', 'description' => 'Главный финансовый директор'],
            ['name' => 'Đào Thị Xa', 'description' => 'Генеральный директор'],
            ['name' => 'Hoàng Công', 'description' => 'Руководитель компание'],
            ['name' => 'Nguyễn Công Quân', 'description' => null],
            ['name' => 'Nguyễn Đức Tiên', 'description' => 'Замдиректор'],
        ]);
    }
}
