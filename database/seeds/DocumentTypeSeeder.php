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
            ['id' => 'BC', 'name' => 'Báo cáo'],
            ['id' => 'CV', 'name' => 'Công văn'],
            ['id' => 'HD', 'name' => 'Hướng dẫn'],
            ['id' => 'KH', 'name' => 'Kế hoạch'],
            ['id' => 'NQ', 'name' => 'Nghị quyết'],
            ['id' => 'ND', 'name' => 'Nghị định'],
            ['id' => 'QD', 'name' => 'Quyết định'],
        ]);
    }
}
