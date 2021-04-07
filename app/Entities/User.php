<?php

namespace App\Entities;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Auth\Passwords\CanResetPassword as CanResetPasswordTrait;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class User extends Authenticatable implements Transformable, CanResetPassword
{
    use HasApiTokens, Notifiable, HasRoles, CanResetPasswordTrait, TransformableTrait;
    use \App\Traits\ActionCallable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name', 
        'email', 
        'password',
        'tel',
        'birthday',
        'department_id',
        'title_id',
        'active',
    ];

    public $incrementing = false;

    protected $keyType = 'string';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'active' => 'boolean',
        'birthday' => 'date:Y-m-d',
    ];

    public function groups(){
        return $this->belongsToMany(Group::class, GroupUser::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }

    public function title(){
        return $this->belongsTo(Title::class);
    }

    public function createdDocuments(){
        return $this->hasMany(Document::class, 'creator_id');
    }

    public function wroteDocuments(){
        return $this->hasMany(Document::class, 'writer_id');
    }

    public function receivedDocuments(){
        return $this->belongsToMany(Document::class, 'document_receivers');
    }

    public function getDocumentsAttribute(){
        return $this->createdDocuments->merge($this->receivedDocuments)->merge($this->wroteDocuments());
    }
}
