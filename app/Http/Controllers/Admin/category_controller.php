<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\category_request;
use App\Models\category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class category_controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
       $cat = category::where('user_id' , Auth::id())-> get();
       return view('admin.categorie.index' , compact('cat'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      
        return view('admin.categorie.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(category_request $request)
    {
        try{
                //    save image 
                $file = $request->file('photo');
                $cate_photo = time() .'.' . $file->extension();
                $file->move('image_categorie',$cate_photo);
               
             

                // check active 
                if(!$request->has('active'))
                $request->request->add(['active'=>0]);
                

                 // save data 
                 category::create([
                    'name'      =>$request->name , 
                    'active'    =>$request->active , 
                    'user_id'   =>Auth::id() ,
                    'photo'     =>$cate_photo ,
                ]);
        
                return redirect()->route('category.index')->with('success' , 'تم الحفظ بنجاح');
        }catch(\Exception $ex){
        
           return redirect()->route('category.index')->with('error' , ' حدث خطأ يرجا المحاولة مرة اخرى');

        }
      
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cate = category::find($id) ; 
        if(!$cate){
           return redirect()->route('category.index')->with('error' , ' هذا القسم غير موجود');
        }
      
       return  view('admin.categorie.update' ,compact('cate'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(category_request $request, $id)
    {
      try{
      //  return   $request;
        // find main id 
          $cate=category::find($id);
        if(!$cate){
          return redirect()->route('category.index')->with('error' , ' هذا القسم غير موجود');
        }
        //فحص ال active 
        if(!$request->has('active'))
          $request->request->add(['active' => 0]);
          else
          $request->request->add(['active' => 1]);
          
            //    save image 
          if($request->has('photo')){

            $file = $request->file('photo');
            $cate_photo =  time() .'.' . $file->extension();
            $file->move('image_categorie',$cate_photo);

            }else{
              $cate_photo = $cate->photo ;
            }
        //update data 
        
        $cate->update([
          'name'	=>$request->name, 
          'active'=>$request->active ,
          'photo'=>$cate_photo , 
        ]);
          //redirect to index with success
        return redirect()->route('category.index')->with('success' , 'تم التحديث بنجاح');
    }catch(\Exception $ex){
        return redirect()->route('category.index')->with('error' , ' حدث خطأ يرجا المحاولة مرة اخرى');
        
    }
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      try{
              $cate = category::find($id) ;
          
          if($cate){

      //        return redirect()->route('categorie.index')->with('success' , ' لا يمكن حذف هذا القسم يوجد بداخله ');
            
        
            unlink('image_categorie/'.$cate->photo);
          
            $cate->delete();
          return redirect()->route('category.index')->with('success' , 'تم الحذف بنجاح');
          
          }else
          return redirect()->route('category.index')->with('error' , 'هذا القسم غير موجود ');
        
      }catch(\Exception $ex)
        {
        
            return redirect()->route('category.index')->with('error' , ' حدث خطأ يرجا المحاولة مرة اخرى');
          
        }


    }

    public function active($id){
      try{
        $cate = category::find($id);
        if(!$cate){
          return redirect()->route('category.index')->with('error' , ' هذا القسم غير موجود او تم حذفه');
        }
        
        if($cate->active == 0){
          $cate->update([
            'active'=>1
          ]);
        }
          else{
            $cate->update([
              'active'=>0
            ]);
          }
          return redirect()->route('category.index')->with('success' , 'تم التحديث بنجاح ');
        

      }catch(\Exception $ex){
        return redirect()->route('category.index')->with('error' , ' حدث خطأ يرجا المحاولة مرة اخرى');

      }

    }

}
