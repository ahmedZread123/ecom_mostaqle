<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\category;
use App\Models\detale;
use App\Models\order;
use App\Models\producte;
use App\Traits\GeneralTrait;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

use PDF;

use Illuminate\Support\Facades\DB as FacadesDB;
use PhpParser\Node\Stmt\Goto_;

class front_controller extends Controller
{
   
  use GeneralTrait;

    private $username ; 

    public function __construct(Request $request)
    {
      $this->username = $request->username ;
    }

    public function lode(){
      return 
      // GOTO(https://about.fesha.app/) ;
      header( "https://about.fesha.app/" );
     echo  "<script>window.location = 'https://about.fesha.app/'</script>";
     
    }

    public function index(){
      // session(['cart'=>[]]) ;
      $username = admin::where('username' ,'=' ,$this->username)->first() ;
      if($username == null)
       return '<h1 > خطأ في الامتداد   </h1>' ;
      else{
      
        $cates = category::where('active' , 1)->where('user_id' , '=' ,$username->id)-> get();
        $detale = detale::where('user_id' , '=' ,$username->id)->first();
        $username = $username ->username ;

        // dd($cates);
        return  view('front.index' , compact('cates' , 'detale' ,'username'));
       }

    }

    
    public function show_producte(Request $request , $username){
      // dd($request->usename) ;
      $username = admin::where('username' ,'=' ,$this->username)->first() ;

      $cates = category::where('active' , 1)->where('user_id' , '=' ,$username->id)-> get();
      $cate =   category::find($request->id);
      $detale = detale::where('user_id' , '=' ,$username->id)->first();


      if($cate){
        
        $productes = $cate->producte()->get() ; 
        $username = $username ->username ;

        return view('front.show_producte' , compact('productes' , 'cates' , 'detale' , 'cate' , 'username')) ;
        // return view('front.test'  , compact('cates' , 'detale')) ;
       
      }
        
    }
##################################### start  cart #####################################
    public function care(){
      
      $cart = session()->get('cart', []);
    
      return response()->json(['cart'=>  $cart]);
    }
    
    // اضافة منتج الى السلة 
    public function add_care(Request $request){
      // dd('hello') ;
      if ($request->ajax()) {
          $id =$request->id ;
          $product = producte::findOrFail($id);
              // dd( $id) ;
          $cart = session()->get('cart', []);
          if($cart == null ){
            $cart[$id] = [
              "name" => $product->name,
              "quantity" => 1,
              "price" => $product->price,
          
            ];

            session()->put('cart', $cart);
            return $this->returnSuccessMessage($cart);
          }
          foreach( $cart as $index => $details){
           if($details['name'] ==  $product->name){
            return $this->returnError('هذا المنتج موجود بالفعل في السة' ,500 ) ;
           }else{
            $cart[$id] = [
              "name" => $product->name,
              "quantity" => 1,
              "price" => $product->price,
          
          ];
      
        
        session()->put('cart', $cart);
        return $this->returnSuccessMessage('nj');

           }
          }
        }
      
     
    }


   

     // حذف المنتج 
    public function delet_producte(Request $request){
      if($request->id) {
        $cart = session()->get('cart');
        if(isset($cart[$request->id])) {
            unset($cart[$request->id]);
            session()->put('cart', $cart);
        }
        session()->flash('success', 'Product removed successfully');
      }

 


    }
 
    // المبلغ الاجمالي 
   public function total(){
     $total = 0 ;
     $cart = session()->get('cart');
    foreach( $cart as $index => $details){
         $total += $details['price'] * $details['quantity'] ;
     }
   
     return response()->json(['total'=>$total]);

   }


   // send whatsapp order 
   public function send_order(Request $request){
    $cart = session()->get('cart');
    $total = 0 ;
    $quantity =0 ;
    foreach( $cart as $index => $details){
    
      // total
      $total += $details['price'] * $details['quantity'] ;
      $quantity += $details['quantity'] ;
      $content[$index] = "$details[name]  : $details[quantity]  *  $details[price] " ; 
     
    
    }
    echo implode("---",$content );
    echo  '%0a' ;
    echo "------------" . "%0A" ;
     
    echo " اجمالي المبلغ : $total " ;
    echo " الكمية : $quantity " ;  
    echo "   الملاحظات : $request->notes" ;
   
   }


   // chek_quantity 
   public function chek_quantity(Request $request){
    if ($request->ajax()) {
      $id =$request->id ;
      $product = producte::findOrFail($id);
          
      $cart = session()->get('cart', []);
        
     
          $cart[$id] = [
              "name" => $product->name,
              "quantity" => $request->i,
              "price" => $product->price,
          
          ];
      
        
       session()->put('cart', $cart);
       $cart2 = session()->get('cart', []);
      return response()->json($cart2);
   
      
    
     
   
  }
   }





   // chek_quantity 
   public function plus_item(Request $request){
    if ($request->ajax()) {
      $id =$request->id ;
      $product = producte::findOrFail($id);
          
      $cart  = session()->get('cart', []);
      $count = $request->i + 1;
     
          $cart[$id] = [
              "name" => $product->name,
              "quantity" => $count,
              "price" => $product->price,
          
          ];
      
        
       session()->put('cart', $cart);
       $cart2 = session()->get('cart', []);
      return response()->json($cart2);
   
  }
   }

   



       
      // minus_item 
      public function minus_item(Request $request){
        if ($request->ajax()) {
          $id =$request->id ;
          $product = producte::findOrFail($id);
              
          $cart  = session()->get('cart', []);
          
          $coun = $request->i - 1;
            
          
         
              $cart[$id] = [
                  "name" => $product->name,
                  "quantity" => $coun,
                  "price" => $product->price,
              
              ];
          
            
           session()->put('cart', $cart);
           $cart2 = session()->get('cart', []);
          return response()->json($cart2);
       
      }
       }
    
   //total_quantity  العدد الكلي 

   public function total_quantity(){
      $total_quantity = 0 ;
      $cart = session()->get('cart');
      // dd( $cart);
      foreach( $cart as $index => $details){
          $total_quantity += $details['quantity'];
      }
  
    return response()->json(['total_quantity'=>$total_quantity]);

   }

   ####################### end cart ############# 

   ####################### pdf     ############# 

  
  //  public function createPDF(Request $request)  
  //  {  
  //      // retreive all records from db
  //      $data = order::all();

  //      // share data to view
  //      view()->share('employee',$data);
  //      $pdf = PDF::loadView('admin.order.index', $data);
 
  //      // download PDF file with download method
  //      return $pdf->download('pdf_file.pdf');
  //  }  
}
