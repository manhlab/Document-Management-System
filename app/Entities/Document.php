<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Document.
 *
 * @package namespace App\Entities;
 */
class Document extends Model implements Transformable
{
    use TransformableTrait;
    use \App\Traits\ActionCallable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'symbol',
        'abstract',
        'book_id',
        'type_id',
        'signer_id',
        'sign_at',
        'creator_id',
        'writer_id',
        'effective_at',
        'publisher_id',
        'link_id',
    ];

    public $appends = [
        'seen',
    ];

    protected $casts = [
        'effective_at' => 'date:Y-m-d',
        'sign_at' => 'date:Y-m-d',
    ];

    public function receivers(){
        return $this->belongsToMany(User::class, 'document_receivers')->withPivot(['seen']);;
    }

    public function organizes(){
        return $this->belongsToMany(Organize::class, 'document_organizes');
    }

    public function type(){
        return $this->belongsTo(DocumentType::class, 'type_id');
    }

    public function attachments(){
        return $this->hasMany(Attachment::class);
    }

    public function book(){
        return $this->belongsTo(Book::class);
    }

    public function publisher(){
        return $this->belongsTo(Organize::class, 'publisher_id');
    }

    public function signer(){
        return $this->belongsTo(Signer::class);
    }

    public function creator(){
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function writer(){
        return $this->belongsTo(User::class, 'writer_id');
    }

    public function linkTo(){
        return $this->belongsTo(Document::class, 'link_id');
    }

    public function linked(){
        return $this->hasMany(Document::class, 'link_id');
    }

    public function getSeenAttribute(){
        $receiver = $this->receivers()->where('id', auth()->id())->first();
        if($receiver){
            return $receiver->pivot->seen;
        }
        return true;
    }

}
