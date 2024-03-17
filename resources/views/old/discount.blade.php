@extends('layouts.master')

@section('css')
<title>{{ ucwords(trans('app.discounts'))}}</title>
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
            <li class="home"> <a class="capi" title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong class="capi">{{ trans('app.discounts')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main container">
    <div class="row">
     <div class="about-page">
        <div class="col-xs-12 col-sm-6">
          <h1 class="capi">
            <span class="text_color">SadeStore</span>
            endirimləri
          </h1>
          <p style="text-align:justify;">
            <i class="fa fa-arrow-right"></i>
            &nbsp; SadeStore Azərbaycan öz müştərilərinə dünyada geniş yayılmış brend məhsulları
            sərfəli qiymətə gətirməklə yanaşı, müştərilərə endirimli məhsullar təklif edir.
            SadeStore-dan məhsul aldıqca müştərilər daha çox qazanma şansı əldə edir.
            <br><br>
            <i class="fa fa-arrow-right"></i>
            &nbsp; SadeStore Azərbaijan müştərilərinin rahatlığı və alış-verişə olan sevgilərini artırmaq
            üçün daha çox endirimlər gətirməyi planlayır. Daim yeniliklərdən xəbərdar olmaq üçün müştərilər
            saytımızı və ya Instagram və Facebook üzərindən SadeStore səhifəmizi izləyə bilərlər.
            <br><br>
            <i class="fa fa-arrow-right"></i>
            &nbsp; Əsas səhifədə qeyd edilən SadeStore xüsusiyyətlərinin yaxın gələcəkdə öz müştərilərinə
            xidmətə buraxılacaq, məsələn: "iki al bir ödə", "pulsuz çatdırılma" və "SadeStore xalları"
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
