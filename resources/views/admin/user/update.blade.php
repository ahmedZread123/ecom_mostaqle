@extends('layouts.admin')
@section('title')
    تعديل مشترك 
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
                            <li class="breadcrumb-item"><a href="{{route('user.index')}}"> المشتركين</a>
                            </li>
                            <li class="breadcrumb-item active">تعديل مشترك  
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
                                <h4 class="card-title" id="basic-layout-form"> تعديل مشترك  </h4>
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
                                    <form class="form" action="{{route('user.update',$user->id) }}" method="POST"
                                          enctype="multipart/form-data">
                                          
                                          @method('PUT')
                                          @csrf
                                      
                                         <div class="form-body">
                                            <h4 class="form-section"><i class="ft-home"></i> بيانات  المنتج </h4>
                                          
                                    
                                                   {{-- الاسم + الدومين    --}}
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   اسم المشترك    </label>
                                                        <input type="text" value="{{$user->name}}" id="name"
                                                               class="form-control"
                                                          
                                                               name="name">
                                                               @error("name")
                                                              
                                                               <span class="text-danger">  {{$message}}</span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                                <div class="col-md-6 ">
                                                    <div class="form-group">
                                                        <label for="projectinput1">اسم الدومين </label>
                                                        <input type="text" value="{{$user->username}}" id="name"
                                                               class="form-control"
                                                            
                                                               name="username">
                                                          @error("username")
                                                              
                                                         <span class="text-danger">  {{$message}}</span>
                                                         @enderror     

                                                     </div>
                                                </div>
                                            </div>

                                                  {{--   الايميل و كلمة المرور     --}}
                                            <div class="row">
                                                   {{-- الايميل  --}}
                                                <div class="col-md-6 ">
                                                    <div class="form-group">
                                                        <label for="projectinput1">ايميل المشترك   </label>
                                                        <input type="text" value="{{$user->email}}" id="name"
                                                               class="form-control"
                                                            
                                                               name="email">
                                                          @error("email")
                                                              
                                                         <span class="text-danger">  {{$message}}</span>
                                                         @enderror     

                                                     </div>
                                                </div>

                                                <div class="col-md-6 ">
                                                    <div class="form-group">
                                                        <label for="projectinput1">كلمة المرور   </label>
                                                        <input type="text" value="" id="name"
                                                               class="form-control"
                                                            
                                                               name="password">
                                                          @error("password")
                                                              
                                                         <span class="text-danger">  {{$message}}</span>
                                                         @enderror     

                                                     </div>
                                                </div>
                                           
                                            </div>

                                             {{-- الصلاحيات   --}}
                                             <div class="col-md-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                      <label class="input-group-text" for="inputGroupSelect01"> اختر قسم </label>
                                                    </div>
                                                    <select class="custom-select" id="inputGroupSelect01" name="role_id">
                                                     @isset($roles)
                                                    @foreach ($roles as $role)
                                                        
                                                        <option 
                                                        @if ($role->id == $user->role_id)
                                                          selected 
                                                        @endif
                                                       
                                                         value="{{$role->id}}">{{$role->name}}</option>
                                                    @endforeach

                                                     @endisset

                                                    </select>
                                                    @error("role_id")
                                                          
                                                    <span class="text-danger">  {{$message}}</span>
                                                    @enderror   
                                                  </div>
                                            </div>
                                      

                                                
                                      
                                         
                                           
                                           
                                        </div>


                                        <div class="form-actions">
                                            <button type="button" class="btn btn-warning mr-1"
                                                    onclick="history.back();">
                                                <i class="ft-x"></i> تراجع
                                            </button>
                                            <button type="submit" class="btn btn-primary">
                                                <i class="la la-check-square-o"></i> حفظ
                                            </button>
                                        </div>
                                    </form>
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
 
