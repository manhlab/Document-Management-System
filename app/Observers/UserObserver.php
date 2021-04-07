<?php

namespace App\Observers;

use App\Entities\User;
use Hash;

class UserObserver
{
    /**
     * Handle the user "creating" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function creating(User $user)
    {
        $department_id = $user->department_id;
        $title_id = $user->title_id;
        $lastUser = User::where('department_id', $department_id)->where('title_id', $title_id)->orderBy('id', 'desc')->first();
        $no = 1;
        if($lastUser){
            $no = explode('-', $lastUser->id)[2];
            if(!is_numeric($no)){
                throw new \App\Exceptions\UserIdIncorrectFormat($lastUser);
            }
            $no++;
        }
        $user->id = $department_id . '-' . $title_id . '-' . $no;
        return $user;
    }

    /**
     * Handle the user "created" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function created(User $user)
    {
        //
    }

    /**
     * Handle the user "updating" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function updating(User $user)
    {
        if($user->isDirty('password')){
            $user->password = Hash::make($user->password);
        }
    }

    /**
     * Handle the user "deleted" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the user "restored" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the user "force deleted" event.
     *
     * @param  \App\Entities\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
