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
            ['name' => 'Разрешении должность', 'guard_name' => $guard],
            ['name' => 'Разрешении пользователь', 'guard_name' => $guard],
            ['name' => 'Разрешении подразделение', 'guard_name' => $guard],
            ['name' => 'Разрешении', 'guard_name' => $guard],
            ['name' => 'Разрешении подписал', 'guard_name' => $guard],
            ['name' => 'Разрешении место выдачи', 'guard_name' => $guard],
            ['name' => 'Разрешении вид документа', 'guard_name' => $guard],
            ['name' => 'Разрешении разрешение', 'guard_name' => $guard],
            ['name' => 'Право', 'guard_name' => $guard],
            ['name' => 'Статистическая', 'guard_name' => $guard],
            ['name' => 'Разрешении входящие документы', 'guard_name' => $guard],
            ['name' => 'Разрешении исходящие документы', 'guard_name' => $guard],
            ['name' => 'Разрешении внутренние документы', 'guard_name' => $guard],
            ['name' => 'Разрешении книги', 'guard_name' => $guard],
        ]);

        DB::table(config('permission.table_names.roles'))->insert([
            ['name' => 'Руководитель подразделения', 'guard_name' => $guard],
            ['name' => 'Ведущий специалист', 'guard_name' => $guard],
            ['name' => 'Администратор', 'guard_name' => $guard],
            ['name' => 'Секретарь', 'guard_name' => $guard],
        ]);

        Role::find(1)->syncPermissions([
            'Разрешении должность',
            'Разрешении пользователь',
            'Разрешении подразделение',
            'Разрешении подписал',
            'Разрешении место выдачи',
            'Разрешении разрешение',
            'Право',
            'Статистическая',
        ]);

        Role::find(3)->syncPermissions([
            'Разрешении должность',
            'Разрешении пользователь',
            'Разрешении подразделение',
            'Разрешении подписал',
            'Разрешении место выдачи',
            'Право',
            'Разрешении разрешение',
            'Разрешении',
            'Статистическая',
            'Разрешении входящие документы',
            'Разрешении исходящие документы',
            'Разрешении внутренние документы',
            'Разрешении вид документа',
            'Разрешении книги',
        ]);

        Role::find(4)->syncPermissions([
            'Статистическая',
            'Разрешении входящие документы',
            'Разрешении исходящие документы',
            'Разрешении внутренние документы',
            'Разрешении вид документа',
            'Разрешении книги',
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

        User::find('PKTCN-TP-1')->assignRole('Администратор');
        User::find('PKTCN-TP-100')->assignRole('Руководитель подразделения');
    }
}
