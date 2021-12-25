<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\category;
use App\Models\detale;
use App\Models\order;
use Illuminate\Http\Request;
use Stripe;
use Session;
class cart_controller extends Controller
{
  public $amunt  = 0; 
  public $currency = null ;
  public $pk  ;
  public $sk  ;
    public function checkout(Request $request){
        // dd($request-> username) ;
        $cart = session()->get('cart');
        $total = 0 ;
      
        foreach( $cart as $index => $details){
        
          // total
          $total += $details['price'] * $details['quantity'] ;
    
        }
        $amunt = $total ;
        $this->amunt = $total ;
        $username = admin::where('username' ,'=' ,$request-> username)->first() ;
        $cates = category::where('active' , 1)->where('user_id' , '=' ,$username->id)-> get();
        $detale = detale::where('user_id' , '=' ,$username->id)->first();

        $this->currency = $detale->currency ;
        $this->pk =  $detale->pk ;
        $this->sk =  $detale->sk ;

     
    }

    public function handleGet(Request $request)
    {
      $username = admin::where('username' ,'=' ,$request-> username)->first() ;
      $username = $username ->username ;
      
        $this-> checkout( $request);
         $amunt = $this->amunt ; 
         $currency = $this->currency ;
         $pk = $this->pk ; 
        return view('front.cart.checkout' , compact('amunt' , 'currency' , 'pk'  ,'username'));
    }
  
    /**
     * handling payment with POST
     */
    public function handlePost(Request $request)
    {
     $this-> checkout( $request);
   
        Stripe\Stripe::setApiKey($this-> sk);
        Stripe\Charge::create ([
                "amount" =>  100 * $this->amunt,
                "currency" => $this->currency ,
                "source" => $request->stripeToken,
                "description" => "Making test payment2." 
        ]);


        /// save order 
      $username = admin::where('username' ,'=' ,$request-> username)->first() ;

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
          'visa'      => 1 ,
          'quantity'  => $total_quantity ,
        ]);
  
        // Sess::flash('success', 'Payment has been successfully processed.');
        session()->flash('succes', 'تمت عملية الدفع بنجاح ');
        return back();
    }
}
