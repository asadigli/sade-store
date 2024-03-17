<header>
  <div class="header-container">
    <div class="header-top">
      <div class="container">
        <div class="respp row">
          <div class="col-md-6 col-sm-5 col-xs-6">
            <span class="phone hidden-xs hidden-sm"><i class="fa fa-phone fa-lg"></i> (+994) 70 818 66 01</span>
            <div class="welcome-msg hidden-xs">{{ trans('app.welcome_to_sadestore')}}! </div><div class="language-currency-wrapper">
              <div class="inner-cl">
                <div class="block block-currency">
                  <div class="item-cur"> <span> @if(!empty(Session::get('currency')))
                  {{Session::get('currency')}} @else AZN @endif </span> <i class="fa fa-angle-down"></i></div>
                  <ul>
                    <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'AZN') class="selected" @endif @else class="selected" @endif href="/currency/AZN"><span class="cur_icon">₼</span> AZN</a> </li>
                    <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'USD') class="selected" @endif @else @endif href="/currency/USD"><span class="cur_icon">$</span> USD</a> </li>
                    <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'RUB') class="selected" @endif @else @endif href="/currency/RUB"><span class="cur_icon">&#8381;</span> RUB</a> </li>
                    <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'TRY') class="selected" @endif @else @endif href="/currency/TRY"><span class="cur_icon">&#8378;</span> TRY</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="headerlinkmenu col-lg-6 col-md-6 col-sm-7 col-xs-6 text-right">
            <div class="links">
              <div class="jtv-user-info">
                <div class="dropdown">
                  <ul class="dropdown-menu" role="menu">
                    @if (Route::has('login'))
                    @if (Auth::check())
                    @if(((Auth::user()->role_id)==2) | ((Auth::user()->role_id)==4) | ((Auth::user()->role_id)==3))
                    <li><a href="/adm"><i class="fa fa-user" ></i> Admin Panel</a></li>
                    @endif
                            @if(((Auth::user()->role_id)==2) | ((Auth::user()->role_id)==4) | ((Auth::user()->role_id)==3))
                              <li><a href="/adm"><i class="fa fa-columns" ></i> {{ trans('app.adminpanel') }}</a></li>
                            @endif
                            <li><a href="/profilesettings"><i class="fa fa-cogs" ></i>
                               {{ trans('app.accountsettings') }}</a></li>
                            <li><a href="/wishlist">
                              <i class="fa fa-shopping-cart" ></i> {{ trans('app.wishlist') }}
                            @if($wishlist = App\Wishlist::where('user_id',Auth::user()->id)->count() != 0)
                                <span class="badge badge-warning pull-right" style="background-color:red;">
                                    {{$wishlist = App\Wishlist::where('user_id',[Auth::user()->id])->count()}}
                                </span>
                            @endif
                                </a>
                              </li>
                        @if(((Auth::user()->role_id)==2) | ((Auth::user()->role_id)==4) | ((Auth::user()->role_id)==3))
                        <li><a href="/adm/sellproduct"><i class="fa fa-shopping-cart" ></i> {{ trans('app.sellproduct') }}</a></li>
                        @endif
                        <li><a href="/helpdesk"><i class="fa fa-h-square" ></i> {{ trans('app.helpdesk') }}</a></li>
                        <li class="divider"></li>
                        <li><a href="{{ route('logout') }}" onclick="event.preventDefault();
                                      document.getElementById('logout-form').submit();">
                            <i class="fa fa-sign-out" ></i> {{ trans('app.logout') }}
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                        </form>
                      </li>
                      @else
                      @endif
                      @endif
                  </ul>
                </div>
              </div>
              <div class="myaccount hidden-xs"><a title="{{ trans('app.contact')}}" href="/contact">{{ trans('app.contact')}}</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-xs-12">
          <div class="logo logo_delete_for_app"><a title="Sade Store" href="/"><img alt="Sade Store" src="//img.sade.store/logo.png"></a> </div>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-6">
          <div class="top-search">
            <div id="search">
              <form action="/search-result/search={request}" method="get" autocomplete="off">
                {{csrf_field()}}
                <div class="input-group">
                  <select class="cate-dropdown hidden-xs hidden-sm" name="sub_id" id="searcat">
                    <option name="sub_id" value="0">{{ trans('app.all') }}</option>
    									@foreach($category = App\Category::all() as $cat)
                        <option disabled>{{$cat->name}}</option>
                        @foreach($subcat = App\Subcat::where('parent_id',$cat->id)->get() as $sb)
      									<option value="{{$sb->id}}" name="sub_id">&nbsp; {{$sb->name}}</option>
                        @endforeach
    									@endforeach
                  </select>
                  <input type="text" autocomplete="off" id="getsearchtag" list="pros" name="search" class="form-control" placeholder="{{ trans('app.search-placeholder')}}..." @if(Request::is('search-result/*')) value="{{$search}}" @else value="{{ isset($s) ?  $s : ''}}" @endif oninvalid="this.setCustomValidity('Məlumat daxil edin')" oninput="setCustomValidity('')" required>
                  <datalist id="pros"></datalist>
                  <button class="btn-search" type="submit"><i class="fa fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-12 top-cart">
          @if (Route::has('login'))
          @if (Auth::check())
          <div class="top-cart-contain">
            <div class="mini-cart">
              <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#">
                @php($total = 0)
                @php($total1=0)
                @foreach($wish = App\Wishlist::where('user_id',Auth::user()->id)->get() as $wis)
                @php($total += $wis->product_price)
                @php($total1 += $wis->product_discount)
                @endforeach
                <div class="cart-icon"><i class="fa fa-shopping-cart"></i></div>
                <div class="shoppingcart-inner"><span class="cart-title">{{ trans('app.wishlist')}}</span>
                  <span class="cart-total">{{count($wish)}} Item(s): {{($total) - ($total1)}}AZN</span></div>
                </a></div>
              <div>
                <div class="top-cart-content">
                  <div class="block-subtitle hidden-xs capi">{{ trans('app.recently_added_item')}}</div>
                  <ul id="cart-sidebar" class="mini-products-list">
                    @foreach($wis = App\Wishlist::where('user_id',[Auth::user()->id])->get() as $wish)
                    <li class="item odd">
                      @foreach($proslug = App\ProductDetails::where('id','=',[$wish->product_id])->get() as $ps)
                        <a href="/product-details/{{$ps->slug}}" title="{{$ps->productname}}" class="product-image">
                      @endforeach
                      @foreach($prodd = App\ProductDetails::all() as $prodd)
                        @if($prodd->id == $wish->product_id)
                          <img src="//img.sade.store/proph/{{$prodd->photos}}" alt="" width="65">
                        @endif
                      @endforeach
                      </a>
                      <div class="product-details"> <a href="/wishlistproddel/{{ $wish->id }}" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                        <p class="product-name"><a href="#">{{$wish->product_name}}</a> </p>
                        <span class="price">{{$wish->product_price}}</span> </div>
                    </li>
                    @endforeach
                  </ul>
                  <div class="top-subtotal capi">{{ trans('app.total')}}: <span class="price">{{($total) - ($total1)}}AZN</span></div>
                  <div class="actions">
                    <a href="/wishlist"  class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <span>{{ trans('app.more')}}</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          @endif
          @endif
          <div class="call-me-main">
            <a href="#" data-toggle="modal" data-target="#callme" class="call-me" title="{{ trans('app.call_me')}}">
              <i class="fa fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<div class="modal fade" id="callme" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <center><img id="img_logo" class="callme-logo" src="//img.sade.store/logo.png" alt="loqo">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button></center>
      </div>
      <div>
          <div class="modal-body">
            <div class="thank-you-pop callme_sent" style="display:none;">
              <img src="/uploads/confirmed.png" alt="Success">
              <h1>{{trans('app.successfully_done')}}</h1>
              <p>{{trans('app.callme_success_text')}}</p>
            </div>
            <div class="alert alert-danger chidden_alert" id="callme_sent_failed" style="display:none;"></div>
            <div class="call-me-hidden">
                <input id="callme_name" type="text" class="form-control call-me-space" placeholder="* {{trans('app.your_name_here')}}...">
                <input id="callme_surname" type="text" class="form-control call-me-space" placeholder="* {{trans('app.your_surname_here')}}...">
                <input id="callme_email" type="text" class="form-control call-me-space" placeholder="* {{trans('app.your_email_here')}}...">
                <input id="callme_phone_number" type="text" class="form-control call-me-space" placeholder="* {{trans('app.phone_number')}}...">
            </div>
          </div>
          <div class="modal-footer call-me-hidden">
            <div><button type="submit" id="CallMeSend" class="btn-login">{{ trans('app.call_me')}}</button></div>
          </div>
      </div>
    </div>
  </div>
</div>
