<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Organize.
 *
 * @package namespace App\Entities;
 */
class Organize extends Model implements Transformable
{
    use TransformableTrait;
    use \App\Traits\ActionCallable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'name'];

    public $timestamps = false;

    public $incrementing = false;

    protected $keyType = 'string';

    public function publishedDocuments(){
        return $this->hasMany(Document::class, 'publisher_id');
    }

    public function receivedDocuments(){
        return $this->belongsToMany(Document::class, 'document_organizes');
    }

}
