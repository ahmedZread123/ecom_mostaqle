@extends('layouts.admin_login')
@section('title')
   Admin Login
@endsection
@section('content')
    

<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <section class="flexbox-container">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <div class="col-md-4 col-10 box-shadow-2 p-0">
                        <div class="card border-grey border-lighten-3 m-0">
                            <div class="card-header border-0">
                                <div class="card-title text-center">
                                
                                </div>
                                <h2 class="card-subtitle line-on-side text-muted text-center font-small-5 pt-2">
                                    <span>الدخول للوحة التحكم </span>
                                </h2>
                               
                            </div>

                            <!-- begin alet section-->
                            @include('admin.includes.alerts.success')
                            @include('admin.includes.alerts.errors')
                            <!-- end alet section-->

                            <div class="card-content">
                                <div class="card-body">
                                    <form class="form-horizontal form-simple" action="{{route('admin.setlogin')}}" method="post"
                                          novalidate>
                                          @csrf
                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                            <input type="text" name="email"
                                                   class="form-control form-control-lg input-lg"
                                                   value="" id="email" placeholder="أدخل البريد الالكتروني ">
                                            <div class="form-control-position">
                                                <i class="ft-user"></i>
                                            </div>
                                       
                                               
                                            <span class="text-danger"> </span>
                                    
                                            
                                        </fieldset>
                                        <fieldset class="form-group position-relative has-icon-left">
                                            <input type="password" name="password"
                                                   class="form-control form-control-lg input-lg"
                                                   id="user-password"
                                                   placeholder="أدخل كلمة المرور">
                                            <div class="form-control-position">
                                                <i class="la la-key"></i>
                                            </div>
                                            <span class="text-danger"> </span>
                                        </fieldset>
                                    
                                        <button type="submit" class="btn btn-info btn-lg btn-block"><i
                                                class="ft-unlock"></i>
                                            دخول
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
@endsection
