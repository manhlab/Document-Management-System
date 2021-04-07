<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class DocumentType.
 *
 * @package namespace App\Entities;
 */
class DocumentType extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'name'];

    public $timestamps = false;

    public $incrementing = false;

    protected $keyType = 'string';
    
    public function documents(){
        return $this->hasMany(Documents::class);
    }

}
