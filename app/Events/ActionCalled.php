<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Entities\Document;
use App\Entities\User;

class ActionCalled
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $model;
    public $action;
    public $paramIds;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($model, string $action, $params = [])
    {
        $this->model = $model;
        $this->action = $action;
        $this->paramIds = collect($params);
        $this->paramIds->shift();

        $this->eventsRegister();
    }

    protected function eventsRegister()
    {
        if($this->action == 'attach'){
            if(!$this->paramIds->count()){
                return;
            }
            event(new UsersReceivedDocument($this->model, User::find($this->paramIds)));
        }
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
