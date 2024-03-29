@extends('layouts.admin')
@section('title')
    إضافة منتج 
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
                            <li class="breadcrumb-item"><a href="{{route('producte.index')}}"> المنتجات</a>
                            </li>
                            <li class="breadcrumb-item active">إضافة منتج جديد 
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
                                <h4 class="card-title" id="basic-layout-form"> إضافة منتج جديد </h4>
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
                                    <form class="form" action="{{route('producte.store') }}" method="POST"
                                          enctype="multipart/form-data">
                                        @csrf
                                        {{-- add logo  --}}
                                        <div class="form-group">
                                            
                                            <label> صورة المنتج  </label>
                                            <label id="projectinput7" class="file center-block">
                                                <input type="file" id="file" name="photo">
                                                <span class="file-custom"></span>
                                            </label>
                                            @error('photo')
                                                              
                                            <span class="text-danger">{{$message}} </span>
                                            @enderror   
                                        </div>

                                        
                                         <div class="form-body">
                                            <h4 class="form-section"><i class="ft-home"></i> بيانات  المنتج </h4>
                                          
                                    
                                                   {{-- الاسم + السعر    --}}
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   اسم المنتج   </label>
                                                        <input type="text" value="" id="name"
                                                               class="form-control"
                                                          
                                                               name="name">
                                                               @error("name")
                                                              
                                                               <span class="text-danger">  {{$message}}</span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                                <div class="col-md-6 ">
                                                    <div class="form-group">
                                                        <label for="projectinput1">السعر</label>
                                                        <input type="text" value="" id="name"
                                                               class="form-control"
                                                            
                                                               name="price">
                                                          @error("price")
                                                              
                                                         <span class="text-danger">  {{$message}}</span>
                                                         @enderror     

                                                     </div>
                                                </div>
                                            </div>

                                                  {{--   القسم    --}}
                                            <div class="row">
                                                {{-- القسم  --}}
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                          <label class="input-group-text" for="inputGroupSelect01"> اختر قسم </label>
                                                        </div>
                                                        <select class="custom-select" id="inputGroupSelect01" name="category_id">
                                                         @isset($cates)
                                                        @foreach ($cates as $cate)
                                                            
                                                            <option selected value="{{$cate->id}}">{{$cate->name}}</option>
                                                        @endforeach

                                                         @endisset

                                                        </select>
                                                        @error("category_id")
                                                              
                                                        <span class="text-danger">  {{$message}}</span>
                                                        @enderror   
                                                      </div>
                                                </div>
                                           
                                            </div>
                                         {{-- وصف المنتج  --}}
                                            <div class="row">
                                             <div class="col-md-8 mt-2">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="وصف المنتج " name="contact" id="floatingTextarea2" style="height: 100px"></textarea>
                                                    <label for="floatingTextarea2">وصف المنتج</label>
                                                </div>
                                                @error("contact")
                                                              
                                                <span class="text-danger">  {{$message}}</span>
                                                @enderror     
                                             </div>
                   
                                            </div>

                                                
                                      
                                           {{-- الحالة  --}}
                                            <div class="row">
                                                

                                                <div class="col-md-6">
                                                    <div class="form-group mt-1">
                                                        <input type="checkbox"  value="1" name="active"
                                                               id="switcheryColor4"
                                                               class="switchery" data-color="success"
                                                               checked/>
                                                        <label for="switcheryColor4"
                                                               class="card-title ml-1">الحالة</label>
                                                      
                                                        <span class="text-danger"></span>
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
 
