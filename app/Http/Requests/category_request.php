<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class category_request extends FormRequest
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
            'name'=>'required',
            'photo'=>'required_without:ph|mimes:jpg,jpeg,png',
        ];
    }


    public function messages()
    {
        return [
            'name.required'=>'الاسم مطلوب ',
            'photo.required_without'=>'إضافة الصورة مطلوب '  , 
            'photo.mimes'=>'jpg,jpeg,png يجب ان يكون امتداد الصور '  , 
        ];
    }
}
