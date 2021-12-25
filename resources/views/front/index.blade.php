@extends('layouts.siet')
@section('content')
    
<!-- Content page -->

<section class=" p-t-10 p-b-10" style="background-color: #000000">
    <div id="products" class="">
        
    <!-- Slide1 -->

    <!-- Banner -->
    <section class="container-fluid p-2">

        <main class="row">

            @if (isset($cates))
              @foreach ($cates as $cate)
                  
          
                <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-1 p-2">
                    {{-- <a href="{{route('show_producte' , $cate->id)}}" class=" w-full"> --}}
                    <a href="{{url($username.'/producte',$cate->id)}}" class=" w-full" >

                        <!-- Block2 -->
                        <div class="block2">
                            <div class="block2-img wrap-pic-w of-hidden pos-relative block2 "
                                 style="  border-radius: 12px;   box-shadow: 2px 2px 8px rgba(0,0,0,0.4) ; margin-top: 0px  ; background-color: #5c5c5c ">
                                <div style="   position: relative;
                                       width: 100%;
                                       padding-top: 100%;">
                                    <div class="block2   "
                                         style="background-image:url({{asset('image_categorie/'.$cate->photo)}}); position:absolute;
                                             left: 0;top: 0;right: 0;bottom: 0;
                                             object-fit: cover; background-size: cover;color: white;
                                             border-bottom: 4px solid #ff0000;">

                                    </div>
                        </div>

                                <!-- Button -->
                                <h4 style="font-size: 18px  ;  color: #ffffff ; padding: 16px ; text-align: center">
                                  {{$cate->name}}
                                </h4>

                            </div>
                        </div>
                    </a>
                </div>

                @endforeach
                
                @endif








        </main>
    </section>

    <!-- New Product -->
    


    <!-- Shipping -->



    </div>
</section>

@endsection
