<footer>
    <div class="footer-newsletter footer_delete_for_app">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-3">
            <div class="footer-logo"><a href="/"><img src="//img.sade.store/logo.png" alt="Sade Store"></a>
              <p>Sade Store-dan al məmnun qal</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-3">
          <div class="col-md-5 col-sm-6">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">{{ trans('app.information')}}<a class="expander visible-xs" href="#TabBlock-1">+</a></h3>
            <div class="tabBlock" id="TabBlock-1">
              <ul class="list-links list-unstyled">
                <li><a href="/check" title="{{__('app.Check_invoice')}}">{{__('app.Check_invoice')}}</a></li>
                @foreach($pages_footer_information = App\Page::where('status',1)->where('footer_seem',1)->where('information_footer', 1)->get() as $pfi)
                  <li><a href="/store/{{$pfi->slug}}" title="{{$pfi->title}}">{{$pfi->shortname}}</a></li>
                @endforeach
                <li><a class="capi" href="/contact" title="{{ trans('app.contact')}}">{{ trans('app.contact')}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">{{ trans('app.insider')}}<a class="expander visible-xs" href="#TabBlock-3">+</a></h3>
            <div class="tabBlock" id="TabBlock-3">
              <ul class="list-links list-unstyled">
                <li> <a href="/all-news" class="capi" title="{{ trans('app.news')}}">{{ trans('app.news')}}</a> </li>
                @foreach($pages_footer_guidance = App\Page::where('status',1)->where('footer_seem',1)->where('guidance_footer',1)->get() as $pfg)
                  <li><a href="/store/{{$pfg->slug}}" title="{{$pfg->title}}">{{$pfg->shortname}}</a></li>
                @endforeach
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-2 col-xs-12 col-lg-3 collapsed-block">
          <div class="footer-links">
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12 col-lg-3">
          <h3 class="links-title">{{ trans('app.contact_us')}}</h3>
          <div class="footer-content">
            <div class="envelope">
              <p> <i class="fa fa-envelope"></i> contact@sade.store</p>
            </div>
            <div class="phone">
              <p> <i class="fa fa-phone"></i> (+994) 70 818 66 01</p>
            </div>
            <div class="address"> <i class="fa fa-map-marker"></i>
              <p class="capi"> {{ trans('app.baku_azerbaijan')}} </p>
            </div>
          </div>
          <div class="social">
            <ul class="inline-mode">
              @if(1 == 2)
              <li class="social-network fb"><a title="{{ trans('app.connect_us_on_facebook')}}" target="_blank" href="https://www.facebook.com/emallazerbaijan"><i class="fa fa-facebook"></i></a></li>
              @endif
              <li class="social-network instagram"><a title="{{ trans('app.connect_us_on_instagram')}}" target="_blank" href="https://instagram.com/sade.store_"><i class="fa fa-instagram"></i></a></li>
              <li class="social-network whatsapp"><a title="{{ trans('app.connect_us_on_whatsapp')}}" target="_blank" href="https://wa.me/994708186601"><i class="fa fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="fo-co-cl">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12 fo-co">   {{date('Y')}} © <a href="/"> Sade Store </a> </div>
        </div>
      </div>
    </div>
</footer>
