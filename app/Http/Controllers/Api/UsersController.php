<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\UserRepository;
use App\Http\Requests\User\{
    IndexRequest,
    CreateRequest,
    ShowRequest,
    UpdateRequest,
    DestroyRequest,
    GiveRoleRequest,
    GivePermissionRequest,
    ExportRequest,
    ImportRequest,
};

/**
 * Class UsersController.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * UsersController constructor.
     *
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {
        $data = $this->repository->paginate();
        return $this->respond($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  $CLASS\CreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRequest $request)
    {
        $request->merge(['password' => \Hash::make($request->password)]);
        $data = $this->repository->create($request->all());
        return $this->respondCreated($data);
    }

    /**
     * Display the specified resource.

     * @param  $CLASS\ShowRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ShowRequest $request, $id)
    {
        $data = $this->repository->find($id);
        return $this->respond($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  $CLASS\UpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(UpdateRequest $request, $id)
    {
        if($request->filled('password')){
            $request->password = \Hash::make($request->password);
        }
        $data = $this->repository->update($request->all(), $id);
        return $this->respond($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $CLASS\DestroyRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestroyRequest $request, $id)
    {
        $this->repository->delete($id);
        return $this->respondNoContent();
    }

    public function giveRole(GiveRoleRequest $request, $user, $role){
        $this->repository->find($user)->assignRole($role);
        return $this->respondNoContent();
    }

    public function revokeRole(GiveRoleRequest $request, $user, $role){
        $this->repository->find($user)->removeRole($role);
        return $this->respondNoContent();
    }

    public function givePermission(GiveRoleRequest $request, $user, $permission){
        $this->repository->find($user)->givePermissionTo($permission);
        return $this->respondNoContent();
    }

    public function revokePermission(GiveRoleRequest $request, $user, $permission){
        $this->repository->find($user)->revokePermissionTo($permission);
        return $this->respondNoContent();
    }

    public function import(ImportRequest $request)
    {
        \Excel::import(new \App\Imports\UsersImport, $request->file('data'));
        return $this->respondNoContent();
    }

    public function export(ExportRequest $request)
    {
        $users = $this->repository->all();
        $exporter = new \App\Exports\UsersExport($users);
        $fileName = 'Список пользавателя.' . $request->export;
        return \Excel::download($exporter, $fileName, $request->export);
    }

}
