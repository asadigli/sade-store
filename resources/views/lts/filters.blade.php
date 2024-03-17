<div class="col-lg-3 col-md-4">
    <div class="sidebar">
      <div class="widget widget-categories">
        <div class="widget-title">
          <h3>{{__('app.All_categories')}}</h3>
        </div>
        <ul class="cat-list style1 widget-content">
          @foreach(App\Category::all() as $cat)
          <li>
            <span>{{$cat->name}}<i> ({{App\Subcat::where('parent_id',$cat->id)->count()}})</i></span>
            <ul class="cat-child">
              @foreach(App\Subcat::where('parent_id',$cat->id)->get() as $sb)
              <li><a href="/subcategory/{{$sb->slug}}" title="{{$sb->name}}">{{$sb->name}}</a></li>
              @endforeach
            </ul>
          </li>
          @endforeach
        </ul>
      </div>
      <form id="filter-form" action="/{{Request::path()}}" method="GET">
      @if(empty(Session::get('currency')))
      <input type="hidden" id="currency" value="AZN">
      @else
      <input type="hidden" id="currency" value="{{Session::get('currency')}}">
      @endif
      <input type="hidden" id="max_price" name="max_price" @if(isset($max)) value="{{$max}}" @else @endif>
      <input type="hidden" id="min_price" name="min_price" @if(isset($max)) value="{{$min}}" @else @endif>
      <div class="widget widget-price">
        <div class="widget-title"><h3>{{__('app.Price_range')}}</h3></div>
        <div class="widget-content">
            <p><input type="text" id="amount" readonly></p>
            <div id="slider-range"></div>
        </div>
      </div>
      <div class="widget widget-brands">
        <div class="widget-title">
          <h3>{{__('app.Brands')}}</h3>
        </div>
        <div class="widget-content">
          <input type="hidden" id="brand_list">
          <input type="text" class="brand-search" placeholder="{{__('app.Search')}}...">
          <ul class="box-checkbox scroll brand-list">
            <li class="check-box">
              <label for="checkbox"><b>{{__('app.Select_all')}}</b><b style="display:none;">{{__('app.Unselect_all')}}</b></label>
            </li>
            @php($pross = App\ProductDetails::all())
            @foreach($pross->unique('brand') as $pro)
              @if($pro->brand != "B/B" && $pro->brand != "B\B")
                @php($i=0)
                @foreach($pros as $k => $p) @if($p->brand == $pro->brand) @php($i++) @endif @endforeach
                <li class="check-box">
                  <label for="checkbox">{{$pro->brand}} <span>({{$i}})</span></label>
                </li>
              @endif
            @endforeach
          </ul>
        </div>
      </div>
      <div class="widget widget-brands">
        <div class="widget-title">
          <a class="mybtn" id="filter-btn">{{__('app.Change')}}</a>
        </div>
      </div>
      </form>
      @include('lts.posters')
    </div>
  </div>
