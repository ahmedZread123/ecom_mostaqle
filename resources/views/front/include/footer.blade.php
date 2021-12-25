
<!-- Footer -->
<footer class="bg6 p-t-8 p-b-15 p-l-45 p-r-45">
    {{-- ايقونات التواصل  --}}
    <div class="row wow fadeInUp justify-content-center align-items-center">
        <div class="icon-bar" style="text-align: center ; padding: 32px">
                                      {{-- ايقونة الفيس بوك  --}}
                                                     @isset($detale)
                                                         
                            <a target="_blank" href="{{$detale->facebook}}" class="facebook"><i class="fa fa-facebook fa-2x"
                                                    style=" padding: 8px ;color:black"></i></a>
                                      {{-- ايقونة انستقرام  --}}
                            <a target="_blank" href="{{$detale->instagram}}" class="instagram"><i class="fa fa-instagram fa-2x"
                                                    style="padding: 8px  ;color:black"></i></a>
                                                    @endisset

        </div>
    </div>

    {{-- العنوان + رقم الواتس + النهاية  --}}

    <div class="t-center p-l-15 p-r-15">
        {{-- <p class="t-center  s-text8">
            اسطنبول - أسنيورت - مجمع أوناي لايف
        </p> --}}
        <p class="t-center  s-text8">
            @isset($detale)
                
           
            Phone: {{$detale->whatsapp}}  
            @endisset
        </p>
        <div class="t-center s-text8 p-b-50">
        </div>
        <div class="copyright">
            &copy; Copyright 
            <strong> 
                @isset($detale->name)
                  {{$detale->name}}
                @endisset
            </strong>. All Rights Reserved
        </div>
        <div class="credits">
            Designed by <a href="https://ahmed125.000webhostapp.com/" style="color: blue">Ahmed Zread</a>
        </div>
        <div class="t-center s-text8 p-b-50">
        </div>
    </div>
</footer>

<!-- Back to top -->
<div class="btn-back-to-top bg0-hov" id="myBtn">
		<span class="symbol-btn-back-to-top">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="0.8em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1280">
          <path d="M1011 1056q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 736l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zm0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 352L119 745q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z" fill="white"/></svg>	
	   </span>
</div>

<div class="btn-cart  bg0-hov" id="myBtn2" data-toggle="modal" data-target="#cart">
    <div class="block2-img wrap-pic-w of-hidden pos-relative block2 ">
        <div style=" padding-top: 0px; text-align: center"><span id="total2" >0</span><small>{{$detale->currency}}</small></div>
        <div>
            <img src="{{asset('img/cart.png')}}" width="50px" height="auto">
            <div class="centeredd " style="padding-top: 13px"><span id="total_quantity">0</span></div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">القائمة</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
          
            
           
           
          
       

            <div class="modal-body" id="modal-body">
                <div class="table-responsive">
                    <table class="table" id="table_show" style=" ">
                        <thead>
                        <tr >
                            <th style="text-align: start">الاسم</th>
                            <th style="text-align: start">السعر</th>
                            <th style="text-align: start">الكمية</th>
                            <th style="text-align: start">حذف</th>
                        </tr>
                       </thead>
                      
                        <tbody id="cart_body">
                        @foreach((array) session('cart') as $index => $details)

                        <tr id="producte{{$index}}" >

    
                            <td  style="width: 25%;" >{{$details['name']}} </td>
                            <td  style="width: 25%;"  > {{$details['price']}}{{$detale->currency}}</td>
                        
                                {{-- <td >
                                    <div class="text-center">
                                        <div style="width: 45px">
                                            <div>
                                                <button style="height: 15px;
                                                padding: 0;
                                                font-size: 10px;"
                                                 class=" btn btn-sm btn-secondary btn-block plues" 
                                                 data-id="{{$index}}"
                                                 >+</button>
                                            </div>
                                            <div >
                                                <input style="height: 15px;padding: 0;
                                                font-weight: bold;" type="number" readonly="" class="item-count form-control text-center" >                                        </div>
                                            <div>
                                            
                                                <button style="height: 15px;
                                                padding: 0;
                                                font-size: 10px;"
                                                 class=" btn btn-sm btn-secondary btn-block less" 
                                                 data-id="{{$index}}">-</button>
                                            </div>
                                        </div>
                                    </div>
                            
                                </td> --}}

                                {{-- <td  style="width: 25%;"> <input type="number" name="count_prouducet"  data-id="{{$index}}" style="width: 75%;"
                                     class="btn btn-Secondary count_prouducet"  min="1" value="{{$details['quantity']}}"></td>
                             --}}



                                        <td>
                                            <div class="text-center">
                                            <div style="width: 45px">
                                                 <div>
                                            <button style="height: 15px;
                                                padding: 0;
                                                font-size: 10px;" class="plus-item btn btn-sm btn-secondary btn-block" data-id="{{$index}}" data-i="{{$details['quantity']}}">+</button>
                                            </div>
                                            <div>
                                                    <input style="height: 15px;padding: 0;
                                                font-weight: bold;" type="number" readonly="" class="item-count form-control text-center" data-name="{{$details['name']}}" data-id="{{$index}}" data-i="{{$details['quantity']}}" value="{{$details['quantity']}}">
                                            </div>
                                            <div>
                                            
                                                    <button style="height: 15px;
                                                padding: 0;
                                                font-size: 10px;" class="minus_item btn btn-sm btn-secondary btn-block" data-id="{{$index}}" data-i="{{$details['quantity']}}" >-</button>
                                            </div>
                                            </div>
                                            </div>
                                       
                                        </td>
                               
                                <td  style="width: 25%;"> <button class=" btn btn-danger product_delete" id="product_delete"  
                                    data-id="{{$index}}">X</button>  
                                </td>
                               
                        
                        
                        </tr>

                        @endforeach

                       </tbody>

                        


                    </table>
                </div>
                <div> المبلغ الاجمالي: <span dir="ltr"><span id="total"></span>{{$detale->currency}}</span></div>
                <div class="form-group">
                    <label for="">الملاحظات:</label>
                    <textarea id="notes" name="notes" class="form-control"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                @if ($detale->pk !=null && $detale->sk !=null  )
                    
               
                      <button type="button"  class="btn btn-primary send" style="padding: 8px ; margin: 10px" 
                       >كاش</button>
                      <a target="_blank" href="{{url($username.'/stripe-payment')}}"><button type="button"  class="btn btn-primary " style="padding: 8px ; margin: 10px" 
                       >فيزا</button></a> 
                @else
                <button type="button"  class="btn btn-primary send" style="padding: 8px ; margin: 10px" 
                >إرسال</button>
                @endif

            
                <button type="button" class="btn btn-secondary" style="padding: 8px"
                        data-dismiss="modal">اغلاق</button>
            </div>
        </div>
    </div>
