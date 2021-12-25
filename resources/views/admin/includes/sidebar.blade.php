<div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

            <li class="nav-item active"><a href="{{ route('admin.dashboard')}}"><i class="la la-mouse-pointer"></i><span
                        class="menu-title" data-i18n="nav.add_on_drag_drop.main">الرئيسية </span></a>
            </li>

             {{-- المشتركين  --}}
            @can('user')
                
             <li class="nav-item   ">
                <a href=""><i class="la la-home"></i>
                    <span class="menu-title" data-i18n="nav.dash.main">المشتركين </span>
                    <span
                        class="badge badge badge-info badge-pill float-right mr-2">{{App\Models\admin::where('id' , '<>' ,  Auth::id())->count()}}</span>
                
                     </a>
                <ul class="menu-content">
                    <li class=""><a class="menu-item" href="{{route('user.index') }}"
                                          data-i18n="nav.dash.ecommerce"> عرض الكل </a>
                    </li>
                    <li><a class="menu-item" href="{{route('user.create') }}" data-i18n="nav.dash.crypto">أضافة
                        مشترك جديد      </a>
                    </li>
                </ul>
            </li>
            @endcan
           

            @can('role')
                
                        {{-- الصلحيات   --}}
            <li class="nav-item">
                <a href=""><i class="la la-group"></i>
                <span class="menu-title" data-i18n="nav.dash.main">الصلحيات   </span>
                    <span class="badge badge badge-danger badge-pill float-right mr-2">
                    {{App\Models\role::count()}}
                    </span>
                </a>
                <ul class="menu-content">
                <li class="">   <a class="menu-item" href="{{route('role.index')}}" 
                        data-i18n="nav.dash.ecommerce">عرض الكل </a>
                </li>
                <li><a class="menu-item" href="{{route('role.create')}}" data-i18n="nav.dash.crypto">أضافة
                صلاحية جديد </a>
                </li>
                </ul>
            </li>
            @endcan

            {{-- الاقسام  --}}
            @can('category')
                
            <li class="nav-item   ">
                <a href=""><i class="la la-home"></i>
                    <span class="menu-title" data-i18n="nav.dash.main">الأقسام </span>
                    <span
                        class="badge badge badge-info badge-pill float-right mr-2">{{App\Models\category::where('user_id' , Auth::id())->count()}}</span>
                
                     </a>
                <ul class="menu-content">
                    <li class=""><a class="menu-item" href="{{route('category.index') }}"
                                          data-i18n="nav.dash.ecommerce"> عرض الكل </a>
                    </li>
                    <li><a class="menu-item" href="{{route('category.create') }}" data-i18n="nav.dash.crypto">أضافة
                        قسم  جديد   </a>
                    </li>
                </ul>
            </li>
            @endcan
          
              {{-- المنتجات  --}}
              @can('producte')
                  
              
            <li class="nav-item"><a href=""><i class="la la-group"></i>
                    <span class="menu-title" data-i18n="nav.dash.main"> المنتجات  </span>
                    <span
                        class="badge badge badge-danger badge-pill float-right mr-2">{{App\Models\producte::where('user_id' , Auth::id())->count()}}</span>
                </a>
                <ul class="menu-content">
                    <li class=""><a class="menu-item" href="{{route('producte.index')}}"
                                          data-i18n="nav.dash.ecommerce"> عرض الكل </a>
                    </li>
                    <li><a class="menu-item" href="{{route('producte.create')}}" data-i18n="nav.dash.crypto">أضافة
                             منتج جديد </a>
                    </li>
                </ul>
            </li>
            @endcan
             
            @can('order')
                
            {{-- الطلبات  --}}
            <li class="nav-item">
                <a href=""><i class="la la-group"></i>
                  <span class="menu-title" data-i18n="nav.dash.main">الطلبات </span>
                  <span
                  class="badge badge badge-danger badge-pill float-right mr-2">
                  {{App\Models\order::where('user_id' , Auth::id())->count()}}</span>
                
                </a>
                <ul class="menu-content">
                    <li class=""><a class="menu-item" href="{{route('order.index')}}"
                                          data-i18n="nav.dash.ecommerce"> جميع الطلبات  </a>
                    </li>
                    <li><a class="menu-item" href="{{route('order_year')}}" data-i18n="nav.dash.crypto">
                             طلبات السنة الحالية  </a>
                    </li>
                    <li><a class="menu-item" href="{{route('order_month')}}" data-i18n="nav.dash.crypto">
                        طلبات الشهر الحالي  </a>
               </li>
                </ul>
           
            </li>
            @endcan

            {{-- بيانات الموقع  --}}
            @can('detale')
                
            <li class="nav-item">
                <a href="{{route('detale.index')}}"><i class="la la-group"></i>
                    <span class="menu-title" data-i18n="nav.dash.main">بيانات الموقع   </span>
                    
                </a>

                
               
            </li>
            @endcan

         {{--
            <li class="nav-item"><a href=""><i class="la la-male"></i>
                    <span class="menu-title" data-i18n="nav.dash.main">المتاجر  </span>
                    <span
                        class="badge badge badge-success badge-pill float-right mr-2">{{App\Models\vendor::count()}}
                     </span>
                </a>
                <ul class="menu-content">
                    <li class=""><a class="menu-item" href="{{route('vendor.index')}}"
                                          data-i18n="nav.dash.ecommerce"> عرض الكل </a>
                    </li>
                    <li><a class="menu-item" href="{{route('vendor.create')}}" data-i18n="nav.dash.crypto">أضافة
                            متجر  </a>
                    </li>
                </ul>
            </li> --}}


      


        </ul>
    </div>
</div>