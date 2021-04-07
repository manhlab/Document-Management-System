<?php

namespace App\Exceptions;

use Exception;

class RelationIdsNotAllow extends Exception
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
        return $this->respondError('The relation id "'. $this->getMessage() .'" not allow.', 405);
    }
}
