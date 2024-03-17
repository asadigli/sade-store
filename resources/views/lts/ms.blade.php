<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="author" content="Sade Store">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{csrf_token()}}" />
    <meta name="theme-color" content="#19bfb1" />
    <meta property=”og:type” content="product" />
    <meta property="fb:page_id" content="859076027774930">
    <meta property=”og:site_name” content=”Sade Store” />
		<link rel="stylesheet" type="text/css" href="/css/sade.css?v={{md5(microtime())}}">
		<link rel="shortcut icon" href="/img/logo-icon.png">
    @section('head')
    @show
    @include('lts.google')
	</head>
	<body class="header_sticky">
		<div class="boxed style1">
			<div class="overlay"></div>
      @if(4==5)
			<!-- <div class="preloader">
				<div class="clear-loading loading-effect-2">
					<span></span>
				</div>
			</div> -->
      @endif
      @section('body')
      @show
      <button class="open-button" title="{{__('app.Call_me')}}"><i class="fa fa-phone fa-lg"></i></button>
      <div class="chat-popup" id="callme_body" data-success="{{__('app.callme_success_text')}}" data-error="{{__('app.Failed')}}">
        <form class="form-container">
          <h3>{{__('app.Call_me')}}</h3>
          <input id="callme_name" type="text" placeholder="* {{__('app.your_name')}}..." autocomplete="off">
          <input id="callme_surname" type="text" placeholder="* {{__('app.your_surname')}}..." autocomplete="off">
          <input id="callme_email" type="email" placeholder="* {{__('app.emailaddress')}}..." autocomplete="off" data-error="{{__('app.Enter_valid_email')}}">
          <input id="callme_phone_number" type="tel" placeholder="* {{__('app.phone_number')}}..." value="+994 (__) ___-__-__" pattern="^\+994(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$" autocomplete="off">
          <button type="button" class="btn cancel">{{__('app.Close')}}</button>
          <button type="submit" class="btn cbtn" disabled>{{__('app.Send')}}</button>
        </form>
      </div>
			<footer class="style2" data-months="{{__('app.January')}},{{__('app.February')}},{{__('app.March')}},{{__('app.April')}},{{__('app.May')}},{{__('app.June')}},{{__('app.July')}},{{__('app.August')}},{{__('app.September')}},{{__('app.October')}},{{__('app.November')}},{{__('app.December')}}">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="widget-ft style2 widget-about">
								<div class="logo logo-ft">
									<a href="/" title="Sade Store"><img data-src="/img/logo.png" alt="Sade Store"></a>
								</div>
								<div class="widget-content">
									<div class="icon">
										<img data-src="/img/icons/call-2.png" alt="">
									</div>
									<div class="info">
										<p class="phone">{{__('app.Call_Us')}}: {{config("settings.Main_contact_number")}}</p>
										<p class="address">
											Baku, Azerbaijan
										</p>
									</div>
								</div>
								<ul class="social-list">
                  @if(config("settings.facebook") != "")
									<li><a href="{{config('settings.facebook')}}" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  @endif
                  @if(config("settings.twitter") != "")
									<li><a href="{{config('settings.twitter')}}" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  @endif
                  @if(config("settings.instagram") != "")
									<li><a href="{{config('settings.instagram')}}" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  @endif
                  @if(config("settings.google_plus") != "")
									<li><a href="{{config('settings.google_plus')}}" title="Google Plus"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                  @endif
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="widget-ft style2 widget-categories-ft">
								<div class="widget-title">
									<h3>{{ __('app.Information')}}</h3>
								</div>
								<ul class="cat-list-ft">
                  <li><a href="/check" title="{{__('app.Check_invoice')}}">{{__('app.Check_invoice')}}</a></li>
                  @foreach($pages_footer_information = App\Page::where('status',1)->where('footer_seem',1)->where('information_footer', 1)->get() as $pfi)
                    <li><a href="/store/{{$pfi->slug}}" title="{{$pfi->title}}">{{$pfi->shortname}}</a></li>
                  @endforeach
                  <li><a href="/contact" title="{{ trans('app.contact')}}">{{ trans('app.contact')}}</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-md-6">
							<div class="widget-ft style2 widget-menu">
								<div class="widget-title">
									<h3>{{ __('app.Insider')}}</h3>
								</div>
								<ul>
                  <li> <a href="/all-news" title="{{ trans('app.news')}}">{{ trans('app.news')}}</a> </li>
                  @foreach($pages_footer_guidance = App\Page::where('status',1)->where('footer_seem',1)->where('guidance_footer',1)->get() as $pfg)
                    <li><a href="/store/{{$pfg->slug}}" title="{{$pfg->title}}">{{$pfg->shortname}}</a></li>
                  @endforeach
								</ul>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="widget-ft style2 widget-newsletter">
								<div class="widget-title">
									<h3>Abunə olun</h3>
								</div>
								<p>{{__('app.Subscribe_to_get_news')}}</p>
								<form class="subscribe-form">
									<div class="subscribe-content" id="sub_now">
										<input type="text" name="email" placeholder="{{__('app.emailaddress')}}">
										<button type="button"><img data-src="/img/icons/right-2.png" alt=">"></button>
									</div>
								</form>
							</div>
						</div>
					</div>
          @if(2 == 5)
					<div class="row">
						<div class="col-md-12">
							<div class="widget-ft style2 widget-apps">
								<div class="widget-title">
									<h3>Mobile Apps</h3>
								</div>
								<ul class="app-list">
									<li class="app-store">
										<a href="#" title="">
											<div class="img">
												<img data-src="/img/icons/app-store-2.png" alt="">
											</div>
											<div class="text">
												<h4>App Store</h4>
												<p>Available now on the</p>
											</div>
										</a>
									</li>
									<li class="google-play">
										<a href="#" title="">
											<div class="img">
												<img data-src="/img/icons/google-play-2.png" alt="">
											</div>
											<div class="text">
												<h4>Google Play</h4>
												<p>Get in on</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
          @endif
				</div>
			</footer>
			<section class="footer-bottom style2">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="copyright">© Sade Store {{date('Y')}}</p>
							<p class="btn-scroll">
								<a href="#" title="">
									<img data-src="/img/icons/top.png" alt="">
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
    <script type="text/javascript" src="/js/sade.min.js?v={{md5(microtime())}}"></script>
    @section('foot')
    @show
	</body>
</html>
