<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        align-items: stretch;
    }

    .grid > article {
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    }

    .grid > article img {
        max-width: 100%;
    }

    .text {
        padding: 0 20px 20px;
    }

    .text > button {
        background: gray;
        border: 0;
        color: white;
        padding: 10px;
        width: 100%;
    }




</style>



<!DOCTYPE html>
<html lang="ar" dir="rtl">

<!-- Mirrored from qrlist.app/chikatika by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 14 Sep 2021 14:51:26 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <title>
        @isset($detale->name)
        {{$detale->name}}
        @endisset
       
    </title>
    <meta charset="UTF-8">
    
    {{-- stripe   --}}
{{-- 
    <link rel="stylesheet" href="css/checkout.css" />
    <script src="https://js.stripe.com/v3/"></script>
    <script src="js/checkout.js" defer></script> --}}

    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <meta property="og:image"
          content="{{asset('storage/uploads/folder_1/subfolder_3/dc6c5daca96d5c6c13bcc489cecd3ff8.png')}}">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js"></script>
   

    <script src="https://kit.fontawesome.com/54ec5825a8.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
<!--===============================================================================================-->
    <link rel="icon" type="image/png" href="{{asset('storage/uploads/folder_1/subfolder_3/dc6c5daca96d5c6c13bcc489cecd3ff8.png')}}"/>
    
    <!--===============================================================================================-->
    <style>
        @font-face {
            src: url(fonts/sansplan.otf);
            font-family: sansfont;

        }

        * {
            font-family: sansfont;
        }
    </style>

    <link rel="stylesheet" type="text/css" href= "{{asset('css/all0699.css')}}">
    <!--===============================================================================================-->
    <script>
        var locale = document.getElementsByTagName("html")[0].getAttribute("lang");
    </script>
</head>

<body class="animsition" style="background-color: #000000">
<!-- Header -->
<header class="header1">
    <div class="header-wrapper" style="position: relative;
                                       width: 100%;">
        <div class="row  "
             style="padding-left: 10px ;
                 position: absolute;
                 top:0;
                 left:0;
                 right:0;
                 bottom:0;
                 ;align-items: center ;
                 @if($detale)
                 background-image:url({{asset('img/'.$detale->photo)}}) ;
                 @endif
                 background-size: cover  ;  border-bottom: 4px solid #ff0000 ; "
            >
           
           {{-- ايقونة الواتس  --}}
            <div class="col-4 col-md-3">
                @if($detale)
                <a target="_blank" href="https://wa.me//{{$detale->whatsapp}}" style="margin: 16px">
                    <img src="{{asset('img/whatsapp.svg')}}" alt="IMG-PRODUCT" width="50px" height="50px" class="whatsapp">
                </a>
                @endif
            </div>

           {{-- الصورة  --}}
             <div class="col-4 col-md-6 text-center">
                 {{-- <a href="chikatika.html">
                    <img width="65%" height="65%" src="{{asset('storage/uploads/folder_1/subfolder_3/dc6c5daca96d5c6c13bcc489cecd3ff8.png')}}" class=""
                      style=" object-fit: contain ;filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2)); margin: 4px">
                </a>  --}}
            </div>

            

            {{-- اللغات  --}}

            <div class="col-4 col-md-3 text-left">
                <div id="google_translate_element"></div>
            </div>

        </div>
    </div>
</header>



<div class="text-center">
    <div class="dropdown">
        <button class="dropbtn"> الاقسام <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">

            {{-- <a href="{{url($username->username. '.' .env('SESSION_DOMAIN') . '.index' )}}">الاقسام</a> --}}
            <a href="{{url('/'.$username)}}">الاقسام</a>
                        
                         @isset($cates)
                            @foreach ($cates as $cate)
                                
                           
                            {{-- <a href="{{route('show_producte',$cate->id)}}">{{$cate->name}}</a> --}}
                            <a href="{{url($username.'/producte',$cate->id)}}">{{$cate->name}}</a>

                            @endforeach
            
                        @endisset
                          
               
        </div>
    </div>
</div>

@section('script')

<script  type="text/javascript">
  function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'ar' , 
      includedLanguages: "en,tr" ,
     

      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
}


</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

@endsection