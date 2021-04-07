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
            ['id' => 'HS', 'name' => 'Công ty Hải Sơn'],
            ['id' => 'TCHQ', 'name' => 'Tổng cục Hải quán'],
            ['id' => 'BTC', 'name' => 'Bộ Tài chính'],
            ['id' => 'BCT', 'name' => 'Bộ Công Thương'],
            ['id' => 'VPTT', 'name' => 'Văn phòng Thường trực BCĐ 389 quốc gia'],
            ['id' => 'BTNMT', 'name' => 'Bộ Tài nguyên môi trường'],
            ['id' => 'BQP', 'name' => 'Bộ Quốc phòng'],
            ['id' => 'SHC', 'name' => 'Sở Hành Chính thành phố Đà Nẵng'],
        ]);
    }
}
