<div class="menu-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12 hidden-xs">
        <div class="main-menu">
          <nav>
            <ul>
              <li class="custom-menu">
                <a href="/">{{ trans('app.home')}}</a>
              </li>
              <li class="megamenu cu-po">
                <a style="/">{{ trans('app.categories')}}</a>
                <div class="mega-menu">
                  @foreach($cats = App\Category::all() as $cat)
                  @if($ct_pro = App\ProductDetails::where('category_id',$cat->id)->count() != 0)
                  <span>
                    <a class="mega-title cu-po" href="/category/{{$cat->slug}}">{{$cat->name}} </a>
                    @foreach($subcat = App\Subcat::where('parent_id',$cat->id)->get() as $sc1)
                      @if($sb_pro = App\ProductDetails::where('subcat_id',$sc1->id)->count() != 0)
                        <a href="/subcategory/{{$sc1->slug}}">{{$sc1->name}}</a>
                      @endif
                    @endforeach
                  </span>
                  @endif
                  @endforeach
                  <span class="mega-menu-img hidden-sm">
                      <a href=""><img src="//img.sade.store/mim.jpg" alt="Sade Store"></a>
                  </span>
                </div>
              </li>
              <li class="custom-menu cu-po"><a title="{{ trans('app.more')}}">{{ trans('app.more')}}</a>
                <ul class="dropdown">
                  @foreach($page_header = App\Page::where('status',1)->where('header_seem',1)->get() as $ph)
                  <li> <a href="/store/{{$ph->slug}}">{{$ph->shortname}}</a> </li>
                  @endforeach
                </ul>
              </li>
              <li><a href="/contact">{{ trans('app.contact')}}</a></li>
            </ul>
          </nav>
          <!-- Signup -->
          @if (Route::has('login'))
          @if (Auth::check())
          @if(((Auth::user()->role_id)==2) | ((Auth::user()->role_id)==4) | ((Auth::user()->role_id)==3))
            <p class="top-Signup"><a href="/adm" title="{{trans('app.admin_panel')}}" class="capi" role="button"> {{ trans('app.admin_panel')}}</a></p>
          @endif
          @else
          <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header"> <img id="img_logo" src="//img.sade.store/logo.png" alt="loqo">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </button>
                </div>
                <div id="div-forms">
                  <form id="login-form" method="POST" action="{{ route('login') }}">
                    {{csrf_field()}}
                    <div class="modal-body">
                      <div id="div-login-msg"> <span id="text-login-msg">Email address </span> </div>
                      <input name="email" type="text" class="form-control" placeholder="E-mail..." required >
                      @if ($errors->has('email'))
                          <span class="help-block">
                              <strong>{{ $errors->first('email') }}</strong>
                          </span>
                      @endif
                      <input name="password" id="passworddd" type="password" class="form-control" required placeholder="Password...">
                      @if ($errors->has('password'))
                          <span class="help-block">
                              <strong>{{ $errors->first('password') }}</strong>
                          </span>
                      @endif
                      <div class="checkbox">
                        <label>
                          <input name="remember" type="checkbox" value="forever" id="rememberme" >
                          {{trans('app.remember_me')}} </label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div>
                        <button type="submit" class="btn-login">{{ trans('app.login')}}</button>
                      </div>
                      <div>
                        <a href="/register" class="btn btn-link">{{ trans('app.register')}}</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          @endif
          @endif
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mobile-menu hidden-sm hidden-md hidden-lg">
  <nav><span class="mobile-menu-title">{{ trans('app.categories')}}</span>
    <ul>
      <li><a href="/">{{ trans('app.home')}}</a></li>
      <li><a>{{ trans('app.categories')}}</a>
        <ul>
          @foreach($cattt = App\Category::all() as $catt)
          <li>
            @if($ct_pro2 = App\ProductDetails::where('category_id',$catt->id)->count() != 0)
            <a href="/category/{{$catt->slug}}">{{$catt->name}} </a>
            @endif
            <ul>
              @foreach($subcat = App\Subcat::where('parent_id',$catt->id)->get() as $sc)
              <li> @if($sb_pro2 = App\ProductDetails::where('subcat_id',$sc->id)->count() != 0) <a href="/subcategory/{{$sc->slug}}"> {{$sc->name}}</a> @endif</li>
              @endforeach
            </ul>
          </li>
          @endforeach
        </ul>
      </li>
      <li><a>{{ trans('app.more')}}</a>
        <ul>
            @foreach($page_header_mob = App\Page::where('status',1)->where('header_seem',1)->get() as $phm)
            <li><a href="/store/{{$phm->slug}}">{{$phm->shortname}}</a></li>
            @endforeach
        </ul>
      </li>
      <li><a data-toggle="modal" data-target="#callme" class="call-me" title="{{ trans('app.call_me')}}">{{ trans('app.call_me')}}</a> </li>
      <li><a href="/contact">{{ trans('app.contact')}}</a></li>
    </ul>
  </nav>
</div>
