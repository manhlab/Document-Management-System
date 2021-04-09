<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Entities\Document;

class DocumentReceived extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var Document
     */
    protected $document;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Document $document)
    {
        $this->document = $document;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject($this->document->type->name)
                    ->greeting($this->document->type->name)
                    ->line('Краткое содержание: '. $this->document->abstract)
                    ->action('Деталь', url($this->getPathToDocument()));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'title' => $this->document->type->name,
            'content' => $this->document->abstract,
            'path' => $this->getPathToDocument(),
        ];
    }

    protected function getPathToDocument(){
        return '/#/documents/'.$this->document->id;
    }
}
