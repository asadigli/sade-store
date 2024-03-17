@extends('layouts.master')
@section('css')
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach">
<meta name="keywords" content="@foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<title>{{ $page->shortname}}: Sade Store</title>
<meta property=”og:title” content=”{{ $page->shortname}}: Sade Store” />
<meta property=”og:description” content=”@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach” />
<meta property=”og:image” content=”//img.sade.store/pg/{{$page->image}}” />
<meta property=”og:url” content=”//sade.store/store/{{$page->slug}}” />
@endsection
@section('body')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"><a title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>{{ $page->title}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main container">
    <div class="row">
     <div class="about-page">
        <div class="col-xs-12 col-sm-6">
          <h1 class="text_color">
            {{$page->title}}
          </h1>
          <p>
            {!! $page->details !!}
          </p>
          <br>
          @php($tabs = App\Tab::where('page_id',$page->id)->get())
          @if(!empty($tabs))
          <div class="panel-group accordion-faq" id="faq-accordion">
            <div class="panel">
              @foreach($tabs as $tb)
              <div class="panel-heading"> <a data-toggle="collapse" data-parent="#faq-accordion" href="#question-{{$tb->id}}" class="collapsed"> <span class="arrow-down"><i class="fa fa-angle-down"></i></span> <span class="arrow-up"><i class="fa fa-angle-up"></i></span></span> {{$tb->question}}</a> </div>
              <div id="question-{{$tb->id}}" class="panel-collapse collapse">
                <div class="panel-body"> {!! $tb->answer !!}</div>
              </div>
              @endforeach
            </div>
          </div>
          @endif
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="single-img-add sidebar-add-slider">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="item active capi"> <img src="//img.sade.store/pg/{{$page->image}}" alt="{{$page->title}}"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
@section('js')
@endsection
