<div class="best-sale-product">
  <div class="sidebar-bar-title"><h3>{{ trans('app.products_of_week')}}</h3></div>
  <div class="block-content">
    <div class="slider-items-products">
      <div id="best-sale-slider" class="product-flexslider hidden-buttons">
        <div class="slider-items slider-width-col4">
          <div class="product-item">
            @foreach($prods = App\ProductDetails::inRandomOrder()->take(3)->get() as $prod)
            <div class="best-sale-item">
              <div class="products-block-left"> <a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}" class="product-image" target="_blank">
                  @if(App\Images::where('pro_id',$prod->id)->count() != 0)
                      @php($img = App\Images::where('pro_id',$prod->id)->first())
                      <img src="//img.sade.store/proph/small/{{$img->image}}" alt="{{$prod->productname}}"/>
                  @else
                    <img  src="//img.sade.store/defaultimage.jpg" alt="{{$prod->productname}}"/>
                  @endif
              </a></div>
              <div class="products-block-right">
                <p class="product-name"> <a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}" target="_blank">{{ str_limit($prod->productname, $limit = 80, $end = '...') }}</a></p>
                <span class="price">
                  @if(empty($prod->discount))
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                    {{number_format(($prod->price / Session::get('difference')),2)}}
                    {{Session::get('currency')}}
                    @else
                    {{number_format($prod->price,2)}} AZN
                    @endif
                  @else
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                      <p>{{number_format((($prod->price-$prod->discount) / Session::get('difference')),2)}} {{Session::get('currency')}}</p>
                      <span class="old-price">{{number_format(($prod->price / Session::get('difference')),2)}} {{Session::get('currency')}}</span>
                    @else
                      <p>{{number_format(($prod->price - $prod->discount),2)}} AZN</p>
                      <span class="old-price">{{number_format($prod->price,2)}} AZN</span>
                    @endif
                  @endif
                </span>
                <div class="rating">
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
                 </div>
              </div>
            </div>
            @endforeach
          </div>
          <div class="product-item">
            @foreach($producttt = App\ProductDetails::inRandomOrder()->take(3)->get() as $prod2)
            <div class="best-sale-item">
              <div class="products-block-left"> <a href="/product-details/{{$prod2->slug}}" class="product-image" target="_blank" title="{{$prod2->productname}}">
                @if($prod2->photos != 'defaultimage.jpg')
                  @if(!empty($prod2->photos))
                    <img src="//img.sade.store/proph/small/{{$prod2->photos}}" alt="{{$prod->productname}}"/>
                  @elseif(!empty($prod2->photos2))
                   <img src="//img.sade.store/proph/small/{{$prod2->photos2}}"  alt="{{$prod->productname}}"/>
                  @elseif(!empty($prod2->photos3))
                    <img  src="//img.sade.store/proph/small/{{$prod2->photos3}}" alt="{{$prod->productname}}"/>
                  @elseif(!empty($prod2->photos4))
                   <img  src="//img.sade.store/proph/small/{{$prod2->photos4}}" alt="{{$prod->productname}}"/>
                  @endif
                @else
                  <img src="//img.sade.store/defaultimage.jpg" alt="{{$prod->productname}}"/>
                @endif
              </a></div>
              <div class="products-block-right">
                <p class="product-name"> <a href="/product-details/{{$prod2->slug}}" title="{{$prod2->productname}}" target="_blank">{{ str_limit($prod2->productname, $limit = 80, $end = '...') }}</a> </p>
                <span class="price">
                  @if(empty($prod2->discount))
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                    {{number_format(($prod2->price / Session::get('difference')),2)}}
                    {{Session::get('currency')}}
                    @else
                    {{number_format($prod2->price,2)}} AZN
                    @endif
                  @else
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                      <p>{{number_format((($prod2->price-$prod->discount) / Session::get('difference')),2)}} {{Session::get('currency')}}</p>
                      <span class="old-price">{{number_format(($prod2->price / Session::get('difference')),2)}} {{Session::get('currency')}}</span>
                    @else
                      <p>{{number_format(($prod2->price - $prod2->discount),2)}} AZN</p>
                      <span class="old-price">{{number_format($prod2->price,2)}} AZN</span>
                    @endif
                  @endif
                </span>
                <div class="rating">
                  @php($star_1 = App\Newscomment::where('news_id',0)->where('product_id',$prod2->id)->where('verify',1)->get())
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
