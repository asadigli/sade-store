<section id="header" class="header">
  @include('lts.minihead')
  <div class="header-middle">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="logo" class="logo style1">
            <a href="/" title="">
              <img data-src="/img/logo.png" alt="Sade Store">
            </a>
          </div>
          <div class="nav-wrap">
            <div id="mainnav" class="mainnav style1">
              <ul class="menu">
                <li class="column-1">
                  <a href="/" title="{{__('app.Home')}}">{{__('app.Home')}}</a>
                </li>
                <li class="column-1">
                  <a href="#" title="{{__('app.More')}}">{{__('app.More')}}</a>
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
          <div class="btn-menu style1"><span></span></div>
          <ul class="flat-infomation style1">
            <li class="phone">
              <img data-src="/img/icons/call-3.png" alt="Sade Store"><a href="#" title="{{config("settings.Main_contact_number")}}">{{config("settings.Main_contact_number")}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="header-bottom mobhead">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-2">
          <div id="mega-menu" class="style1">
            <div class="btn-mega" style="text-transform:uppercase;"><span></span>{{ trans('app.categories')}}</div>
            <ul class="menu">
              @foreach($cats = App\Category::all() as $cat)
              @if($ct_pro = App\ProductDetails::where('category_id',$cat->id)->count() != 0)
              <li>
                <a href="/category/{{$cat->slug}}" title="" class="dropdown">
                  <span class="menu-img">
                    <img data-src="/img/icons/menu/01.png" alt="">
                  </span>
                  <span class="menu-title">
                    {{$cat->name}}
                  </span>
                </a>
                <div class="drop-menu">
                  <div class="one-third">
                    <div class="cat-title">
                      {{$cat->name}}
                    </div>
                    <ul>
                        @foreach($subcat = App\Subcat::where('parent_id',$cat->id)->get() as $sc1)
                          @if($sb_pro = App\ProductDetails::where('subcat_id',$sc1->id)->count() != 0 && $sc1->id % 2 != 0)
                          <li>
                            <a href="/subcategory/{{$sc1->slug}}" title="{{$sc1->name}}">{{$sc1->name}}</a>
                          </li>
                          @endif
                        @endforeach
                    </ul>
                    <div class="show">
                      <a href="/category/{{$cat->slug}}" title="{{__('app.See_all')}}">{{__('app.See_all')}}</a>
                    </div>
                  </div>
                  <div class="one-third">
                    <ul>
                      @foreach($subcat = App\Subcat::where('parent_id',$cat->id)->get() as $sc1)
                        @if($sb_pro = App\ProductDetails::where('subcat_id',$sc1->id)->count() != 0 && $sc1->id % 2 == 0)
                        <li>
                          <a href="/subcategory/{{$sc1->slug}}" title="{{$sc1->name}}">{{$sc1->name}}</a>
                        </li>
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
          <div class="top-search active style1">
            @include('lts.search_field')
          </div>
          <span class="show-search"><button></button></span>
          <div class="box-cart style1">
            @if(Auth::check())
            <div class="inner-box">
              <a href="#" title="{{__('app.My_wishlist')}}">
                <div class="icon-cart">
                  <img data-src="/img/icons/add-cart.png" alt="">
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
</section>
