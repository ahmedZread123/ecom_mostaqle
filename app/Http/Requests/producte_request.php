<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class producte_request extends FormRequest
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
            'name'       => 'required',
            'contact'	 => 'required' ,
            'price'      => 'required|numeric' ,     
            'photo'	     => 'required_without:ph|mimes: jpg,png,jpeg', 
           'category_id' => 'required|exists:categories,id',

        ];
    }

    public function messages()
    {
        return[
          'required' =>'هذا الحقل مطلوب',
          'photo.required_without'=>'يجب اضافة صورة '  ,
          'photo.mimes'=>' jpg,png,jpeg يجب ان يكون نوع الصور ' ,
          'contact.max'=>' يجب ان يكون عدد  حروف  اقل من 255' ,
          'price.numeric ' =>'يجب ان يكون السعر ارقام فقط ' ,
          
        ];
    }
}
