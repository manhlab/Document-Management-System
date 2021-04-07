<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Prettus\Repository\Traits\Respondable;

class Handler extends ExceptionHandler
{
    use Respondable;

    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if($exception instanceof \Illuminate\Database\Eloquent\ModelNotFoundException)
        {
            return $this->respondNotFound($exception->getMessage());
        }
        elseif($exception instanceof \Illuminate\Database\QueryException)
        {
            return $this->respondError($exception->errorInfo, 422);
        }
        elseif($exception instanceof \Illuminate\Database\Eloquent\RelationNotFoundException)
        {
            return $this->respondError($exception->getMessage(), 422);
        }
        elseif($exception instanceof \Prettus\Validator\Exceptions\ValidatorException)
        {
            return $this->respondError($exception, 400);
        }
        elseif($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException)
        {
            return $this->respondNotFound('Url not found');
        }
        return parent::render($request, $exception);
    }
}
