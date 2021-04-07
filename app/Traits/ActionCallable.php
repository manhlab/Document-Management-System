<?php

namespace App\Traits;

/**
 * Action Callable
 */
trait ActionCallable
{
    protected $prefixActionName = 'action';
    protected $suffixParamRelationFunctionName = 'ParamsAvaliable';

    /**
     * The relations can call action in model
     * 
     * The key must be a defined relation
     * The value must be instanceof \App\Repositories\Eloquents\BaseRepository
     *
     * @var array
     */
    // protected $relationCallable = [
    //     'relation1' => \Relation1Repository::class,
    //     'relation2' => null,
    // ];

    /**
     * The params can pass in specify action relation
     * 
     * @return \Illuminate\Support\Collection
     */
    // function {relation}ParamsAvaliable(){
    //     return collect();
    // }

    public function callAction($name, $params = null)
    {
        $actionName = $this->prefixActionName.$name;

        if(!method_exists($this, $actionName))
        {
            throw new \App\Exceptions\ActionNotFound($actionName);
        }

        $params = json_decode($params, true);

        if(is_array($params)){
            return [$this, $actionName](...$params);
        }

        return [$this, $actionName]($params);
    }

    protected function getRelationCallable(){
        return collect($this->relationCallable);
    }

    /**
     * The validate when call a action relation
     * 
     * @throws \App\Exceptions\RelationNotAllow
     * @throws \Exception
     * @throws \App\Exceptions\RelationIdsNotAllow
     */
    protected function validateCallRelation($relation, $relation_ids)
    {
        // relations scpoe
        if($this->getRelationCallable()->isNotEmpty()){
            if(!$this->getRelationCallable()->has($relation)){
                throw new \App\Exceptions\RelationNotAllow($relation);
            }

            // ensure the params passed by repository
            $classRepository = $this->getRelationCallable()->get($relation);
            
            if(!empty($classRepository)){
                $relationRepository = resolve($classRepository);
                $relationRepository->popCriteria(\Prettus\Repository\Criteria\RequestCriteria::class);

                if(!$relationRepository instanceof \App\Repositories\Eloquents\BaseRepository){
                    throw new \Exception('The repository "'.$classRepository.'" in relation "'.$relation.'" must be instanceof \App\Repositories\Eloquents\BaseRepository');
                }
    
                collect($relation_ids)->each(function($id) use ($relationRepository){
                    $relationRepository->find($id); // throw exception if not found id
                });
            }
        }

        // params scope
        $functionRelationParamsAvaliable = $relation.$this->suffixParamRelationFunctionName;

        if(method_exists($this, $functionRelationParamsAvaliable)){
            $idsAvaliable = $this->$functionRelationParamsAvaliable();
        
            if(!$idsAvaliable instanceof \Illuminate\Support\Collection){
                throw new \Exception('The function ' . $functionRelationParamsAvaliable . ' must be instanceof \Illuminate\Support\Collection');
            }
    
            if(!$idsAvaliable->isEmpty()){
                collect($relation_ids)->each(function($id) use ($idsAvaliable){
                    if(!$idsAvaliable->contains($id)){
                        throw new \App\Exceptions\RelationIdsNotAllow($id);
                    }
                });
            }    
        }
        
        //
    }

    /**
     * Attach pivots
     */
    public function actionAttach($relation, ...$relation_ids){
        $this->validateCallRelation($relation, $relation_ids);
        return $this->$relation()->attach($relation_ids);
    }

    /**
     * Detach pivots
     */
    public function actionDetach($relation, ...$relation_ids){
        $this->validateCallRelation($relation, $relation_ids);
        return $this->$relation()->detach($relation_ids ?: null);
    }

    /**
     * Update pivot attributes
     */
    public function actionUpdatePivot($relation, $relation_id, $attributes){
        $this->validateCallRelation($relation, $relation_id);
        return $this->$relation()->updateExistingPivot($relation_id, $attributes);
    }
}
