@extends('layouts.master')

@section('css')
<title>{{ ucwords( trans('app.notfound'))}}: Sade Store</title>
@endsection
@section('body'))
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>404 Error </strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="error-page">
    <div class="container">
      <div class="error_pagenotfound">
        <strong class="error-resp">4<span id="animate-arrow">0</span>4 </strong> <br />
        <b class="capi error-resp-nf">{{ trans('app.not_found')}}</b>
        <p>{{ trans('app.go_back_to_home')}}</p>
        <br/>
        <a href="/" class="button-back"><i class="fa fa-arrow-circle-left fa-lg"></i> {{ trans('app.goback')}}</a> </div>
    </div>
  </div>
@endsection
@section('js')
@endsection
