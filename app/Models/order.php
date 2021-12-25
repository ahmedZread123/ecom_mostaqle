<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'total' , 'quantity' , 'user_id' , 'visa'
    ];

    // visa
    public function getvisa(){
        return $this->visa==1?'فيزا': ' كاش';
    }
}
