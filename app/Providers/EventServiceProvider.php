<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\{
    UserViewedDocument,
    UsersReceivedDocument,
};
use App\Listeners\{
    UpdateReceiverToSeen,
    NotifyDocumentReceivedToUsers,
};

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        UserViewedDocument::class => [
            UpdateReceiverToSeen::class,
        ],
        UsersReceivedDocument::class => [
            NotifyDocumentReceivedToUsers::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        \App\Entities\User::observe(\App\Observers\UserObserver::class);
    }
}
