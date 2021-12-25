<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin_request;
use App\Models\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class admin_controller extends Controller
{

   ######################### dashboard ########################
   public function dashboard(){
     return view('admin.dashboard') ;
   }


  ########################## login #########################
    public function getlogin()
   {
      return view('admin.auth.login');
   }

   public function setlogin(admin_request $request)
   {
      // dd(12);
      $admin = [
        'email'=>$request->email , 
        'password'=>$request->password
      ];

    if(Auth()->guard('admin')->attempt($admin)){
    
      
          return redirect()->route('admin.dashboard');
       
   }
    return redirect()->back()->with('error' , 'هناك خطا في اسم المستخدم او كلمة المرور ');

    
   
 }

 public function logout(){
   //  return "10";
    try{
    if(Auth()->guard('admin')->check()){
      Auth()->guard('admin')->logout();
    }
    return redirect()->route('admin.login')->with('success' , 'تم تسجل الخروج بنجاح');
   }catch(\Exception $ex){
     return $ex ;
      return redirect()->back()->with('error' , 'هناك خطأ يرجا المحاولة لاحقا ');
   }
 
 }
    


}