</div>

<script src="https://jquery.com/download/"></script> 

<script src="{{asset('js/all4e53.js')}}"></script>
{{-- <script src="{{asset('js/products8507.js')}}"></script>  --}}
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> 
<link href="{{asset('css/my-sweet-alert-style.css')}}" rel="stylesheet">   
@yield('script')
<script  type="text/javascript">
     
   


    //add producte 
    $('button.add').bind('click', function(e){
        e.preventDefault();
       var nameProduct = $(this).data('name');
       var id = $(this).data('id');
       
           
                $.ajax({
                    type: "GET",
                    url: "{{url($username.'/add_care')}}",//this is only changes
                    data: {
                        'id': id,                      
                    },
                    cache: false,
                   
                    success: function(data) {  

                        if(data.status == true){
                            getTotal(); 
                            total_quantity(); 
                            $('#table_show').load(location.href + " #table_show");
                            
                            Swal.fire({
                                    title: nameProduct,
                                    text: ' تمت الاضافة للقائمة بنجاح !',
                                    icon: "success",
                                    timer: 2000,
                                    buttons: false,
                            },)  ;     
                         //   alert(data) ;
                         console.log(data);
                        }else{
                            Swal.fire({
                                title: nameProduct,
                                text: data.msg,
                                icon: "warning",
                                timer: 2000,
                                buttons: false,
                        },)  ; 
                        }
                       
                       
                         

                    }  ,
                   

                 
                    

                  
               
            });

           
    });


    // المبلغ الاجمالي 
    getTotal();

    function getTotal(){


    $.ajax({
        type:'get',
        dataType:'json',
        url:"{{url($username.'/total')}}",
        success:function(data){
            console.log(data);
                        
            $('#total').text(data.total) ;
            $('#total2').text(data.total) ;
            return data.total ;

        }
    
    });

    }
   

    // العدد الكلي 
    total_quantity(); 
    function total_quantity(){

    $.ajax({
        type:'get',
        dataType:'json',
        url:"{{url($username.'/total_quantity')}}",
        success:function(data){
            console.log(data);
                        
            $('#total_quantity').text(data.total_quantity)

        }

    });

    }



     // chek quantity
    $(document).on('click','.count_prouducet',function(e){
          e.preventDefault();
          var id = $(this).data('id');
          var i  = $(this).closest('tr').find('input').eq(0).val()
          
        // alert( i );
        console.log(i);
       

                $.ajax({
                    type:'get',
                    dataType:'json',
                    url:"{{url($username.'/chek_quantity')}}",
                    data: {
                        'id': id,  
                        'i' : i ,                    
                    },
                   success:function(data){
                       console.log(data);
                       getTotal();   total_quantity(); 
                   

                   }
                        
                      
        });
       

    });



     // plus-item
     $(document).on('click','.plus-item',function(e){
          e.preventDefault();
          var id = $(this).data('id');
          var i  = $(this).data('i') ;
          
        // alert( i );
        console.log(i);
       

                $.ajax({
                    type:'get',
                    dataType:'json',
                    url:"{{url($username.'/plus_item')}}",
                    data: {
                        'id': id,  
                        'i' : i ,                    
                    },
                   success:function(data){
                       console.log(data);
                       $('#table_show').load(location.href + " #table_show");
                       
                       getTotal();   total_quantity(); 
                       

                   }
                        
                      
        });
       

    });


    // minus-item
    $(document).on('click','.minus_item',function(e){
          e.preventDefault();
          var id = $(this).data('id');
          var i  = $(this).data('i') ;
          
        // alert( i );
        console.log(i);
       

                $.ajax({
                    type:'get',
                    dataType:'json',
                    url:"{{url($username.'/minus_item')}}",
                    data: {
                        'id': id,  
                        'i' : i ,                    
                    },
                   success:function(data){
                       
                       $('#table_show').load(location.href + " #table_show");
                       
                       getTotal();   total_quantity(); 
                       

                   }
                        
                      
        });
       

    });



      // Delete  producte 
  
    $(document).on('click','.product_delete',function(e){
          e.preventDefault();

        var id = $(this).data('id');

    
            // if(confirm("هل ترد بالتأكيد حذف المتنج من لبسلة "))
            // {
                $.ajax({
                    type: "get",
                    url: "{{url($username.'/delet_producte')}}",//this is only changes
                    data: {
                        'id': id,
                    },
                    success: function(data) {
                        getTotal();
                        total_quantity(); 

                        
                       $('#producte'+id).remove();
                       Swal.fire({
                             
                                text: ' تمت حذف المنتج بنجاح  !',
                                icon: "success",
                                timer: 2000,
                                buttons: false,
                        },)  ;     
                  
                    }
  
            });
            // }    
    });
   

      //send whatsapp order  or visa
    $('button.send').bind('click', function(){
    
        // alert('send');
        
        var text =  $("#notes").val();
        
            $.ajax({
                     type: "get",
                     url: "{{url($username.'/send_order')}}",
                     data:{
                         'notes' : text ,
                     },
                     success: function(data) {

                        Swal.fire({
                                    title: 'سيتم نقلك الى واتس اب ',
                                    allowOutsideClick: false,
                                    showDenyButton: false,
                                    showCancelButton: true,
                                    cancelButtonText: "الغاء",
                                    confirmButtonText: 'إرسال',
                                    customClass: {confirmButton: 'send_button'}

                        });

                        $('.whatsapp_button').click(function () {
                        

                                Swal.fire({
                                    title: 'سيتم نقلك الى واتس اب ',
                                    allowOutsideClick: false,
                                    showDenyButton: false,
                                    showCancelButton: true,
                                    cancelButtonText: "الغاء",
                                    confirmButtonText: 'إرسال',
                                    customClass: {confirmButton: 'send_button'}

                                });
                            
                        });

                        $('.send_button').click(function () {
                            url = "https://api.whatsapp.com/send/?phone={{$detale->whatsapp}}&text= " + data + " +&app_absent=0" ; 
                            window.open(url) ;
                            

                            $.ajax({

                                    type:'get',
                                    dataType:'json',
                                    url:"{{url($username.'/order')}}",
                                    success:function(data){
                                        console.log(data);
                                    }
                                
                            });
                        });
                      
                }
  
            });
    });

    $('button.visa').bind('click', function(){
    
    // alert('send');
        $.ajax({
                 type: "get",
                 url: "{{url($username.'/checkout_order')}}",

                 success: function(data) {

                    Swal.fire({
                                title: 'سيتم تحويلك لتعبئة بيانات الفيزا  ',
                                allowOutsideClick: false,
                                showDenyButton: false,
                                showCancelButton: true,
                                cancelButtonText: "الغاء",
                                confirmButtonText: 'ارسل',
                                customClass: {confirmButton: 'whatsapp_button'}

                    });

                    $('.whatsapp_button').click(function () {
                    
                        $.ajax({
                            type: "get",
                            url: "{{url('checkout')}}",
                            data: {
                                'amunt':data,  
                                              
                            }, 
                        });  
                           
                        
                    });

                  
                  
            }

        });
});
    

</script>




</body>

<!-- Mirrored from qrlist.app/chikatika by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 14 Sep 2021 14:51:26 GMT -->
</html>


