@extends('layouts.master')

@section('css')
<title>{{ ucwords(trans('app.aboutus'))}}</title>
<link href='//fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome.css')}}" media="all">
<link rel="stylesheet" type="text/css" href="{{ asset('css/simple-line-icons.css')}}" media="all">
<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.theme.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/owl.transitions.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css')}}" media="all">
<link rel="stylesheet" type="text/css" href="{{ asset('css/flexslider.css')}}" >
<link rel="stylesheet" type="text/css" href="{{ asset('css/jquery-ui.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/meanmenu.min.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/nivo-slider.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('css/style.css')}}" media="all">
@endsection

@section('body')
<div id="page">
  @include('layouts.header')
  @include('layouts.menuarea')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>{{ trans('app.about_sadestore')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main container">
 <div class="row">
     <div class="about-page">
        <div class="col-xs-12 col-sm-6">
          <h1 class="text_color">{{ trans('app.welcome_to_sadestore')}}
          </h1>
          <p style="text-align:justify;">
            <i class="fa fa-arrow-right"></i> &nbsp; SadeStore Azərbaycan sürətlə böyüyən yeni yaradılmış online satış xidmətidir.
            SadeStore 2017-ci ildən etibarən yaradılmış bir brenddir.
            <br><br>
            <i class="fa fa-arrow-right"></i> &nbsp; SadeStore olaraq, ən başlıca məqsədimiz fərqli brendlərdən ibarət olan məhsulları əlverişli
            qiymətlərlə öz alıcılarına çatdırmaqdır.
            <br><br>
            <i class="fa fa-arrow-right"></i> &nbsp; SadeStore satış xidmətində tanınmış brendlərdən də məhsullar görmək mümkündür.
            Məsələn: Xiaomi, Godox, Viltrox, Triopo, Canon və Nikon.
            <br><br>
            <i class="fa fa-arrow-right"></i> &nbsp; Satış xidmətimiz yalnız Bakı şəhəri ilə limitli deyil, həmçinin digər bölgələrə
            də xidmətimiz var. Məhsulllarımız ödəniş edilərək alındıqdan sonra AzərPoçt vasitəsi
            ilə 2-4 iş günü ərzində müştəri çatdırılır.
            <br><br>
            <i class="fa fa-arrow-right"></i> &nbsp; SadeStore satış xidməti həftənin 7 günü səhər saat 10:00-dan etibarən axşam saat 21:00-dək
            öz müştərilərinin xidmətindədir.
          </p>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="single-img-add sidebar-add-slider">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="item active"> <img src="images/about_us_slide1.jpg" alt="slide1"> </div>
                <div class="item"> <img src="images/about_us_slide2.jpg" alt="slide2"> </div>
                <div class="item"> <img src="images/about_us_slide3.jpg" alt="slide3"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  @include('layouts.partners')
  @include('layouts.footerdiscounts')
  @include('layouts.footer')
  <a href="#" class="totop"> </a>
</div>
@endsection

@section('js')
<script type="text/javascript" src="{{ asset('js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/bootstrap.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/jquery.meanmenu.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/owl.carousel.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/jquery-ui.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/countdown.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/wow.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/cloud-zoom.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/main.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/jquery.nivo.slider.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/jquery.flexslider.js')}}"></script>
@endsection
