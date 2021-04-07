<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;
use App\Entities\Book;

/**
 * Class DocumentCriteria.
 *
 * @package namespace App\Criteria;
 */
class DocumentCriteria implements CriteriaInterface
{
    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where(function($model){
            $model = $model->where(function($model){
                if(auth()->user()->hasPermissionTo('Quản lý văn bản đến')){
                    $model->orWhere('book_id', Book::DEN);
                }
        
                if(auth()->user()->hasPermissionTo('Quản lý văn bản đi')){
                    $model->orWhere('book_id', Book::DI);
                }
        
                if(auth()->user()->hasPermissionTo('Quản lý văn bản nội bộ')){
                    $model->orWhere('book_id', Book::NOIBO);
                }
            });
    
            $model = $model->orWhere(function($model){
                $ids = auth()->user()->documents->map->id;
                $model->orWhereIn('id', $ids);
            });
        });
        
        return $model;
    }
}
