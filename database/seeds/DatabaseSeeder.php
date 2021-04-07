<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DepartmentSeeder::class);
        $this->call(TitleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(BookSeeder::class);
        $this->call(DocumentTypeSeeder::class);
        $this->call(OrganizeSeeder::class);
        $this->call(SignerSeeder::class);
        $this->call(DocumentSeeder::class);
    }
}
