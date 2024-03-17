<div class="col-md-4 col-lg-3">
  <div class="sidebar left">
    <!-- <div class="widget widget-search">
      <form action="#" method="get" accept-charset="utf-8">
        <input type="text" name="widget-search" placeholder="Search">
      </form>
    </div> -->
    <div class="widget widget-products">
      <div class="widget-title"><h3>{{__('app.latestproduct')}}</h3></div>
      <ul class="product-list">
        @foreach(App\ProductDetails::orderBy('created_at','desc')->take(3)->get() as $pr)
        <li>
          <div class="img-product">
            @if(!empty($img = App\Images::where('pro_id',$pr->id)->first()))
                <a href="/product-details/{{$pr->slug}}" title="{{$pr->productname}}"><img class="side-pro-image" data-src="/uploads/proph/small/{{App\Images::where('pro_id',$pr->id)->first()->image}}" alt="{{$pr->productname}}"/></a>
            @else
              <img class="side-pro-image" data-src="/uploads/defaultimage.jpg" alt="{{$pr->productname}}"/>
            @endif
          </div>
          <div class="info-product">
            <div class="name">
              <a href="/product-details/{{$pr->slug}}" title="{{$pr->productname}}">{{$pr->productname}}</a>
            </div>
            <div class="queue">
              @for($k = 0; $k < 5; $k++)
              <i @if(number_format(DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pr->id)->avg('rating'),1) > $k) class="fa fa-star" @else class="fa fa-star-o" @endif aria-hidden="true"></i>
              @endfor
            </div>
            <div class="price">
              <span class="sale">
                @if(empty($pr->discount))
                   @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                   {{number_format(($pr->price / Session::get('difference')),2)}}
                   {{Session::get('currency')}}
                   @else
                   {{$pr->price}} AZN
                   @endif
                @else
                    @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                    {{number_format(((($pr->price)-($pr->discount)) / Session::get('difference')),2)}}
                    {{Session::get('currency')}}
                    @else
                    {{number_format(($pr->price - $pr->discount),2)}} AZN
                    @endif
                  </span>
              <span class="regular">
                @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                {{number_format(($pr->price / Session::get('difference')),2)}}
                {{Session::get('currency')}}
                @else
                {{number_format($pr->price,2)}} AZN
                @endif
              </span>
              @endif
            </div>
          </div>
        </li>
        @endforeach
      </ul>
    </div>
    <div class="widget widget-tags">
      <div class="widget-title">
        <h3>{{__('app.Most_searched')}}</h3>
      </div>
      <ul class="tag-list">
        <form id="s-val" action="/search-result/search={request}" method="get">
          {{csrf_field()}}
          <input type="hidden" name="search" id="s-value">
        </form>
        @foreach($tags = App\Tag::orderBy('count','desc')->take(20)->get() as $tag)
          <li>
            <a onclick="getval('{{$tag->tag_name}}')" class="waves-effect waves-teal" title="{{$tag->tag_name}}">
           &nbsp; {{$tag->tag_name}} &nbsp;</a>
          </li>
        @endforeach
      </ul>
    </div>
  </div>
</div>
