<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;


    protected $fillable = [  
        'name',
        'perm'
 
    ];
 
    protected $casts = [
     'perm' => 'array',
    ];
 
 
 public function getperm($perm){
      return json_decode($perm , true) ;
 }
 
     // boos
     public function boos(){
         return $this->hasMany(admin::class) ;
     } 
}
