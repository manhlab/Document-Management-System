<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentTypeRepository;
use App\Entities\DocumentType;

/**
 * Class DocumentTypeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentTypeRepositoryEloquent extends BaseRepository implements DocumentTypeRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',

        'documents.id' => '=',
        'documents.symbol' => 'like',
        'documents.abstract' => 'like',
        'documents.book_id' => '=',
        'documents.type_id' => '=',
        'documents.signer_id' => '=',
        'documents.creator_id' => '=',
        'documents.writer_id' => '=',
        'documents.effective_at' => 'like',
        'documents.sign_at' => 'like',
        'documents.publisher_id' => 'like',
        'documents.link_id' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DocumentType::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
