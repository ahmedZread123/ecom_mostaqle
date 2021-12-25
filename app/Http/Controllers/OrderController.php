<?php

namespace App\Http\Controllers;

use App\Models\admin;
use Illuminate\Http\Request;
use App\Models\order ;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use PhpParser\ErrorHandler\Collecting;

class OrderController extends Controller
{
    public function index(){
        $orders  = order::where('user_id' , Auth::id())->orderBy('created_at', 'DESC')->get(); 
        return view('admin.order.index' , compact('orders')) ; 
    }
    // save order s
    public function order($username){
     try{

      $username = admin::where('username' ,'=' ,$username)->first() ;
    
            $total = 0 ; 
            $total_quantity =0 ;
            $cart = session()->get('cart') ; 
        foreach( $cart as $index => $details){
            $total += $details['price'] * $details['quantity'] ;
            $total_quantity += $details['quantity'];
            $content[$index] = "$details[name]" ; 
        }

        $name = implode(",",$content );
        $id = $username->id ;
        order::create([
        'name'      => $name   , 
        'total'     => $total  , 
        'user_id'   =>  $id    ,
        'visa'      => 0 ,
        'quantity'  => $total_quantity
        ]);

        return " تم الحفط بنجاح " .$username->id ; 
      }catch(\Exception $ex){
        return $ex ;
          return "حدث خطأ " ; 
          
      } 
    }

    // order in years  in now  ; 

    public function order_year(){
              $date = date("Y", time());  
             //   $date_alone = date('j',strtotime($date)) ;
              $order = order::where('user_id' , Auth::id())->get();

              foreach($order as $orde){
               $time_year = date('Y',strtotime($orde->created_at)) ;
                if($time_year  == $date){
                   $order_years[] = $orde ;  
                }
              }
            //   echo    $order_years[1] ;
                collect($order_years) ;
             return view('admin.order.order_year' , compact('order_years')); 
         
    }

    public function order_month(){
        $date_year = date("Y", time());  
        $date_month = date("m", time());  

       //   $date_alone = date('j',strtotime($date)) ;
        $order = order::where('user_id' , Auth::id())->get() ;

        foreach($order as $orde){
         $time_year  = date('Y',strtotime($orde->created_at)) ;
         $time_month = date('m',strtotime($orde->created_at)) ;


          if($time_year  == $date_year){
            if($time_month ==  $time_month){
                $order_months[] = $orde ;
            }
              
          }
        }
      //   echo    $order_years[1] ;
          collect($order_months) ;
       return view('admin.order.order_month' , compact('order_months')); 
   
    }  
}
