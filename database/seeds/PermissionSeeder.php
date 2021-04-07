<?php

use Illuminate\Database\Seeder;
use App\Entities\User;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $guard = config('auth.defaults.guard');

        DB::table(config('permission.table_names.permissions'))->insert([
            ['name' => 'Quản lý chức danh', 'guard_name' => $guard],
            ['name' => 'Quản lý người dùng', 'guard_name' => $guard],
            ['name' => 'Quản lý phòng ban', 'guard_name' => $guard],
            ['name' => 'Quản lý nhóm', 'guard_name' => $guard],
            ['name' => 'Quản lý người ký', 'guard_name' => $guard],
            ['name' => 'Quản lý nơi ban hành', 'guard_name' => $guard],
            ['name' => 'Quản lý loại văn bản', 'guard_name' => $guard],
            ['name' => 'Quản lý quyền', 'guard_name' => $guard],
            ['name' => 'Phân quyền', 'guard_name' => $guard],
            ['name' => 'Báo cáo thống kê', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản đến', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản đi', 'guard_name' => $guard],
            ['name' => 'Quản lý văn bản nội bộ', 'guard_name' => $guard],
            ['name' => 'Quản lý sổ văn bản', 'guard_name' => $guard],
        ]);

        DB::table(config('permission.table_names.roles'))->insert([
            ['name' => 'Lãnh đạo phòng', 'guard_name' => $guard],
            ['name' => 'Chuyên viên', 'guard_name' => $guard],
            ['name' => 'Quản trị hệ thống', 'guard_name' => $guard],
            ['name' => 'Văn thư', 'guard_name' => $guard],
        ]);

        Role::find(1)->syncPermissions([
            'Quản lý chức danh',
            'Quản lý người dùng',
            'Quản lý phòng ban',
            'Quản lý người ký',
            'Quản lý nơi ban hành',
            'Quản lý quyền',
            'Phân quyền',
            'Báo cáo thống kê',
        ]);

        Role::find(3)->syncPermissions([
            'Quản lý chức danh',
            'Quản lý người dùng',
            'Quản lý phòng ban',
            'Quản lý người ký',
            'Quản lý nơi ban hành',
            'Phân quyền',
            'Quản lý quyền',
            'Quản lý nhóm',
            'Báo cáo thống kê',
            'Quản lý văn bản đến',
            'Quản lý văn bản đi',
            'Quản lý văn bản nội bộ',
            'Quản lý loại văn bản',
            'Quản lý sổ văn bản',
        ]);

        Role::find(4)->syncPermissions([
            'Báo cáo thống kê',
            'Quản lý văn bản đến',
            'Quản lý văn bản đi',
            'Quản lý văn bản nội bộ',
            'Quản lý loại văn bản',
            'Quản lý sổ văn bản',
        ]);

        for ($i=0; $i < 10; $i++) { 
            User::where('department_id', 'PKTCN')->get()->random()->assignRole();
        }

        for ($i=0; $i < 10; $i++) { 
            User::where('department_id', 'PHCHC')->get()->random()->assignRole();
        }

        for ($i=0; $i < 50; $i++) { 
            User::whereNotIn('department_id', ['PKTCN', 'PHCHC'])
                ->get()
                ->random()
                ->assignRole(Role::all()->random()->id);
        }

        User::find('PKTCN-TP-1')->assignRole('Quản trị hệ thống');
    }
}
