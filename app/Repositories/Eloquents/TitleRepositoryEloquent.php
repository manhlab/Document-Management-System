<?php

namespace App\Repositories\Eloquents;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Contracts\Repositories\TitleRepository;
use App\Entities\Title;

/**
 * Class TitleRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquents;
 */
class TitleRepositoryEloquent extends BaseRepository implements TitleRepository
{
        /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        'name' => 'like',

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
        return Title::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
