<?php

namespace App\Exceptions;

use Exception;

class RelationNotAllow extends Exception
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
        return $this->respondError('The relation "'. $this->getMessage() .'" not allow.', 405);
    }
}
