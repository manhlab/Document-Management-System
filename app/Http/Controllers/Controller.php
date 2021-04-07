<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Prettus\Repository\Traits\Respondable;
use App\Events\ActionCalled;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Respondable;

    public function gateAction($repository, $request, $id)
    {
        if(!$repository instanceof \Prettus\Repository\Contracts\RepositoryInterface){
            throw new \Exception('The parameter $repository must be instance of Prettus\Repository\Contracts\RepositoryInterface', 1);
        }

        if(!$request->filled('action')){
            return null;
        }

        $request->validate([
            'action' => 'string',
            'params' => 'nullable|json',
        ]);

        $data = $repository->find($id);

        if(!method_exists($data, 'callAction')){
            throw new \Exception('The class ' . get_class($data) . ' must use App\Traits\ActionCallable trait', 1);
        }

        $data->callAction($request->action, $request->params);

        event(new ActionCalled($data, $request->action, json_decode($request->params)));

        return $data;
    }
}
