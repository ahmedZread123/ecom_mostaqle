@extends('layouts.admin')
@section('title')
لوحة  التحكم 
@endsection
@section('content')
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="row">
                  {{-- الاقسام    --}}
                  <div class="col-xl-4 col-lg-4 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="media-body text-left">
                              <h2 class="danger">{{App\Models\category::where('user_id' , Auth::id())->count()}}</h2>
                              <span>الاقسام  </span>
                            </div> 
                            <div class="align-self-center">
                              <i class="icon-briefcase danger font-large-2 float-right"></i>
                            </div>
                          </div>
                          <div class=" mt-1 mb-0" style="height: 7px;">
                          
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 {{-- المنتجات     --}}
                 <div class="col-xl-4 col-lg-4 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="media-body text-left">
                              <h2 class="success">{{App\Models\producte::where('user_id' , Auth::id())->count()}}</h2>
                              <span>المنتجات  </span>
                            </div>
                            <div class="align-self-center">
                              <i class="icon-briefcase success font-large-2 float-right"></i>
                            </div>
                          </div>
                          <div class=" mt-1 mb-0" style="height: 7px;">
                          
                        </div>
                        </div>
                      </div>
                    </div>
                   </div>

                 </div>

                   {{-- الطلبات      --}}
                 <div class="col-xl-4 col-lg-4 col-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body">
                          <div class="media d-flex">
                            <div class="media-body text-left">
                              <h2 class="Secondary">{{App\Models\order::where('user_id' , Auth::id())->count()}}</h2>
                              <span>الطلبات   </span>
                            </div>
                            <div class="align-self-center">
                              <i class="icon-briefcase Secondary font-large-2 float-right"></i>
                            </div>
                          </div>
                          <div class=" mt-1 mb-0" style="height: 7px;">
                          
                        </div>
                        </div>
                      </div>
                    </div>
                   </div>

                 </div>


                </div>


       
        </div>
    </div>
@endsection