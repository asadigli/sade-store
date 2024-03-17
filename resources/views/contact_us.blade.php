@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{__('app.Contact_description')}}" />

<meta property="og:url" content="https://sade.store/contact" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{{ ucwords(trans('app.contact_us')) }}: Sade Store" />
<meta property="og:description" content="{{__('app.Contact_description')}}" />
<meta name="description" content="{{__('app.Contact_description')}}">
<meta name="keywords" content="{{__('app.Contact_keywords')}}">
<meta name="twitter:card" content="https://sade.store/uploads/ss_logo.jpg" />
<meta name="twitter:title" content="{{ ucwords(trans('app.contact_us')) }}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/contact" />
<meta name="twitter:description" content="{{__('app.Contact_description')}}" />
<meta name="twitter:image" content="https://sade.store/uploads/ss_logo.jpg" />
<title>{{__('app.Contact_us')}}</title>
@endsection
@section('body')
@include('lts.head2')
		<section class="flat-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li class="trail-item">
								<a href="/" title="{{__('app.Home')}}">{{__('app.Home')}}</a>
								<span><img src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-end">
								<a href="/contact" title="{{__('app.Contact_us')}}">{{__('app.Contact_us')}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		@if(2==5)
		<section class="flat-map">
            <div class="container">
            	<div class="row">
            		<div class="col-md-12">
            			<div id="flat-map" class="pdmap">
				           	<div class="flat-maps" data-address="Quận Smith, Mississippi" data-height="444" data-images="/img/icons/map.png" data-name="Themesflat Map"></div>
				            <div class="gm-map">
				                <div class="map"></div>
				            </div>
            			</div>
            		</div>
            	</div>
            </div>
        </section>
				@endif

        <section class="flat-contact style2">
        	<div class="container">
        		<div class="row">
        			<div class="col-md-7">
        				<div class="form-contact left">
        					<div class="form-contact-header">
        						<h3>{{__('app.Leave_a_message_for_us')}}</h3>
        						<p>{{__('app.Fulfill_the_blank')}}</p>
        					</div>
        					<div class="form-contact-content">
        						<form action="#" method="get" id="form-contact" accept-charset="utf-8">
											<div class="form-box one-half name-contact">
												<input id="name" @if(Auth::check()) type="hidden" value="{{Auth::user()->name}}" disabled @else type="text" @endif placeholder="{{__('app.Name')}}...">
											</div>
											<div class="form-box one-half password-contact">
												<input id="surname" @if(Auth::check()) type="hidden" value="{{Auth::user()->surname}}" disabled @else type="text" @endif placeholder="{{__('app.Surname')}}...">
											</div>
											<div class="form-box">
												<input id="email" @if(Auth::check()) type="hidden" value="{{Auth::user()->email}}" disabled @else type="email" @endif data-error="{{__('app.Enter_valid_email')}}" placeholder="{{__('app.emailaddress')}}...">
											</div>
											<div class="form-box">
												<input type="text" id="subject" placeholder="{{__('app.Subject')}}...">
											</div>
											<div class="form-box">
												<textarea id="message" placeholder="{{__('app.Message')}}..."></textarea>
											</div>
											<div class="form-box">
												<button type="button" class="contact">{{__('app.Send')}}</button>
											</div>
										</form>
        					</div>
        				</div>
        			</div>
        			<div class="col-md-5">
        				<div class="box-contact">
									<h3 class="page-subheading">{{__('app.Lets_get_in_touch')}}</h3>
									<p>
										SadeStore Müştəri xidmətləri ilə əlaqə quraraq təklif və iradlarınızı,
										həmçinin də satış xidmətimiz haqqında fikrinizi bildirə bilərsiniz. Qeyd edək ki,
										müştəri xidmətləri ilə əlaqə saxlamaq üçün aşağıdakı vasitələrdən istifadə edə bilərsiniz:
									</p>
									<ul>
										<li>Sayt üzərindən fikir bildirmək <i>(üstün tutulur)</i></li>
										<li>Qeyd olunan E-poçt ünvanı vasitəsi ilə əlaqə qurmaq <i>(rəsmi danışıqlar üçün)</i></li>
										<li>Qeyd olunan əlaqə nömrəsi ilə əlaqə qurmaq</li>
									</ul>
									<p>
										Əlavə olaraq qeyd edək ki, müştəri xidmətləri ilə E-Poçta və ya sayt üzərindən əlaqə
										qurduğunuz zaman sizin məktubunuz daxil etdiyiniz E-Poçta vasitəsilə cavablandırılacaqdır.
									</p>
									<div class="sadestore-contact">
										<p><i class="fa fa-home"></i> Bakı, Azərbaycan</p>
										<p><i class="fa fa-phone"></i><span> (+994) 70 818 66 01</span></p>
										<p><i class="fa fa-envelope"></i><span><a href="mailto:contact@sade.store"> contact@sade.store</a></span></p>
									</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
@endsection
@section('foot')
@endsection
