<?php

namespace App\Exceptions;

use Exception;
use Prettus\Repository\Traits\Respondable;
use App\Entities\User;

class UserIdIncorrectFormat extends Exception
{
    use Respondable;
    
    protected $user;

    public function __construct(User $user){
        $this->user = $user;
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return $this->respondError("Код пользователя " . $this->user->id . " Неправилный Формат", 500);
    }
}
