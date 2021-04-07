<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\DocumentReceived;
use Illuminate\Support\Collection;

class NotifyDocumentReceivedToUsers
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        if($event->users == null){
            return;
        }

        if(!($event->users instanceof Collection)){
            $event->users->notify(new DocumentReceived($event->document));
            return;
        }

        foreach ($event->users as $user) {
            $user->notify(new DocumentReceived($event->document));
        }
    }
}
