<?php

namespace App\Exceptions;

use Exception;
use Prettus\Repository\Traits\Respondable;

class AccountNotActive extends Exception
{
    use Respondable;

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return $this->respondError('Account not activated', 403);
    }
}
