@extends('layouts.siet')
@section('content')
<style>
    @font-face {
        src: url(fonts/sansplan.otf);
        font-family: sansfont;

    }

    * {
        font-family: sansfont;
    }
</style>
 <div class="content-body">
    <button type="text" class="btn btn-lg btn-block btn-outline-secondary text-light mb-2 "
    id="type-error"> {{$cate->name}}
 </div>
<section class=" p-t-10 p-b-10" style="background-color: #000000">
  
    <div id="products">
       
        <div class="container-fluid px-2 py-1">
           
            <div class="row">
                @if (isset($productes))
                   @foreach ($productes as $index => $producte)
                       
                  
                <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-1 p-2">
                    <div  class="block2">
                        <div class="block2-img wrap-pic-w of-hidden pos-relative block2 " style="border-radius: 12px; box-shadow: rgba(0, 0, 0, 0.4) 2px 2px 8px; margin-top: 0px; background-color: rgb(92, 92, 92);">
                            <a href="{{url($username.'/show_producte',$producte->id)}}">
                             <div style="position: relative; width: 100%; padding-top: 100%;">
                                
                                <div class="block2   " style="position: absolute; inset: 0px; background-image: url({{asset('image_producte/'.$producte->photo)}}); object-fit: cover; background-size: cover; color: white; padding: 0px; border-bottom: 4px solid rgb(255, 0, 0);">
                                </div>
                              </div>
                            </a>
                            <h4 style="font-size: 18px; color: rgb(255, 255, 255); padding: 8px; text-align: center;">
                              {{$producte->name}}
                            </h4> 
                                <div class="container" style="margin-top: 10px;">
                                    <div class="row justify-content-between  " style="align-items: center; padding-bottom: 8px;">
                                        <a dir="ltr" class="block2-price m-text6 p-r-8" style="color: rgb(255, 255, 255);">
                                           {{$producte->price}} {{$detale->currency}} 
                                          
                                          
                                        </a> 
                                        <div >
                                            {{-- <h5 style="color:red;">اضف للسلة  </h5> --}}
                                            <button  class="btn btn-danger add" data-name="{{$producte->name}}" data-id="{{$producte->id}}" style="colo:#ffffff;"> +  </button>
                                        </div>
                                      
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                @endforeach

                    
                @endif

               
    
    
    </div></div></div>
</section>

@endsection