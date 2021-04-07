<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\BookRepository;
use App\Entities\Book;

/**
 * Class BookRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class BookRepositoryEloquent extends BaseRepository implements BookRepository
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
        return Book::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
