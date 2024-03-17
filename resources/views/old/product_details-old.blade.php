@extends('layouts.master')
@section('css')
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach - ID {{$productdetails->main_id}}">
<meta name="keywords" content="Sade Store - ID {{$productdetails->main_id}}: @foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<title>{{$productdetails->productname}}: Sade Store</title>
<meta property=”og:title” content=”{{$productdetails->productname}}: Sade Store” />
<meta property=”og:description” content=”@if(empty($seods)) {{$productdetails->productname}} @else @foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach @endif” />
@php($img = App\Images::where('pro_id',$productdetails->id)->first())
<meta property=”og:image” content=”//img.sade.store/proph/small/{{$img->image}}” />
<meta property=”og:url” content=”//sade.store/product-details/{{$productdetails->slug}}” />
@endsection
@section('body')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul><li class="home"> <a title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><a href="/category/{{$category->slug}}" title="{{$category->name}}">{{$category->name}}</a><span>&raquo;</span></li><li><a href="/subcategory/{{$subcat->slug}}" title="{{$subcat->name}}">{{$subcat->name}}</a><span>&raquo;</span></li><li><strong>{{$productdetails->productname}}</strong></li></ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main-container col1-layout">
    <div class="container">
      <div class="row">
        <div class="col-main">
          <div class="product-view-area">
            <div class="product-big-image col-xs-12 col-sm-5 col-lg-5 col-md-5">
              <div class="large-image">
                @if(!empty($img))
                  <a href="//img.sade.store/proph/{{$img->image}}" title="{{$productdetails->productname}}" class="cloud-zoom" id="zoom1" rel="useWrapper: false, adjustY:0, adjustX:20">
                    <img class="zoom-img" src="//img.sade.store/proph/{{$img->image}}" alt="{{$productdetails->productname}}"></a>
                @else
                    <img src="//img.sade.store/defaultimage.jpg" alt="{{$productdetails->productname}}">
                @endif
              </div>
              <div class="flexslider flexslider-thumb">
                @if(App\Images::where('pro_id',$productdetails->id)->count() != 0)
                <ul class="previews-list slides">
                  @foreach($imgs = App\Images::where('pro_id',$productdetails->id)->get() as $img)
                    <li><a href='//img.sade.store/proph/{{$img->image}}' title="{{$productdetails->productname}}" class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: '//img.sade.store/proph/{{$img->image}}' ">
                        <img src="//img.sade.store/proph/small/{{$img->image}}" alt="{{$productdetails->productname}}"/></a></li>
                  @endforeach
                  @if($imgs = App\Images::where('pro_id',$productdetails->id)->count() == 2)
                  <li></li>
                  @elseif($imgs = App\Images::where('pro_id',$productdetails->id)->count() == 1)
                  <li></li><li></li>
                  @else
                  @endif
                </ul>
                @endif
              </div>
            </div>
            <div class="col-xs-12 col-sm-7 col-lg-7 col-md-7 product-details-area">
              <div class="product-name"><h1>{{$productdetails->productname}}</h1></div>
              <div class="price-box"><span class="orange"> <b>ID Nömrəsi:</b> {{ $productdetails->main_id}} </span></div>
              <div class="price-box">
              @if(empty($productdetails->discount))
									<h2><b class="red">
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                    {{number_format(($productdetails->price / Session::get('difference')),2)}}
                    {{Session::get('currency')}}
                    @else
                    {{$productdetails->price}} AZN
                    @endif
                  </b></h2>
								@else
                  @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                  <p class="special-price"> <span class="price-label">{{ trans('app.special_price')}}</span>
                    <span class="price"><span class="red">{{number_format((($productdetails->price - $productdetails->discount) / Session::get('difference')),2)}} {{Session::get('currency')}}</span></span></p>
										<small class="orange"><u><i class="capi red disc-prod">{{round((($productdetails->price)-(($productdetails->price)-($productdetails->discount)))*100/($productdetails->price))}}% {{ trans('app.discount')}}</small></i></u><p class="old-price"> <span class="price-label">{{trans('app.regular_price')}}:</span> <span class="price"> {{number_format(($productdetails->price / Session::get('difference')),2)}} {{Session::get('currency')}} </span> </p>
                  @else
                  <p class="special-price"> <span class="price-label">{{ trans('app.special_price')}}</span>
                    <span class="price"><span class="red">{{($productdetails->price)-($productdetails->discount)}} AZN</span></span></p>
										<small class="orange"><u><i class="capi red disc-prod">{{round((($productdetails->price)-(($productdetails->price)-($productdetails->discount)))*100/($productdetails->price))}}% {{ trans('app.discount')}}</small></i></u><p class="old-price"> <span class="price-label">{{trans('app.regular_price')}}:</span> <span class="price"> {{$productdetails->price}} AZN </span> </p>
                  @endif
								@endif
              </div>
              <div class="ratings">
                 @php($star_1 = App\Newscomment::where('news_id',0)->where('product_id',$productdetails->id)->where('verify',1)->get())
                 @php($total = 0)
                 @foreach($star_1 as $st)
                  @php($total += $st->rating)
                 @endforeach
                 @if(count($star_1) != 0)
                   <div class="rating"><i class="fa fa-star orange"></i> <b class="gray">{{substr($total/(count($star_1)),0,3)}}</b> - <a href="#" class="capi"> {{ trans_choice('app.reviewer', count($star_1))}}</a> <span class="separator"></div>
                 @else
                   <div class="rating">0 <i class="fa fa-star orange" title="{{__('app.no_review_yet')}}"></i> <span class="separator"></div>
                 @endif
                @if(($productdetails->quantity)==0)
  							<p class="availability out-of-stock pull-right" title="{{ trans('app.notavaliable') }}">{{ trans('app.availability')}}  <span>{{ trans('app.notavaliable') }}</span></p>
  							@else
  							<p class="availability in-stock pull-right" title="{{ trans('app.exist_in_stock') }}">{{ trans('app.availability')}}  <span>{{ trans('app.exist_in_stock') }}</span></p>
  							@endif
              </div>
              <div class="short-description"><h2>{{ trans('app.details')}}</h2><p>{!! str_limit(strip_tags($productdetails->description), $limit = 200, $end = '...') !!} @if(strlen($productdetails->description) > 200) <a href="#morefeat" class="more-bold">{{trans('app.more')}}</a> @endif </p></div>
          </div>
        </div>
        <div class="product-overview-tab">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="product-tab-inner">
                  <ul id="product-detail-tab" class="nav nav-tabs product-tabs"><li class="active"> <a href="#description" data-toggle="tab"> {{ trans('app.description')}} </a> </li><li> <a href="#comment_tab" data-toggle="tab">{{ trans('app.comments')}}</a> </li></ul>
                  <div id="productTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="description">
                      <div class="std" id="morefeat">
                        <table class="table table-bordered"><tbody>
     	 								 				<tr class="techSpecRow"><th colspan="2" class="capi">{{ trans('app.product_details')}}</th></tr>
                                @if(!empty($productdetails->brand))
                                  <tr class="techSpecRow"><td class="techSpecTD1 capi">{{ trans('app.brand')}}: </td><td class="techSpecTD2">{{$productdetails->brand}}</td></tr>
                                @endif
                                @if(!empty($productdetails->releasedate))
                                  <tr class="techSpecRow"><td class="techSpecTD1 capi">{{ trans('app.released_on')}}:</td><td class="techSpecTD2">{{$productdetails->releasedate}}</td></tr>
                                @endif
                                @if(!empty($productdetails->condition))
                                  <tr class="techSpecRow"><td class="techSpecTD1 capi">{{ trans('app.condition')}}:</td><td class="techSpecTD2">
                                  @if($productdetails->condition == 1)
                                  {{ trans('app.new')}}
                                  @else
                                  {{ trans('app.used' )}}
                                  @endif
         	 												</td></tr>
                                @endif
                                @if(!empty($productdetails->dimension))
         	 								 				<tr class="techSpecRow"><td class="techSpecTD1 capi">{{trans('app.dimension')}}:</td><td class="techSpecTD2">{{$productdetails->dimension}}</td></tr>
                                @endif
                                @if(!empty($productdetails->features) && $productdetails->features != '---')
         	 								 				<tr class="techSpecRow"><td class="techSpecTD1 capi">{{ trans('app.features')}}:</td><td class="techSpecTD2">{!! $productdetails->features !!}</td></tr>
                                @endif
                                @if(!empty($productdetails->sadestore_points))
         	 								 				<tr class="techSpecRow"><td class="techSpecTD1 capi">{{ trans('app.sadestore_points')}}:</td><td class="techSpecTD2">
         	 													   @if($productdetails->sadestore_points == '0')
                                       Yoxdur
                                       @else
                                       {{ $productdetails->sadestore_points}}
                                       @endif
         	 												</td></tr>
                                @endif
                                @foreach($prodtab = App\Prodtab::where('product_id',$productdetails->id)->get() as $pt)
                                <tr class="techSpecRow"><td class="techSpecTD1 capi">{{$pt->title}}:</td><td class="techSpecTD2">{{$pt->detail}}</td></tr>
                                @endforeach
     	 								 				</tbody>
     	  							  </table>
                        <div class="pro-more-sec">
                          <strong class="font-23">{{$productdetails->descriptionname}}</strong><p> {!! $productdetails->description !!}</p>
                          @if(!empty($productdetails->descriptionname2))
                          <hr><strong class="font-23">{{$productdetails->descriptionname2}}</strong><p> {!! $productdetails->description2 !!}</p>
                          @endif
                        </div>
                      </div>
                    </div>
                    @include('layouts.productcommenting')
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@include('layouts.relatedproducts')
@endsection
@section('js')
@if(2==3)
<script type="text/javascript">
  $(".previews-list").ready(function(){
    $("#loading-image").fadeOut("slow");
  });
</script>
@endif
@endsection
