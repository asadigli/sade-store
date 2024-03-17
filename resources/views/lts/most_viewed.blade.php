<div class="wrap-imagebox flat-imagebox">
  <div class="flat-row-title style3">
    <h3>{{__('app.Most_viewed')}}</h3>
  </div>
  <div class="rows style1">
    <div class="owl-carousel-4">
      @foreach(App\ProductDetails::orderBy('view','desc')->take(20)->get() as $pro)
      <div class="imagebox style4 style4-4 mostviewed">
        @if(!empty($pro->discount) && ($pro->discount) != 0)
        <span class="item-sale" title="{{__('app.Discount')}}">{{round((($pro->price)-(($pro->price)-($pro->discount)))*100/($pro->price))}}% </span>
        @endif
        <span class="view-count"><i class="fa fa-eye"></i> {{$pro->view}}</span>
        <div class="box-image" style="min-height:220px;">
          <a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">
            @php($img = App\Images::where('pro_id',$pro->id)->first())
            @if(!empty($img))
              <img data-src="/uploads/proph/small/{{$img->image}}" class="m-img" alt="{{$pro->productname}}"/>
            @else
              <img data-src="/uploads/defaultimage.jpg" class="m-img" alt="{{$pro->productname}}"/>
            @endif
          </a>
        </div>
        <div class="box-content">
          <div class="cat-name">
            <a href="/subcategory/{{App\Subcat::find($pro->subcat_id)->slug}}" title="{{App\Subcat::find($pro->subcat_id)->name}}">{{App\Subcat::find($pro->subcat_id)->name}}</a>
          </div>
          <div class="product-name">
            <a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">{{$pro->productname}}</a>
          </div>
          <div class="price">
            <span class="sale">
              @if(empty($pro->discount))
                 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                 {{number_format(($pro->price / Session::get('difference')),2)}}
                 {{Session::get('currency')}}
                 @else
                 {{$pro->price}} AZN
                 @endif
              @else
                  @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
                  {{number_format(((($pro->price)-($pro->discount)) / Session::get('difference')),2)}}
                  {{Session::get('currency')}}
                  @else
                  {{number_format(($pro->price - $pro->discount),2)}} AZN
                  @endif
                </span>
            <span class="regular">
              @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
              {{number_format(($pro->price / Session::get('difference')),2)}}
              {{Session::get('currency')}}
              @else
              {{number_format($pro->price,2)}} AZN
              @endif
            </span>
            @endif
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</div>
