<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\rolerequest;
use App\Models\role;
use Illuminate\Http\Request;

class rolecontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = role::paginate(10);
        
        return view('admin.role.index' , compact('roles')) ; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.role.add') ;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(rolerequest $request)
    {
        // return $request ;
       $role = $this->perm(new role, $request);

       if($role){
          return redirect()->route('role.index')->with('success' , 'تم الحفظ بنجاح ');
       }else{
        return redirect()->route('role.index')->with('error' , 'حدث خطأ يرجا المحاولة لاحقا  ');
         
       }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $role = role::find($id) ; 

        if($role){
            return view('admin.role.update' , compact('role'));

        }else{
            return redirect()->route('role.index')->with('error' , 'هذا الصلاحية غير موجودة او تم حذفها ');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(rolerequest $request, $id)
    {
        $role = role::find($id) ; 

        if($role){ 

            $rol = $this->perm($role , $request) ; 
            if($role){
                return redirect()->route('role.index')->with('success' , 'تم التعديل  بنجاح ');
             }else{
              return redirect()->route('role.index')->with('error' , 'حدث خطأ يرجا المحاولة لاحقا  ');
               
             }
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
        $role = role::find($id) ; 

        if( $role  && $role->boos->count() <= 0){ 

            $role->delete(); 
            return redirect()->route('role.index')->with('success' , 'تم الحذف  بنجاح ');
            
         }else{
            return redirect()->route('role.index')->with('error' , 'لا يمكن الحذف لانها تحتوي على ادارين   ');

         }

    }


    protected function perm(role $role , Request $r){
        $role->name = $r->name ; 
        
        $role->perm = json_encode($r->perm);
        $role->save();

        return $role ;
    }
}
