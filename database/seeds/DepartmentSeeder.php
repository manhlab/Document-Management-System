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
            ['id' => 'BGD', 'name' => 'Юридический отдел', 'tel' => '0123456600'],
            ['id' => 'PKHSX', 'name' => 'Планово-экономический отдел', 'tel' => '0123456700'],
            ['id' => 'PTCLD', 'name' => 'Отдел кадров', 'tel' => '0123456701'],
            ['id' => 'PTC', 'name' => 'Финансовый отдел', 'tel' => '0123456702'],
            ['id' => 'PKTCN', 'name' => 'Отдел ремонта и технического обслуживания', 'tel' => '0123456703'],
            ['id' => 'PVT', 'name' => 'Отдел закупок', 'tel' => '0123456704'],
            ['id' => 'PKCS', 'name' => 'Отдел маркетинга', 'tel' => '0123456705'],
            ['id' => 'PHCHC', 'name' => 'Cлужба HR', 'tel' => '0123456706'],
            ['id' => 'PCT', 'name' => 'Политический отдел', 'tel' => '0123456707'],
            ['id' => 'PTKCN', 'name' => 'Отдел контроля качества', 'tel' => '0123456708'],
            ['id' => 'BATLD', 'name' => 'Отдел автоматизации', 'tel' => '0123456709'],
            ['id' => 'XDL', 'name' => 'Отдел маркетинга', 'tel' => '0123456710'],
            ['id' => 'XVT', 'name' => 'Отдел секретариата', 'tel' => '0123456711'],
            ['id' => 'XDTCD', 'name' => 'Отдел клиентского сервиса', 'tel' => '0123456712'],
            ['id' => 'XCK', 'name' => 'Отдел транспортной логистики', 'tel' => '0123456713'],
            ['id' => 'XDD', 'name' => 'Отдел продаж', 'tel' => '0123456714'],
            ['id' => 'XVKKTDT', 'name' => 'ИТ-отдел', 'tel' => '0123456715'],
            ['id' => 'XO', 'name' => 'Производственный отдел', 'tel' => '0123456716'],
        ]);
    }
}