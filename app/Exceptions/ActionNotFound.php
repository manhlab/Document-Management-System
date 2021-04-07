<?php

namespace App\Exceptions;

use Exception;

class ActionNotFound extends Exception
{
    use \Prettus\Repository\Traits\Respondable;

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return $this->respondError('Action '. $this->getMessage() .' has not been defined.', 422);
    }
}
