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
            ['name' => 'Inbox'],
            ['name' => 'Văn bản đi'],
            ['name' => 'Văn bản nội bộ'],
        ]);
    }
}
