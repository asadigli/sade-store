@extends('layouts.master')
@section('css')
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach">
<meta name="keywords" content="Sade Store: @foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<title>{{$cat->name}}: Sade Store</title>
<meta property=”og:title” content=”{{$cat->name}}: Sade Store” />
<meta property=”og:description” content=”@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach” />
@if($cat->poster != 'default.jpg')
<meta property=”og:image” content=”//img.sade.store/ph/ct/{{$cat->poster}}” />
@else
<meta property=”og:image” content=”//img.sade.store/catposter.jpg” />
@endif
<meta property=”og:url” content=”//sade.store/category/{{$cat->slug}}” />
@endsection
@section('body')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul><li class="home"> <a title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><a title="{{ trans('app.go_back')}}"><b>{{$cat->name}}</b></a></li></ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main-container col2-left-layout">
    <div class="container">
      <div class="category-description"> @if($cat->poster != 'default.jpg') <a href="/" title="{{$cat->name}}"><img src="//img.sade.store/ph/ct/{{$cat->poster}}" alt="{{$cat->name}}"></a> @else <a href="/" title="Sade Store"><img src="//img.sade.store/catposter.jpg" alt="Sade Store"></a> @endif </div>
      <div class="row">
        <div class="col-main col-sm-9 col-xs-12 col-sm-push-3">
          <div class="shop-inner">
            <div class="page-title"><h2>{{$cat->name}}</h2></div>
            <div class="toolbar">
              @if(2==2)
              <div class="sorter">
                <div class="short-by">
                  <label>{{__('app.Sort_by')}}:</label>
                  <select onchange="if (this.value) window.location.href=this.value">
                    <option @if($sr == 0) selected @endif value="/category/{{$cat->slug}}/0">{{__('app.Newest')}}</option>
                    <option @if($sr == 1) selected @endif value="/category/{{$cat->slug}}/1">A-Z</option>
                    <option @if($sr == 2) selected @endif value="/category/{{$cat->slug}}/2">Z-A</option>
                    <option @if($sr == 3) selected @endif value="/category/{{$cat->slug}}/3">{{__('app.High_to_low')}}</option>
                    <option @if($sr == 4) selected @endif value="/category/{{$cat->slug}}/4">{{__('app.Low_to_high')}}</option>
                  </select>
                </div>
              </div>
              @endif
            </div>
            <div class="product-grid-area">
              <ul class="products-grid">
                  @foreach($productdetails as $prodet)
                  <li class="item col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div class="product-item">
                    <div class="item-inner">
                      <div class="product-thumbnail">
                        @if(!empty($prodet->discount) && ($prodet->discount) != 0)
                        <div class="icon-sale-label sale-left" title="{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}% {{trans('app.discount')}}">{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}%</div>
                        @endif
                        <div class="v-pro"><span class="v-pro-text">@if(!empty($prodet->view)) {{$prodet->view}} @else 0 @endif<i class="fa fa-eye"></i></span> </div>
                        <div class="btn-quickview"><a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}" target="_blank"><span>{{ trans('app.view')}}</span></a></div>
                        <a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}" class="product-item-photo">
                           @if(App\Images::where('pro_id',$prodet->id)->count() != 0)
                           @php($img = App\Images::where('pro_id',$prodet->id)->first())
                              <img class="product-image-photo" src="//img.sade.store/proph/small/{{$img->image}}" alt="{{$prodet->productname}}"/>
                           @else
                            <img class="product-image-photo" src="//img.sade.store/defaultimage.jpg" alt="{{$prodet->productname}}"/>
                           @endif
                        </a>
                        </div>
                      <div class="pro-box-info">
                        <div class="item-info">
                          <div class="info-inner">
                            <div class="item-title"> <a title="{{$prodet->productname}}" href="/product-details/{{$prodet->slug}}">
                              {{ str_limit($prodet->productname, $limit = 25, $end = '...') }}
                              </a> </div>
                            <div class="item-content">
                              @php($star_1 = App\Newscomment::where('news_id',0)->where('product_id',$prodet->id)->where('verify',1)->get())
                              @php($total = 0)
                              @foreach($star_1 as $st)
                               @php($total += $st->rating)
                              @endforeach
                              @if(count($star_1) != 0)
                                @if(substr($total/(count($star_1)),0,3) <= 1)
                                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>
                                @elseif(substr($total/(count($star_1)),0,3) > 1 && substr($total/(count($star_1)),0,3) <= 2)
                                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>
                                @elseif(substr($total/(count($star_1)),0,3) > 2 && substr($total/(count($star_1)),0,3) <= 3)
                                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>
                                @elseif(substr($total/(count($star_1)),0,3) > 3 && substr($total/(count($star_1)),0,3) <= 4)
                                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></div>
                                @elseif(substr($total/(count($star_1)),0,3) > 4 && substr($total/(count($star_1)),0,3) <= 5)
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                @endif
                                @else
                                <div class="rating"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>
                              @endif
                              <div class="item-price">
                                <div class="price-box"> <span class="regular-price"> <span class="price">
                                  @if(empty($prodet->discount))
                                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                                    {{number_format(($prodet->price / Session::get('difference')),2)}}
                                    {{Session::get('currency')}}
                                    @else
                                    {{number_format($prodet->price,2)}} AZN
                                    @endif
                      						@else
                                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                                    {{number_format((($prodet->price - $prodet->discount) / Session::get('difference')),2)}}
                                    {{Session::get('currency')}}
                                    <br>
                                    <span class="old-price">{{number_format(($prodet->price / Session::get('difference')),2)}} {{Session::get('currency')}}</span>
                                    @else
                                    {{number_format(($prodet->price - $prodet->discount),2)}} AZN
                                    <br>
                                    <span class="old-price">{{number_format($prodet->price,2)}} AZN</span>
                                    @endif
                      						@endif
                                </span> </span> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                @endforeach
              </ul>
            </div>
            <div class="pagination-area ">
              {{$productdetails->render()}}
            </div>
        </div>
      </div>
      <aside class="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
        @include('layouts.filternavbar')
        @include('layouts.populartags')
        @include('layouts.popularproducts')
      </aside>
    </div>
  </div>
</div>
@endsection
@section('js')
<script type="text/javascript">
$(function(){
    // bind change event to select
    $('#dynamic_select').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
  });
</script>
@endsection
