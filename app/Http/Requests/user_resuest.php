<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class user_resuest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'           => 'required',
            'username'       => 'required',
            'email'          => 'required|email|unique:admins,email',
            'password'       => 'required',
        ];
    }


    public function messages()
    {
        return[
          'required' =>'هذا الحقل مطلوب',
          'email'    => 'يجيب ان يكون الايميل صحيح ' , 
          'email.unique'    => 'هذا الايميل مستخدم بالقعل  ' , 

        ];
    }
}
