<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detale extends Model
{
    use HasFactory;

    protected $fillable = [
        'photo',	'facebook',	'instagram',	'whatsapp', 'name' , 'currency' , 'user_id' , 'pk' , 'sk'
    ];

  
}
