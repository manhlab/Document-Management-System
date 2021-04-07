<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Contracts\Repositories\UserRepository::class, \App\Repositories\Eloquents\UserRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DepartmentRepository::class, \App\Repositories\Eloquents\DepartmentRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\BookRepository::class, \App\Repositories\Eloquents\BookRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DocumentTypeRepository::class, \App\Repositories\Eloquents\DocumentTypeRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\DocumentRepository::class, \App\Repositories\Eloquents\DocumentRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\TitleRepository::class, \App\Repositories\Eloquents\TitleRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\SignerRepository::class, \App\Repositories\Eloquents\SignerRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\AttachmentRepository::class, \App\Repositories\Eloquents\AttachmentRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\RoleRepository::class, \App\Repositories\Eloquents\RoleRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\PermissionRepository::class, \App\Repositories\Eloquents\PermissionRepositoryEloquent::class);
        $this->app->bind(\App\Contracts\Repositories\OrganizeRepository::class, \App\Repositories\Eloquents\OrganizeRepositoryEloquent::class);
        //:end-bindings:
    }
}
