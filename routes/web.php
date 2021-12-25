<?php

use App\Http\Controllers\Admin\admin_controller;
use App\Http\Controllers\Admin\category_controller;
use App\Http\Controllers\Admin\DetaleController;
use App\Http\Controllers\Admin\producte_controlle;
use App\Http\Controllers\Admin\user_controller;
use App\Http\Controllers\cart_controller;
use App\Http\Controllers\front_controller;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\rolecontroller;
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('front.index');
// });


##################################  Admin ####################################

Route::group(['prefix'=>'admin' , 'middleware' =>'auth:admin']   , function(){
################################# dashboard ##################################
Route::get('/' , [admin_controller::class , 'dashboard'])->name('admin.dashboard');

#################################  category  ###################################

Route::resource('category' , category_controller::class)->middleware('can:category'); 
Route::get('active/{id}' , [category_controller::class , 'active'])->name('category.active')->middleware('can:category') ;
// Route::get('active/{id}' , [category_controller::class , 'active'])->name('active') ;
#################################  user  ###################################

Route::resource('user' , user_controller::class )->except(['show'])->middleware('can:user') ; 
// Route::get('active/{id}' , [user_controller::class , 'active'])->name('user.active')->middleware('can:user') ;

#################################  producte   ###################################

Route::resource('producte' , producte_controlle::class)->middleware('can:producte') ;
Route::get('producte_active/{id}' , [producte_controlle::class , 'active'])->name('producte.active')->middleware('can:producte') ;
// Route::get('show_producte/{id}' , [producte_controlle::class , 'show'])->name('producte.sh') ;


############################## detale  ####################################################
Route::get('detale/index' , [DetaleController::class , 'index'])->name('detale.index')->middleware('can:detale') ; 
Route::post('detale/save_detale' , [DetaleController::class , 'save_detale'])->name('save_detale')->middleware('can:detale') ; 


// admin
Route::get('detale/detale_admin' , [DetaleController::class , 'detale_admin'])->name('detale_admin') ; 
Route::post('detale/save_detale_admin/{id}' , [DetaleController::class , 'save_detale_admin'])->name('save_detale_admin') ; 

// order 

Route::get('order_index' , [OrderController::class , 'index'])->name('order.index')->middleware('can:order') ;
Route::get('order_year' , [OrderController::class , 'order_year'])->name('order_year')->middleware('can:order') ;
Route::get('order_month' , [OrderController::class , 'order_month'])->name('order_month')->middleware('can:order') ;

######################## role ##################### 
Route::resource('role',rolecontroller::class)->middleware('can:role');


}) ;


#################################### Admin auth  ####################################

Route::group(['prefix'=>'admin' , 'middleware'=>'guest:admin'] , function(){
    Route::get('/login' ,[ admin_controller::class ,'getlogin'])->name('admin.login');
    Route::post('/setlogin' ,[ admin_controller::class ,'setlogin'])->name('admin.setlogin');

});
#################################### logout   ####################################

  Route::get('/logout' ,[ admin_controller::class ,'logout'])->name('admin.logout');




################################### front site ###################################



// Route::domain('{username}.'.env('SESSION_DOMAIN'))->group(function () {
Route::group(['prefix'=>'{username}' ] , function(){
Route::get('/' , [front_controller::class , 'index'])->name('index');
Route::get('producte/{id}' , [front_controller::class , 'show_producte']);

// // show producte single page 
Route::get('show_producte/{id}' , [producte_controlle::class , 'show']);

// oreder  
Route::get('order' , [OrderController::class , 'order'])->name('order') ;

// cart 
Route::get('checkout', [cart_controller::class, 'checkout'])->name('cart.checkout');

Route::get('/stripe-payment', [cart_controller::class, 'handleGet']);
Route::post('/stripe-payment', [cart_controller::class, 'handlePost'])->name('stripe.payment');

################################ cart  ################################################
Route::get('add_care' , [front_controller::class , 'add_care'])->name('add_care') ;
Route::get('care' , [front_controller::class , 'care'])->name('care') ;
Route::get('delet_producte' , [front_controller::class , 'delet_producte'])->name('delet_producte') ;
Route::get('total' , [front_controller::class , 'total'])->name('total') ;
Route::get('chek_quantity' , [front_controller::class , 'chek_quantity'])->name('chek_quantity') ;

Route::get('plus_item' , [front_controller::class , 'plus_item'])->name('plus_item') ;
Route::get('minus_item' , [front_controller::class , 'minus_item'])->name('minus_item') ;


Route::get('send_order' , [front_controller::class , 'send_order'])->name('send_order') ;
Route::get('total_quantity' , [front_controller::class , 'total_quantity'])->name('total_quantity') ;

// cart 
Route::get('checkout_order' , [cart_controller::class , 'checkout_order'])->name('checkout_order') ;

});





Route::get('/' , [front_controller::class , 'lode'])  ;