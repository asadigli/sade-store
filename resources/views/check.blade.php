@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{__('app.Check_description')}}" />

<meta property="og:url" content="https://sade.store/check" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{{__('app.Check_invoice')}}: Sade Store" />
<meta property="og:description" content="{{__('app.Check_description')}}" />
<meta name="description" content="{{__('app.Check_description')}}">
<meta name="keywords" content="{{__('app.Check_keywords')}}">
<meta name="twitter:card" content="https://sade.store/uploads/ss_logo.jpg" />
<meta name="twitter:title" content="{{__('app.Check_invoice')}}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/check" />
<meta name="twitter:description" content="{{__('app.Check_description')}}" />
<meta name="twitter:image" content="https://sade.store/uploads/ss_logo.jpg" />
<title>{{__('app.Check_invoice')}}: Sade Store</title>
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
							<li class="trail-end"><a href="/check" title="{{__('app.Check_invoice')}}">{{__('app.Check_invoice')}}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-tracking background">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="order-tracking">
							<div class="title">
								<h3>{{__('app.Check_invoice')}}</h3>
								<p class="subscibe">
									{!! __('app.Check_information') !!}
								</p>
							</div>
							<div class="tracking-content">
								<form>
									<div class="one-half order-id">
										<label for="invoice_id">{{__('app.Check_id')}}</label>
										<input type="number" id="invoice_id" placeholder="{{__('app.Check_id')}}...">
									</div>
									<div class="one-half billing">
										<label for="phone_number">{{__('app.phone_number')}}</label>
										<input type="tel" id="phone_number" placeholder="* {{__('app.phone_number')}}..." value="+994 (__) ___-__-__" pattern="^\+994(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$" autocomplete="off">
									</div>
									<div class="check-btn">
										<button type="button">{{__('app.Check')}}</button>
									</div>
								</form>
							</div>
							<div id="result">
			          <table class='table invoice-table'><thead><tr><th colspan='1'>{{__('app.About_invoice')}}</th></tr></thead>
									<tbody>
										<tr><td style='text-align:left'>{{__('app.Fulfill_the_blank_to_get_result')}}</td></tr>
									</tbody>
								</table>
			        </div>
						</div>
					</div>
				</div>
			</div>
		</section>
@include('lts.our_pros')
@endsection
