@extends('layouts.admin')
@section('title')
 اضافة بيانات الموقع 
@endsection
@section('content')
    
﻿﻿ <div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-12 mb-2">
                <div class="row breadcrumbs-top">
                    <div class="breadcrumb-wrapper col-12">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('admin.dashboard')}}">الرئيسية </a>
                            </li>
                           
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body">
            <!-- Basic form layout section start -->
            <button type="text" class="btn btn-lg btn-block btn-outline-warning mb-2"
            id="type-error">   اخي التاجر نامل تعبئة الفراغات والصور ادناه حتى يصبح متجرك خاص فيك واجمل.
             </button>
            <section id="basic-form-layouts">
                <div class="row match-height">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title" id="basic-layout-form"> اضافة بيانات الموقع  </h4>
                                <a class="heading-elements-toggle"><i
                                        class="la la-ellipsis-v font-medium-3"></i></a>
                                <div class="heading-elements">
                                    <ul class="list-inline mb-0">
                                        <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                        <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                        <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                        <li><a data-action="close"><i class="ft-x"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            @include('admin.includes.alerts.success')
                            @include('admin.includes.alerts.errors')
                            <div class="card-content collapse show">
                                <div class="card-body">
                                    <form class="form" action="{{route('save_detale') }}" method="POST"
                                          enctype="multipart/form-data">
                                        @csrf
                                      
                                        <input type="hidden" name="ph" value="ph">
                                        <div class="form-group">
                                           <div class="text-center">
                                               @isset($detale->photo)
                                                   
                                            <img src="{{asset('img/'.$detale->photo)}}" style="width:150px ; height:100px " alt="صورة">
                                            @endisset
                                           
                                        </div>
                                          
                                         </div>

                                        <div class="form-group">
                                            <label> صوره الموقع الرئيسية  </label>
                                            <label id="projectinput7" class="file center-block">
                                                <input type="file" id="file" name="photo">
                                                <span class="file-custom"></span>
                                            </label>
                                            @error('photo')
                                                              
                                            <span class="text-danger">{{$message}} </span>
                                            @enderror   
                                         </div>

                                        <div class="form-body">
                                            <h4 class="form-section"><i class="ft-home"></i> بيانات  الموقع  </h4>
                                             {{-- الاسم وشعار العملة  --}}
                                            <div class="row">
                                                {{-- الاسم  --}}
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1">  الاسم الخاص في الموقع <small> يطهر في اعلى الموقع في التبويبة </small>  </label>
                                                        <input type="text"
                                                         @isset($detale->name)
                                                             
                                                         value="{{$detale->name}}"
                                                         @endisset
                                                          
                                                         id="name"
                                                               class="form-control"
                                                          
                                                               name="name">
                                                               @error("name")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                                {{-- العملة  --}}
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1"> العملة الخاصة في الموقع <small>يجب ان يكون رمز العملة موافق لموقع stripe ويمكنك معرفة رمز العملة الخاصة بدولتك من خلال الرابط التالي <a target="_blank" href="https://stripe.com/docs/currencies"> اضغط هنا </a> </small>  </label>
                                                        <input type="text"
                                                         @isset($detale->currency)
                                                             
                                                         value="{{$detale->currency}}"
                                                         @endisset
                                                          
                                                         id="currency"
                                                               class="form-control"
                                                          
                                                               name="currency">
                                                               @error("currency")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>
                                              
                                            </div>
                                                   {{-- الفيس    --}}
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1">  رابط الفيس بوك الخاص بك   </label>
                                                        <input type="text"
                                                         @isset($detale->facebook)
                                                             
                                                         value="{{$detale->facebook}}"
                                                         @endisset
                                                          
                                                         id="name"
                                                               class="form-control"
                                                          
                                                               name="facebook">
                                                               @error("facebook")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                              
                                            </div>

                                            
                                                   {{-- الانستقرام     --}}
                                                   <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="projectinput1">  رابط الانستقرام  الخاص بك   </label>
                                                            <input type="text" @isset($detale->instagram)
                                                                
                                                          value="{{$detale->instagram}}"   @endisset 
                                                          id="name"
                                                                   class="form-control"
                                                              
                                                                   name="instagram">
                                                                   @error("instagram")
                                                                  
                                                                   <span class="text-danger">{{$message}} </span>
                                                                   @enderror   
                                                         </div>
                                                    </div>
    
                                                  
                                                </div>


                                                
                                                   {{-- واتس اب     --}}
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1"> رقم  واتس اب  الخاص بك  
                                                             <small> يرجا عدم وضع علامة <h1>+</h1>  </small> </label>
                                                        <input type="text" 
                                                        @isset($detale->whatsapp)
                                                            
                                                        value="{{$detale->whatsapp}}" 
                                                        @endisset

                                                        id="name"
                                                               class="form-control"
                                                          
                                                               name="whatsapp">
                                                               @error("whatsapp")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                              
                                            </div>


                                               {{--رابط جوجل ماب     --}}
                                               <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1"> رابط جوجل ماب google map
                                                          </label>
                                                        <input type="text" 
                                                        @isset($detale->marker_1)
                                                            
                                                        value="{{$detale->marker_1}}" 
                                                        @endisset

                                                        id="name"
                                                               class="form-control"
                                                          
                                                               name="marker_1">
                                                               @error("marker_1")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                              
                                              </div>


                                                      {{--العنوان   --}}
                                                      <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label for="projectinput1"> العنوان 
                                                                  </label>
                                                                <input type="text" 
                                                                @isset($detale->marker_2)
                                                                    
                                                                value="{{$detale->marker_2}}" 
                                                                @endisset
        
                                                                id="name"
                                                                       class="form-control"
                                                                  
                                                                       name="marker_2">
                                                                       @error("marker_2")
                                                                      
                                                                       <span class="text-danger">{{$message}} </span>
                                                                       @enderror   
                                                             </div>
                                                        </div>
        
                                                      
                                                      </div>

                                           
                                            
                                                {{-- stripe  --}}
                                            <h2 class=" text-center m-2 success "  > اذا كنت ترغب في تفعيل الفيزا يرجا ملء البيانات التالية من صفحة stripe الخاصة بك  </h2>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1"> Publishable key 
                                                            </label>
                                                        <input type="text" 
                                                        @isset($detale->pk)
                                                            
                                                        value="{{$detale->pk}}" 
                                                        @endisset

                                                        id="name"
                                                               class="form-control"
                                                          
                                                               name="pk">
                                                               @error("pk")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>


                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1">Secret key 
                                                              </label>
                                                        <input type="text" 
                                                        @isset($detale->sk)
                                                            
                                                        value="{{$detale->sk}}" 
                                                        @endisset

                                                        id="name"
                                                               class="form-control"
                                                          
                                                               name="sk">
                                                               @error("sk")
                                                              
                                                               <span class="text-danger">{{$message}} </span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                              
                                            </div>

                                              
                                           
                                        </div>


                                        <div class="form-actions">
                                            <button type="button" class="btn btn-warning mr-1"
                                                    onclick="history.back();">
                                                <i class="ft-x"></i> تراجع
                                            </button>
                                            <button type="submit" class="btn btn-primary">
                                                <i class="la la-check-square-o"></i> تحديث
                                            </button>
                                        </div>
                                    </form>

                            
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- // Basic form layout section end -->
        </div>
    </div>
</div>

@endsection
 