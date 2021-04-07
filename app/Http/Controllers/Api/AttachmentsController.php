<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Contracts\Repositories\AttachmentRepository;
use App\Http\Requests\Attachment\{
    IndexRequest,
    CreateRequest,
    ShowRequest,
    UpdateRequest,
    DestroyRequest,
};
use App\Traits\Attachmentable;

/**
 * Class AttachmentsController.
 *
 * @package namespace App\Http\Controllers\Api;
 */
class AttachmentsController extends Controller
{
    use Attachmentable;

    /**
     * @var AttachmentRepository
     */
    protected $repository;

    /**
     * AttachmentsController constructor.
     *
     * @param AttachmentRepository $repository
     */
    public function __construct(AttachmentRepository $repository)
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
        $data = $this->repository->all();
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
        $data = $this->attachment($request->file('attachments'), $request->document_id);
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
     * Download attachment
     * @param  $CLASS\ShowRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function download(ShowRequest $request, $id)
    {
        $data = $this->repository->find($id);
        return $this->downloadAttachment($data);
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
        $this->removeAttachment($this->repository->find($id));
        $this->repository->delete($id);
        return $this->respondNoContent();
    }
}
