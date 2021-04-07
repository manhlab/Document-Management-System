<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\UserRepository;
use App\Http\Requests\Me\{
    ShowRequest,
    UpdateRequest,
};

/**
 * Class MeController.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class MeController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * MeController constructor.
     *
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display the specified resource.

     * @param  $CLASS\ShowRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ShowRequest $request)
    {
        $data = $this->repository->find($request->user()->id);
        return $this->respond($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  $CLASS\UpdateRequest $request
     *
     * @return Response
     */
    public function update(UpdateRequest $request)
    {
        if($request->filled('password')){
            $request->password = \Hash::make($request->password);
        }
        $data = $this->repository->update(
            $request->except(['department_id', 'title_id', 'active', 'id']), 
            $request->user()->id
        );
        return $this->respond($data);
    }

}
