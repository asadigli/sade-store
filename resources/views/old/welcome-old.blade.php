@extends('layouts.master')
@section('css')
<title>Sade Store</title>
<meta name="author" content="Sade Store">
<meta name="description" content="Yerli bazarda geniş məhsul çeşidləri təklif edən onlayn satış xidməti">
<meta name="keywords" content="Sade Store: avadanlıqlar, kameralar, komputer hissələri, müasir texnologiyar">
<meta property=”og:title” content=”Əsas səhifə: Sade Store” />
<meta property=”og:description” content=”Yerli bazarda geniş məhsul çeşidləri təklif edən onlayn satış xidməti” />
<meta property=”og:image” content=”//img.sade.store/logo.png” />
<meta property=”og:url” content=”//sade.store” />
@if(3==4)
<meta name=”twitter:title” content=”TITLE OF POST OR PAGE”>
<meta name=”twitter:description” content=”DESCRIPTION OF PAGE CONTENT”>
<meta name=”twitter:image” content=”LINK TO IMAGE”>
<meta name=”twitter:site” content=”@USERNAME”>
<meta name=”twitter:creator” content=”@USERNAME”>
@endif
@endsection
@section('body')
  <div class="main-slider-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          @include('layouts.slide')
          @include('layouts.discounts')
        </div>
      </div>
    </div>
  </div>
  <div class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
        <div class="col-main col-md-9 col-sm-8 col-xs-12 col-sm-push-4 col-md-push-3">
          @include('layouts.featuredproducts')
          @foreach($ran as $sc)
          <div class="home-tab">
            <div class="tab-info">
              <h3 class="new-product-title pull-left">{{ trans('app.product_category')}}</h3>
              @if(1 == 2)<span class="pull-right"><i><a class="gray" href="/subcategory/{{$sc->slug}}">{{ str_limit($sc->name, $limit = 10, $end = '...') }}</a></i></span> @endif
              <ul class="nav home-nav-tabs home-product-tabs"></ul>
            </div>
            <div id="productTabContent" class="tab-content">
              <div class="tab-pane active in" id="all">
                <div class="slider-items-products">
                  <div id="all-slider" class="product-flexslider hidden-buttons">
                    <div class="slider-items slider-width-col4">
                      @foreach($prods = App\ProductDetails::where('subcat_id',$sc->id)->inRandomOrder()->take(9)->get() as $prod)
                      <div class="product-item">
                        <div class="item-inner">
                          <div class="product-thumbnail">
                            @if(!empty($prod->discount) && ($prod->discount) != 0)
                            <div class="icon-sale-label sale-left" title="{{round((($prod->price)-(($prod->price)-($prod->discount)))*100/($prod->price))}}% {{trans('app.discount')}}">{{round((($prod->price)-(($prod->price)-($prod->discount)))*100/($prod->price))}}%</div>
                            @endif
                            <div class="v-pro"><span class="v-pro-text">@if(!empty($prod->view)) {{$prod->view}} @else 0 @endif<i class="fa fa-eye"></i></span> </div>
                            <div class="btn-quickview"> <a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}" target="_blank"><span>{{ trans('app.view')}}</span></a></div>
                            <a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}" class="product-item-photo">
                              @if(App\Images::where('pro_id',$prod->id)->count() != 0)
                                @php($img = App\Images::where('pro_id',$prod->id)->first())
                                <img class="product-image-photo" src="//img.sade.store/proph/small/{{$img->image}}" alt="{{$prod->productname}}"/>
                              @else
                                <img class="product-image-photo" src="//img.sade.store/defaultimage.jpg" alt="{{$prod->productname}}"/>
                              @endif
                             </a>
                          </div>
                          <div class="pro-box-info">
                            <div class="item-info">
                              <div class="info-inner">
                                <div class="item-title"> <a  href="/product-details/{{$prod->slug}}">
                                  {{ str_limit($prod->productname, $limit = 25, $end = '...') }}
                                 </a> </div>
                                <div class="item-content">
                                  @php($star_1 = App\Newscomment::where('news_id',0)->where('product_id',$prod->id)->where('verify',1)->get())
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
                                      @if(empty($prod->discount))
                                        @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                                        {{number_format(($prod->price / Session::get('difference')),2)}}
                                        {{Session::get('currency')}}
                                        @else
                                        {{number_format($prod->price,2)}} AZN @endif
                                      @else
                                        @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                                        {{number_format((($prod->price - $prod->discount) / Session::get('difference')),2)}}
                                        {{Session::get('currency')}}
                                        @else
                                        {{number_format(($prod->price - $prod->discount),2)}} AZN @endif
                                         <span class="old-price">
                                           @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                                           {{number_format((($prod->price) / Session::get('difference')),2)}}
                                           {{Session::get('currency')}}
                                           @else
                                           {{number_format($prod->price,2)}} AZN @endif
                                         </span>
                                      @endif
                                    </span> </span> </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      @endforeach
                      @if(2 == 6)
                      @foreach($ran as $r)
                      <div class="product-item">
                        <div class="item-inner">
                          <div class="product-thumbnail">
                            <div class="btn-quickview"> <a href="/subcategory/{{$r->slug}}" title="{{trans('app.see_more_from_this_category')}}" ><span>{{ trans('app.more')}}</span></a></div>
                            <a href="/subcategory/{{$r->slug}}" title="{{trans('app.see_more_from_this_category')}}" class="product-item-photo subcat-more">
                                <img class="product-image-photo" src="//img.sade.store/defaultimage.jpg" alt="{{$r->name}}"/>
                             </a>
                          </div>
                          <div class="pro-box-info"><div class="item-info"><div class="info-inner"><div class="item-title"></div></div></div></div>
                        </div>
                      </div>
                      @endforeach
                      @endif
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          @endforeach
          <div class="jtv-banner-block">
            <div class="jtv-subbanner1"><img class="img-respo" alt="Sade Store" src="//img.sade.store/images/b1.jpg">
              <div class="text-block wow animated fadeInLeft animated">
                <div class="text1 capi"><a class="capi">{{ trans('app.electronics')}} </a></div>
                <div class="text2 capi"><a> {{ trans('app.latest_choices')}} </a></div>
              </div>
            </div>
            <div class="jtv-subbanner2"><img class="img-respo" alt="Sade Store" src="//img.sade.store/images/b2.jpg">
              <div class="text-block wow animated fadeInLeft animated">
                <div class="text1 capi"><a class="capi">{{ trans('app.things_for_gift')}} </a></div>
                <div class="text2 capi"><a>{{ trans('app.latest_choices')}}</a></div>
              </div>
            </div>
          </div>
          @include('layouts.news')
        </div>
        <aside class="sidebar col-md-3 col-sm-4 col-xs-12 col-sm-pull-8 col-md-pull-9">
        @include('layouts.latestproducts')
        @if($pr = App\Poster::all()->count() != 0)
          @include('layouts.popularproducts')
        @endif
        @if($vp = App\VipComments::all()->count() != 0)
          @include('layouts.buyersthoughts')
        @endif
        @include('layouts.populartags')
        </aside>
      </div>
    </div>
  </div>
@endsection
@section('js')
<script type="text/javascript">
$(window).load(function() {
  // $(".se-pre-con").fadeOut("slow");;
});
</script>
@endsection
