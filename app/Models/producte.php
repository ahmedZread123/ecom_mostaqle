<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producte extends Model
{
    use HasFactory;

    protected $fillable = [
    'name', 'contact'	, 'price'	, 'photo', 	'category_id', 	'active', 'user_id'
    ];

    // category
    public function category(){
     return    $this->belongsTo(category::class);
    }

     // active 
     public function getActive(){
        return $this->active==1?'مفعل': 'غير مفعل';
    }
}
