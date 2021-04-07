<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DocumentRepository;
use App\Entities\Document;

/**
 * Class DocumentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DocumentRepositoryEloquent extends BaseRepository implements DocumentRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'symbol' => 'like',
        'abstract' => 'like',
        'book_id' => '=',
        'type_id' => '=',
        'signer_id' => '=',
        'creator_id' => '=',
        'effective_at' => 'like',
        'sign_at' => 'like',
        'publisher_id' => 'like',
        'link_id' => '=',

        'attachments.id' => '=',

        'receivers.id' => '=',
        'receivers.email' => '=',

        'organizes.id' => '=',
        'organizes.name' => 'like',

        'type.id' => '=',
        'type.name' => 'like',

        'book.id' => '=',
        'book.name' => 'like',

        'publisher.id' => '=',
        'publisher.name' => 'like',

        'signer.id' => '=',
        'signer.name' => 'like',
        'signer.description' => 'like',

        'creator.id' => '=',
        'creator.name' => 'like',
        'creator.email' => '=',
        'creator.department_id' => '=',
        'creator.title_id' => '=',

        'linkTo.id' => '=',
        'linkTo.symbol' => 'like',
        'linkTo.abstract' => 'like',
        'linkTo.book_id' => '=',
        'linkTo.type_id' => '=',
        'linkTo.signer_id' => '=',
        'linkTo.creator_id' => '=',
        'linkTo.writer_id' => '=',
        'linkTo.effective_at' => 'like',
        'linkTo.sign_at' => 'like',
        'linkTo.publisher_id' => 'like',
        'linkTo.attachments' => 'like',
        'linkTo.link_id' => '=',

        'linked.id' => '=',
        'linked.symbol' => 'like',
        'linked.abstract' => 'like',
        'linked.book_id' => '=',
        'linked.type_id' => '=',
        'linked.signer_id' => '=',
        'linked.creator_id' => '=',
        'linked.writer_id' => '=',
        'linked.effective_at' => 'like',
        'linked.sign_at' => 'like',
        'linked.publisher_id' => 'like',
        'linked.attachments' => 'like',
        'linked.link_id' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Document::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(\App\Criteria\DocumentCriteria::class);
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
