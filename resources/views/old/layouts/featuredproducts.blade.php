<div class="featured-products-slider">
  <h3 class="products_title">{{ trans('app.featured_products')}}</h3>
  <div class="slider-items-products">
    <div id="featured-products-slider" class="product-flexslider hidden-buttons">
      <div class="slider-items slider-width-col4">
        @foreach($productdetails = App\ProductDetails::orderBy('created_at','desc')->where('quantity','!=',0)->take(16)->get() as $prodet)
        <div class="product-item">
          <div class="item-inner">
            <div class="product-thumbnail">
              @if(!empty($prodet->discount) && ($prodet->discount) != 0)
              <div class="icon-sale-label sale-left" title="{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}% {{trans('app.discount')}}">{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}%</div>
              @endif
              <div class="v-pro"><span class="v-pro-text">@if(!empty($prodet->view)) {{$prodet->view}} @else 0 @endif<i class="fa fa-eye"></i> </span> </div>
              <div class="btn-quickview"> <a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}" target="_blank"><span>{{ trans('app.view')}}</span></a></div>
              <a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}" class="product-item-photo">
                @php($img = App\Images::where('pro_id',$prodet->id)->first())
                @if(!empty($img))
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
                    {{ str_limit($prodet->productname, $limit = 25, $end = '...') }}</a> </div>
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
                           {{$prodet->price}} AZN
                           @endif
            						@else
                            @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                            {{number_format(((($prodet->price)-($prodet->discount)) / Session::get('difference')),2)}}
                            {{Session::get('currency')}}
                            @else
                            {{number_format(($prodet->price - $prodet->discount),2)}} AZN @endif
                           <br>
                           <span class="old-price">
                             @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                             {{number_format(($prodet->price / Session::get('difference')),2)}}
                             {{Session::get('currency')}}
                             @else
                             {{number_format($prodet->price,2)}} AZN @endif
                           </span>
            						@endif
                      </span>
                    </span>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="box-hover">
                <div class="product-item-actions">
                  <div class="pro-actions">
                    @if (2==4)
                    <form action="addtowishlist" method="post">
                        {{csrf_field()}}
                        <input type="hidden" name="user_id" value="{{Auth::user()->id}}">
                        <input type="hidden" name="product_id" value="{{$prodet->id}}">
                        <input type="hidden" name="product_name" value="{{$prodet->productname}}">
                        <input type="hidden" name="product_features" value="{!!$prodet->features!!}">
                        <input type="hidden" name="product_price" value="{{$prodet->price}}">
                        <input type="hidden" name="product_quantity" value="{{$prodet->quantity}}">
                        <input type="hidden" name="product_discount" value="{{$prodet->discount}}">
                        <input type="hidden" name="product_currency" value="{{$prodet->currency}}">
                        <!-- <button type="submit" name="submit" class="action add-to-cart" title="Add to Cart">
                           <span>Add to Cart</span>
                        </button> -->
                      </form>
                      @endif
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
