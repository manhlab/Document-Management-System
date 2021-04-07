<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\AttachmentRepository;
use App\Entities\Attachment;

/**
 * Class AttachmentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class AttachmentRepositoryEloquent extends BaseRepository implements AttachmentRepository
{
    /*
    * @var array
    */
   protected $fieldSearchable = [
       'id' => '=',
       'document_id' => '=',
       'name' => 'like',
       'extension' => '=',
       'size' => '=',
       'path' => 'like',

       'document.id' => '=',
       'document.symbol' => 'like',
       'document.abstract' => 'like',
       'document.book_id' => '=',
       'document.type_id' => '=',
       'document.signer_id' => '=',
       'document.creator_id' => '=',
       'document.writer_id' => '=',
       'document.effective_at' => 'like',
       'document.sign_at' => 'like',
       'document.publisher_id' => 'like',
       'document.link_id' => '=',
   ];
   
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Attachment::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
