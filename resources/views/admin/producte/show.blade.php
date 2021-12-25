
@extends('layouts.siet')
@section('title')
Detail
@endsection
@section('content')


<section class=" p-t-10 p-b-10" style="background-color: #000000">
    <div id="products" class="">
            <div class="container-fluid p-2">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-12" style="max-width: 1200px">
                <div class="card shadow p-0" style="overflow: hidden;;background-color: #5c5c5c">
                    <div class="row">
                        <div class="col-md-6 p-0">
                            <div style="   position: relative;
                                       width: 100%;
                                       padding-top: 100%;">
                                <div class="block2   "
                                     style="position:absolute;
                                         left: 0;top: 0;right: 0;bottom: 0;
                                         background-image:url({{asset('image_producte/'.$prod->photo)}}) ;
                                         object-fit: cover; background-size: cover;
                                         color: white; padding: 0px;">

                                </div>
                            </div>
                        </div>
                        <div class="border-div" style="background-color: #ff0000"></div>
                        <div class="col">
                            <div class="row justify-content-center align-items-center h-full">
                                <div class="col-md-12">
                                    <h3 style="  color: #ffffff ; padding: 8px ; text-align: center">
                                      {{$prod->name}}
                                    </h3>
									<h4 style="  color: #ffffff ; padding: 8px ; text-align: center">
										{{$prod->contact}}
									  </h4>
                                    <p style="  color: #ffffff ; padding: 8px ; text-align: center">
                                        
                                    </p>


                                    <div class="container">
                                        <div class="row justify-content-between  " style="align-items: center ;  box-shadow: 2px 2px 8px rgba(0,0,0,0.4)  ; padding: 20px ">
                                            <a dir="ltr" class="block2-price m-text6 p-r-16" style="color: #ffffff  ">
                                                {{$prod->price}} {{$detale->currency}}
                                            </a>

                                          
                                        </div>
                                    </div>


                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    </div>
</section>
@endsection