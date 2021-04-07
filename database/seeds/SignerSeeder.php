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
            ['name' => 'Nguyễn Thanh Toàn', 'description' => 'Trưởng phòng tài chính'],
            ['name' => 'Đào Thị Xa', 'description' => 'Giám đốc sở'],
            ['name' => 'Hoàng Công', 'description' => 'Giám đốc công ty MACD'],
            ['name' => 'Nguyễn Công Quân', 'description' => null],
            ['name' => 'Nguyễn Đức Tiên', 'description' => 'Phó giám đốc điều hành Hải Sơn'],
        ]);
    }
}
