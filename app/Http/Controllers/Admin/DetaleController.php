<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin_request;
use App\Models\admin;
use App\Models\detale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DetaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $detale =  detale::where('user_id' , Auth::id())->first();

       return view('admin.detale.index' , compact('detale')) ;
    }
  
    // حفظ البيانات سواء في الاضافة او الحذف 
   public function save_detale(Request $request){
    
     $detale = detale::where('user_id' , Auth::id())->first();
    // return $detale ;

    //  save image 

    if($request->has('photo')){
        $file     = $request->file('photo') ;
        $img_detale  = time() . '.' . $file->extension();
        $file->move('img' , $img_detale); 
   
    }else
     $img_detale = $detale->photo ;

     //create 
     if($detale == null){
        detale::create([
         'name'        =>$request->name	,
         'user_id'     =>Auth::id(),
        'currency'     =>$request->currency	,
        'photo'        =>$img_detale	,
        'facebook'     =>$request->facebook	,
        'instagram'    =>$request->instagram	,
        'whatsapp'     =>$request->whatsapp	,
        'pk'           =>$request->pk	,
        'sk'           =>$request->sk	,
       ]);

     }
     //update 
     else{
        $detale->update([
             'name'        =>$request->name	,
            'currency'     =>$request->currency	,
            'photo'        =>$img_detale	,
            'facebook'     =>$request->facebook	,
            'instagram'    =>$request->instagram	,
            'whatsapp'     =>$request->whatsapp	,
            'pk'           =>$request->pk	,
            'sk'           =>$request->sk	,
           ]);
     }


     return back()->with('success' , 'تم الحفط بنجاح ')  ;

   }

//  admin  

   public function detale_admin(){
      return view('admin.detale_admin') ;
   }
   
   public function save_detale_admin($id , admin_request $request){
      // return $request ;
      $admin = admin::find($id) ; 
     
      if($admin){
            if($request->password != null){
               $admin->update([
               'password' => Hash::make($request->password ) ,
               ]);
            }

            $admin->update([
               'name' => $request->name ,
               'email' => $request->email 

               ]);

               return redirect()->route('admin.dashboard')->with('success' , ' تم تعديل بيانات الامن بنجاح ') ; 

      }
      return redirect()->route('admin.dashboard')->with('error' , ' حدث خطأ يرجا المحاولة لاحقا   ') ; 


   }

   
}
