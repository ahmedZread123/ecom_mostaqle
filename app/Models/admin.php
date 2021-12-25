<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class admin extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'username' , 
        'role_id' ,
    ];


    public function role(){
        return $this->belongsTo(role::class  , 'role_id' ) ;
    }

    public function hasAbility($perms){

       $role = $this->role ;
      
    

        if(!$role){
            return false ;
        }


  
        foreach(json_decode($role->perm) as $per){
            if(is_array($perms) && in_array($per , $perms)){
                return true ;
            }elseif(is_string($perms) && strcmp($perms , $per)  == 0){
                return true ;
            }
      
    }

        return false ;
    }

    
}
