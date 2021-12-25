<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\user_resuest;
use App\Models\admin;
use App\Models\detale;
use App\Models\role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class user_controller extends Controller
{

    public function index(){
        $admins =  admin::where('id'  , '<>' , Auth::id())->get() ;
        return view('admin.user.index' ,compact('admins')) ; 
    }

    // اضافة منيو جديد 

    public function create(){
         $roles = role::get() ; 
         return view('admin.user.add' , compact('roles')) ; 
    }
 
  public function store(user_resuest $request){
      
   

   $id = admin::insertGetId([
      'name'       => $request->name , 
      'username'   => $request->username , 
      'email'      => $request->email , 
      'role_id'    => $request->role_id ,
      'password'   => Hash::make($request->password) ,
    ]);

    detale::create([
      'user_id'  => $id ,
    ]);
 
    return redirect()->route('user.index')->with('success' , 'تم الاضافة  بنجاح');
  }
 
  public function edit($id){
    
    $user  =  admin::find($id) ;  
    $roles = role::get() ; 
    return view('admin.user.update' , compact('user' , 'roles'));
 
  }
 
  public function update(Request $request , $id){
   $user  =  admin::find($id) ; 
   if($request->password != null){
        $user->update([
        'password' => Hash::make($request->password ) ,
        ]);
    }

  

   $user->update([
    'name'       => $request->name , 
    'username'   => $request->username , 
    'role_id'    => $request->role_id ,

    'email'      => $request->email , 
   
   ]);

   return redirect()->route('user.index')->with('success' , 'تم التعديل  بنجاح');
 
  }

  public function destroy($id){
    $admin =   admin::find($id) ; 

    $admin->delete() ; 
   return redirect()->route('user.index')->with('success' , 'تم الحذف   بنجاح');

  }


}
