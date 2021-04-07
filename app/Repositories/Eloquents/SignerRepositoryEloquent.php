<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\SignerRepository;
use App\Entities\Signer;

/**
 * Class SignerRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class SignerRepositoryEloquent extends BaseRepository implements SignerRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',
        'description' => 'like',

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
        return Signer::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
