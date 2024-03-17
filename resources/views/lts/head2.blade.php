<section id="header" class="header">
  @include('lts.minihead')
  <div class="header-middle">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div id="logo" class="logo">
            <a href="/" title="">
              <img data-src="/img/logo.png" alt="">
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="top-search">
            @include('lts.search_field')
          </div>
        </div>
        <div class="col-md-3">
          <div class="box-cart">
            <!-- <div class="inner-box">
              <ul class="menu-compare-wishlist">
                <li class="compare">
                  <a href="#" data-toggle="modal" data-target="#callme">
                    <img src="/img/icons/phone.png" alt="">
                  </a>
                </li>
              </ul>
            </div> -->
            @if(Auth::check())
            <div class="inner-box">
              <a href="#" title="">
                <div class="icon-cart">
                  <img data-src="/img/icons/cart.png" alt="">
                  <span class="wishlist-count"></span>
                </div>
                <div class="price w-tot-price"></div>
              </a>
              @include('lts.ws_header')
            </div>
            @endif
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-2">
          <div id="mega-menu">
            <div class="btn-mega"><span></span>{{__('app.All_categories')}}</div>
            <ul class="menu">
              @foreach(App\Category::all() as $cat)
              @if(App\ProductDetails::where('category_id',$cat->id)->count() != 0)
              <li>
                <a href="#" title="" class="dropdown">
                  <span class="menu-img">
                    <img data-src="/img/icons/menu/01.png" alt="">
                  </span>
                  <span class="menu-title">
                    {{$cat->name}}
                  </span>
                </a>
                <div class="drop-menu">
                  <div class="one-third">
                    <div class="cat-title">{{$cat->name}}</div>
                    <ul>
                      @foreach(App\Subcat::where('parent_id',$cat->id)->get() as $sb)
                        @if($sb_pro = App\ProductDetails::where('subcat_id',$sb->id)->count() != 0 && $sb->id % 2 != 0)
                          <li><a href="/subcategory/{{$sb->slug}}" title="{{$sb->name}}">{{$sb->name}}</a></li>
                        @endif
                      @endforeach
                    </ul>
                    <div class="show">
                      <a href="/category/{{$cat->slug}}" title="{{$cat->name}}">{{__('app.See_all')}}</a>
                    </div>
                  </div>
                  <div class="one-third">
                    <div class="cat-title"></div>
                    <ul>
                      @foreach(App\Subcat::where('parent_id',$cat->id)->get() as $sb)
                        @if(App\ProductDetails::where('subcat_id',$sb->id)->count() != 0 && $sb->id % 2 == 0)
                          <li><a href="/subcategory/{{$sb->slug}}" title="{{$sb->name}}">{{$sb->name}}</a></li>
                        @endif
                      @endforeach
                    </ul>
                  </div>
                </div>
              </li>
              @endif
              @endforeach
            </ul>
          </div>
        </div>
        <div class="col-md-9 col-10">
          <div class="nav-wrap">
            <div id="mainnav" class="mainnav">
              <ul class="menu">
                <li class="column-1">
                  <a href="/" title="{{__('app.Home')}}">{{__('app.Home')}}</a>
                </li>
                <li class="column-1">
                  <a href="#" title="">{{__('app.More')}}</a>
                  <ul class="submenu">
                    @foreach($page_header = App\Page::where('status',1)->where('header_seem',1)->get() as $ph)
                      <li> <a href="/store/{{$ph->slug}}"><i class="fa fa-angle-right" aria-hidden="true"></i>{{$ph->shortname}}</a> </li>
                    @endforeach
                  </ul>
                </li>
                <li class="column-1">
                  <a href="/contact" title="{{__('app.Contact')}}">{{__('app.Contact')}}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="today-deal">
            <a href="#" title="">TODAY DEALS</a>
          </div> -->
          <div class="btn-menu"><span></span></div>
        </div>
      </div>
    </div>
  </div>
</section>
