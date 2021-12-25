 
@extends('layouts.admin')
@section('title')
    الطلبات الشهر الحالي 
@endsection
@section('content')
    

<div class="app-content content">
   <div class="content-wrapper">
       <div class="content-header row">
           <div class="content-header-left col-md-6 col-12 mb-2">
               <h3 class="content-header-title">    الطلبات الشهر الحالي 
            </h3>
               <div class="row breadcrumbs-top">
                   <div class="breadcrumb-wrapper col-12">
                       <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="{{route('admin.dashboard')}}">الرئيسية</a>
                           </li>
                           <li class="breadcrumb-item active">     الطلبات الشهر الحالي 

                           </li>
                       </ol>
                   </div>
               </div>
           </div>
       </div>
       <div class="content-body">
           <!-- DOM - jQuery events table -->
           <section id="dom">
               <div class="row">
                   <div class="col-12">
                       <div class="card">
                           <div class="card-header">
                               <h4 class="card-title">جميع     الطلبات الشهر الحالي 
                            </h4>
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
                               <div class="card-body card-dashboard">
                                {{-- <div class="d-flex justify-content-end mb-4">
                                    <a class="btn btn-primary" href="{{route('pdf') }}">Export to PDF</a>
                                </div> --}}
         
                                   <table
                                       class="table display nowrap table-striped table-bordered scroll-horizontal">
                                       <thead>
                                       <tr>
                                           <th> # </th>
                                           <th> الاصناف </th>
                                          
                                           <th> السعر الكلي </th>
                                         
                                           <th>العدد </th>

                                           <th>التاريخ  </th>

                                       
                                       </tr>
                                       </thead>
                                       <tbody>

                                      @isset($order_months)
                                      @foreach ($order_months as $index=> $order_month)
                                          
                                          {{-- {{print_r($order_year)  }} --}}
                                      
                                               <tr>
                                                   <td>{{++$index}} </td>
                                                   <td>{{$order_month['name']}} </td>
                                         
                                                   <td>{{$order_month['total']}}  </td>
                                                  
                                                   <td>{{$order_month['quantity']}}</td>

                                                   <td>{{$order_month['created_at']}}</td>
                                               </tr>
                                      @endforeach

                                     @endisset   


                                       </tbody>
                                   </table>
                                   <div class="justify-content-center d-flex">

                                   </div>
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
