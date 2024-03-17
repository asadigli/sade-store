@extends('layouts.master')

@section('css')
<title>{{ ucwords(trans('app.termsofdelivary'))}}</title>
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
            <li><strong class="capi">{{ trans('app.aboutus')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main container">
   <div class="row">
       <div class="about-page">
          <div class="col-xs-12 col-sm-6">
            <h1 class="capi"> <span class="text_color">Sade Store</span> {{ trans('app.termsofdelivary')}}</h1>
            <p>SadeStore çatdırılma şərtləri barəsində məlumat ən qısa zamanda veriləcəkdir, əlaqədə qalın.</p>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="single-img-add sidebar-add-slider">
              <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div class="item active"> <img src="images/about_us_slide1.jpg" alt="slide1"> </div>
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
