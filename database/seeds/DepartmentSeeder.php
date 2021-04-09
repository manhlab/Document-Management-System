<?php

use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->insert([
            ['id' => 'BGD', 'name' => 'Совет управляющих', 'tel' => '0123456600'],
            ['id' => 'PKHSX', 'name' => 'Производственный отдел', 'tel' => '0123456700'],
            ['id' => 'PTCLD', 'name' => 'Phòng Tổ chức - Lao động', 'tel' => '0123456701'],
            ['id' => 'PTC', 'name' => 'Финансовый отдел', 'tel' => '0123456702'],
            ['id' => 'PKTCN', 'name' => 'Отдел технологий', 'tel' => '0123456703'],
            ['id' => 'PVT', 'name' => 'Офисные принадлежности', 'tel' => '0123456704'],
            ['id' => 'PKCS', 'name' => 'Phòng KCS', 'tel' => '0123456705'],
            ['id' => 'PHCHC', 'name' => 'Phòng Hành chính - Hậu cần', 'tel' => '0123456706'],
            ['id' => 'PCT', 'name' => 'Политический отдел', 'tel' => '0123456707'],
            ['id' => 'PTKCN', 'name' => 'Phòng Thiết Kế - Công Nghệ', 'tel' => '0123456708'],
            ['id' => 'BATLD', 'name' => 'Ban An Toàn Lao Động', 'tel' => '0123456709'],
            ['id' => 'XDL', 'name' => 'Phân xưởng Động lực', 'tel' => '0123456710'],
            ['id' => 'XVT', 'name' => 'Phân xưởng Vỏ tàu', 'tel' => '0123456711'],
            ['id' => 'XDTCD', 'name' => 'Phân xưởng Điện tàu - Cơ điện', 'tel' => '0123456712'],
            ['id' => 'XCK', 'name' => 'Phân xưởng Cơ khí', 'tel' => '0123456713'],
            ['id' => 'XDD', 'name' => 'Phân xưởng Đà đốc', 'tel' => '0123456714'],
            ['id' => 'XVKKTDT', 'name' => 'Phân xưởng VK-KTĐT', 'tel' => '0123456715'],
            ['id' => 'XO', 'name' => 'Phân xưởng Ống', 'tel' => '0123456716'],
        ]);
    }
}
