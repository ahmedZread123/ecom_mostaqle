@extends('layouts.admin')
@section('title')
  بيانات الادمن  
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
            <section id="basic-form-layouts">
                <div class="row match-height">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title" id="basic-layout-form"> بيانات الادمن    </h4>
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
                                    <form class="form" action="{{route('save_detale_admin',Auth::id()) }}" method="POST"
                                          enctype="multipart/form-data">
                                        @csrf
                                      
                                    

                                        <div class="form-body">
                                            <h4 class="form-section"><i class="ft-home"></i> بيانات  الادمن   </h4>
                                          
          
                                                   {{-- الاسم     --}}
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   اسم الادمن   </label>
                                                        <input type="text"
                                                       
                                                             
                                                         value="{{Auth::user()->name}}"
                                                        
                                                          
                                                         id="name"
                                                               class="form-control"
                                                          
                                                               name="name">
                                                               @error("name")
                                                                 
                                                               <span class="text-danger">  {{$message}}</span>
                                                               @enderror  
                                                              
                                                     </div>
                                                </div>

                                              
                                            </div>

                                             {{-- الايميل      --}}
                                             <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   ايميل  الادمن   </label>
                                                        <input type="email"
                                                       
                                                             
                                                         value="{{Auth::user()->email}}"
                                                        
                                                          
                                                         id="email"
                                                               class="form-control"
                                                          
                                                               name="email">
                                                               @error("email")
                                                                 
                                                               <span class="text-danger">  {{$message}}</span>
                                                               @enderror  
                                                           
                                                     </div>
                                                </div>

                                              
                                            </div>

                                            {{-- كالمة المرور       --}}
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   كلمة سر   الادمن   </label>
                                                        <input type="password"

                                                             id="password"
                                                               class="form-control"
                                                          
                                                               name="password">
                                                               <input type="hidden" name="ps" value="ps">
                                                               @error("password")
                                                                 
                                                               <span class="text-danger">  {{$message}}</span>
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
 