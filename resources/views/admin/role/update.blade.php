@extends('layouts.admin')
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
                            <li class="breadcrumb-item"><a href="{{route('role.index')}}"> الطلاب</a>
                            </li>
                            <li class="breadcrumb-item active">إضافة صلاحية 
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
                                <h4 class="card-title" id="basic-layout-form"> إضافة صلاحية جديد </h4>
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
                                    <form class="form" action="{{route('role.update' , $role->id) }}" method="POST"
                                          enctype="multipart/form-data">
                                        @csrf
                                        @method('PUT')
                          

                                        
                                         <div class="form-body">
                                            <h4 class="form-section"><i class="ft-home"></i> بيانات  الصلاحية  </h4>
                                          
                                    
                                                   {{-- الاسم   --}}
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="projectinput1">   اسم الصلاحية    </label>
                                                        <input type="text" value=" {{$role->name}}" id="name"
                                                               class="form-control"
                                                          
                                                               name="name">
                                                               @error("name")
                                                              
                                                               <span class="text-danger">  {{$message}}</span>
                                                               @enderror   
                                                     </div>
                                                </div>

                                             
                                            </div>
                                      
                                            
                                                 {{-- الصلاحيات   --}}
                                                 <div class="row">
                                                  
                                                        @foreach (Config('global.perm') as $name => $value)
                                                            
                                                   
                                                        <div class="form-group ml-3">
                                                            <div class="form-check">
                                                              <input class="form-check-input " type="checkbox" name="perm[]" value="{{$name}}" {{ in_array($name , $role->getperm($role->perm))?'checked':'' }}  id="invalidCheck2" >
                                                              <label class="form-check-label" for="invalidCheck2">
                                                               {{$value}}
                                                              </label>
                                                            </div>
                                                              @error("perm")
                                                                  
                                                             <span class="text-danger">  {{$message}}</span>
                                                             @enderror     
    
                                                        </div>

                                                        @endforeach

    
    
                                             

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
 
{{-- @section('script')
@include('layouts.script')
@endsection --}}

