<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\DepartmentRepository;
use App\Entities\Department;

/**
 * Class DepartmentRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class DepartmentRepositoryEloquent extends BaseRepository implements DepartmentRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',
        'tel' => '=',

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

        'users.id' => '=',
        'users.name' => 'like',
        'users.email' => '=',
        'users.tel' => '=',
        'users.birthday' => '=',
        'users.department_id' => '=',
        'users.title_id' => '=',
        'users.active' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Department::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
