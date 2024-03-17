<div class="header-top">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="flat-support">
          <li>
            <a href="/contact" title="{{__('app.Support')}}"><b>{{__('app.Support')}}</b></a>
          </li>
          <li>{{ trans('app.welcome_to_sadestore')}}!</li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="flat-infomation">
          <li class="phone">
            {{__('app.Call_Us')}}: <a href="#" title="{{__('app.Call_Us')}}">{{config("settings.Main_contact_number")}}</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="flat-unstyled">
          <li class="account">
            <a href="#" title="">{{__('app.Account')}}<i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul class="unstyled">
              @if(Auth::check())
              <li><a href="/account" title="{{__('app.My_account')}}"><i class="fa fa-user" ></i> {{__('app.My_account')}}</a></li>
              <li><a href="/account/settings" title="{{__('app.Settings')}}"><i class="fa fa-cog" ></i> {{__('app.Settings')}}</a></li>
              <li><a href="/my-wishlist" title="{{__('app.My_wishlist')}}"><i class="fa fa-cart-plus" ></i> {{__('app.My_wishlist')}}</a></li>
              <li>
                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                    <i class="fa fa-sign-out" ></i> {{ trans('app.logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
              </li>
              @else
              <li><a href="/login" title="{{__('app.Login')}}">{{__('app.Login')}}</a></li>
              <li><a href="/register" title="{{__('app.Registration')}}">{{__('app.Register')}}</a></li>
              @endif
            </ul>
          </li>
          <li data-diff="{{Session::get('difference')}}">
            <a href="#">@if(!empty(Session::get('currency')))
            {{Session::get('currency')}} @else AZN @endif<i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul class="unstyled">
              <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'AZN') class="selected" @endif @else class="selected" @endif href="/currency/AZN"><span class="cur_icon">₼</span> AZN</a> </li>
              <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'USD') class="selected" @endif @else @endif href="/currency/USD"><span class="cur_icon">$</span> USD</a> </li>
              <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'RUB') class="selected" @endif @else @endif href="/currency/RUB"><span class="cur_icon">&#8381;</span> RUB</a> </li>
              <li> <a @if(!empty(Session::get('currency'))) @if(Session::get('currency') == 'TRY') class="selected" @endif @else @endif href="/currency/TRY"><span class="cur_icon">&#8378;</span> TRY</a> </li>
            </ul>
          </li>
          @if(substr(Request::root(),7,9) == "localhost")
          <li class="lang-select">
            <ul class="unstyled">
              <li><a @if(Request::is('/') | Request::is(Config::get('app.locale'))) href="/en" @else href="/en" @endif @if(Lang::locale() == 'en') class="active" @endif><span>{{__('app.English')}}</span></a></li>
              <li><a @if(Request::is('/') | Request::is(Config::get('app.locale'))) href="/az" @else href="/az" @endif @if(Lang::locale() == 'az') class="active" @endif><span>{{__('app.Azerbaijani')}}</span></a></li>
            </ul>
          </li>
          @endif
        </ul>
      </div>
    </div>
  </div>
</div>
