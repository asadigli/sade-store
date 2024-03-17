<div class="dropdown-box">
  <ul class="drop-wishlist"></ul>
  <div class="total">
    <span>{{__('app.Total')}}:</span>
    @php($sum = 0)
    @foreach(App\Wishlist::where('user_id',Auth::user()->id)->get() as $ws)
    @php($sum += (App\ProductDetails::find($ws->product_id)->price - App\ProductDetails::find($ws->product_id)->discount))
    @endforeach
    <span class="price w-tot-price">
      @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
      {{number_format(($sum / Session::get('difference')),2)}} {{Session::get('currency')}}
      @else {{number_format($sum,2)}} AZN @endif
    </span>
  </div>
  <div class="btn-cart">
    <a href="/my-wishlist" class="view-cart" title="{{__('app.More')}}">{{__('app.More')}}</a>
  </div>
</div>
