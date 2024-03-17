<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="related-product-area">
        <div class="page-header">
          <h2>{{ trans('app.related_products')}}</h2>
        </div>
        <div class="related-products-pro">
          <div class="slider-items-products">
            <div id="related-product-slider" class="product-flexslider hidden-buttons">
              <div class="slider-items slider-width-col4">
                @foreach($prod = App\ProductDetails::where('subcat_id',[$productdetails->subcat_id])->where('id','!=',$productdetails->id)->where('quantity','!=',0)->orderBy('created_at','desc')->get() as $prodet)
                <div class="product-item">
                  <div class="item-inner">
                    <div class="product-thumbnail">
                      @if(!empty($prodet->discount) && ($prodet->discount) != 0)
                      <div class="icon-sale-label sale-left" title="{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}% {{trans('app.discount')}}">{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}%</div>
                      @endif
                      <div class="v-pro"><span class="v-pro-text">@if(!empty($prodet->view)) {{$prodet->view}} @else 0 @endif</span> <i class="fa fa-eye"></i></div>
                      <div class="btn-quickview"> <a class="capi" href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}" target="_blank"><span>{{ trans('app.view')}}</span></a></div>
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
                          <div class="item-title"> <a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}">{{ str_limit($prodet->productname, $limit = 55, $end = '...') }}</a></div>
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
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
