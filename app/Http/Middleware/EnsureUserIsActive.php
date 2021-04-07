<?php

namespace App\Http\Middleware;

use Closure;

class EnsureUserIsActive
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!$request->user()->active){
            throw new \App\Exceptions\AccountNotActive;
        }
        return $next($request);
    }
}
