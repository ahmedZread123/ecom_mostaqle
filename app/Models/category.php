<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    use HasFactory;

    protected $fillable = [
    'name',
    'active',
    'photo'	,
    'user_id'
    ];


    // active 
    public function getActive(){
        return $this->active==1?'مفعل': 'غير مفعل';
    }

    //producte 
    public function producte(){
        return  $this->hasMany(producte::class);
    }


    
}
