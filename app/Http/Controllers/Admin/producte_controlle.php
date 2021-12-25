<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\producte_request;
use App\Models\admin;
use App\Models\category;
use App\Models\detale;
use App\Models\producte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class producte_controlle extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       try{
         $pro = producte::where('user_id', Auth::id())-> get();

        return view('admin.producte.index' , compact('pro'));
        }catch(\Exception $ex){
         return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;

        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        try{
        $cates = category::where('active' , 1)->where('user_id' , Auth::id())->get();

        return view('admin.producte.add' , compact('cates'));
        }catch(\Exception $ex){
        return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(producte_request $request)
    {
        // return $request ;
        try{
         //حفظ الصورة 
        if($request->has('photo')){
             $file     = $request->file('photo') ;
             $img_pro  =  time() . '.' . $file->extension();
             $file->move('image_producte' , $img_pro); 
        
        }
        // الانتهاء من حفظ الصورة 

        //حفظ الحالة 
          
                 if($request->active == null)
                 $request->request->add(['active'=> 0]);

             
        // النتهاء من حفظ الحالة 

      // حفظ البيانات كاملة 
    
         producte::create ([
            'name'         =>$request->name,
        	'contact'      =>$request->contact,
        	'price'	       =>$request->price,
        'category_id'      =>$request->category_id,
          'user_id'        =>Auth::id() ,
        	'active'       =>$request->active,
            'photo'        =>$img_pro ,

        ]);

    
    
     
      //النتهاء من حفظ البيانات 
          
        return redirect()->route('producte.index')->with('success' , 'تم انشاء المنتج بنجاح ') ;

      }catch(\Exception $ex){
         return $ex ;
        return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;
     }

    }

    public function show(Request $request ,  $usernamee){
        $username = admin::where('username' ,'=' ,$usernamee)->first() ;
      $prod = producte::find( $request->id);
      $detale = detale::where('user_id' , '=' ,$username->id)->first();
      
    //   $username = admin::where('username' ,'=' ,$usernamee)->first() ;
      $cates = category::where('active' , 1)->where('user_id' , '=' ,$username->id)->get();
      $username = $username ->username ;
    // dd($username);
      return view('admin.producte.show' ,compact('prod' , 'detale' , 'cates' ,'username'));
    }

    public function edit(producte $producte)
    {
       try{
        if(!producte::find($producte->id)){
            return redirect()->route('producte.index')->with('error' , 'هذا القسم غير موجود او تم حذفه');
        }
        $cates = category::where('active' , 1)->where('user_id' , Auth::id())->get();
        return view('admin.producte.update' , compact('producte' , 'cates'));
       }catch(\Exception $ex){
          
        return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;
         
       }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\producte  $producte
     * @return \Illuminate\Http\Response
     */
    public function update(producte_request $request, producte $producte)
    {
        // return $request ;
        try{
            if(!producte::find($producte->id)){
                return redirect()->route('producte.index')->with('error' , 'هذا القسم غير موجود او تم حذفه');
            }
            
            //فحص وجود صورة وحفظها 
            if($request->has('photo')){
                $file     = $request->file('photo') ;
                $img_pro  = time() . '.' . $file->extension();
                $file->move('image_producte' , $img_pro); 
           
           }else
           $img_pro = $producte->photo ;

           //انتهاء حفظ الصورة 
             //حفظ الحالة 
             if($request->active == null)
             $request->request->add(['active'=> 0]);

            
             // النتهاء من حفظ الحالة 

             // تعديل البيانتات
             $producte->update([
                'name'         =>$request->name,
                'contact'      =>$request->contact,
                'price'	       =>$request->price,
           'category_id'       =>$request->category_id,
                'active'       =>$request->active,
                'photo'        =>$img_pro ,
             ]);


        return redirect()->route('producte.index')->with('success' , 'تم تعديل المنتج لنجاح  ') ;
          
        }catch(\Exception $ex){
            // return $ex ;
       return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\producte  $producte
     * @return \Illuminate\Http\Response
     */
    public function destroy(producte $producte)
    {
        try{
            if(!$producte){
                return redirect()->route('producte.index')->with('error' , 'هذا القسم غير موجود او تم حذفه');
            }
            unlink('image_producte/'.$producte->photo);
            $producte->delete();
            return redirect()->route('producte.index')->with('success' , 'تم حذف المنتج بنجاح ') ;

        }catch(\Exception $ex){
        return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;
          
        }
    }

    public function active($id){
       
        try{
            $producte = producte::find($id);
            // return $producte;
            if(!$producte){
                return redirect()->route('producte.index')->with('error' , 'هذا القسم غير موجود او تم حذفه');
            }

            if($producte->active == 0){
              
               $producte->update(['active'=>1]) ;
            }else{
              
               $producte->update(['active'=>0]) ;
            }
            return redirect()->route('producte.index')->with('success' , 'تم تعديل الحالة بنجاح ') ;

        }catch(\Exception $ex){
          return redirect()->route('producte.index')->with('error' , 'هناك خطأ يرجا المحالة لاحقا ') ;
          
        }
    }
}
