@extends('lts.ms')
@section('head')
<meta name="keywords" content="{{__('app.Wishlist_keywords')}}">
<meta name="description" content="{{__('app.Wishlist_description')}}">
<title>{{__('app.My_wishlist')}}</title>
@endsection
@section('body')
@include('lts.head2')
		<section class="flat-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li class="trail-item">
								<a href="/" title="{{__('app.Home')}}">{{__('app.Home')}}</a><span><img src="/img/icons/arrow-right.png" alt=">"></span></li>
							<li class="trail-item">
								<a href="/account" title="{{__('app.My_account')}}">{{__('app.My_account')}}</a><span><img src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-end"><a href="/my-wishlist" title="{{__('app.My_wishlist')}}">{{__('app.My_wishlist')}}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-shop-cart">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="flat-row-title style1">
							<h3>{{__('app.My_wishlist')}}</h3>
						</div>
						<div class="table-cart" id="wishlistbody">
							<table>
								<thead><tr><th>{{__('app.Product')}}</th><th>{{__('app.Quantity')}}</th><th>{{__('app.Total')}}</th><th></th></tr></thead>
								<tbody data-words="{{__('app.Delete_product')}}" id="w-list"></tbody>
							</table><img src="/css/giphy.gif" class="loader-gif">
							@if(App\Wishlist::where('user_id',Auth::user()->id)->count() > 4)
							<center><a class="mybtn get-wishlist">{{__('app.More')}}</a></center>
							@endif
							@if(substr(Request::root(),7,9) == "localhost")
							<div class="form-coupon">
								<form action="#" method="get" accept-charset="utf-8">
									<div class="coupon-input">
										<input type="text" name="coupon code" placeholder="Coupon Code">
										<button type="button">Apply</button>
									</div>
								</form>
							</div>
							@endif
						</div>
					</div>
					<div class="col-lg-4">
						<div class="cart-totals">
							<h3>{{__('app.Result')}}</h3>
								<table>
									<tbody>
										<tr>
											<td>{{__('app.Shipping')}}</td>
											<td class="btn-radio">
												<div class="delivary-section" data-cost="{{__('app.Free_shipping')}}" data-pr="
												@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
			                  {{number_format(config('settings.shipping')/ Session::get('difference'),2)}}
			                  {{Session::get('currency')}}
			                  @else
			                  {{number_format(config('settings.shipping'),2)}} AZN
			                  @endif"></div>
											</td>
										</tr>
										<tr>
											<td>{{__('app.Total')}}</td>
											<td class="price-total" id="total_wishlist_sum">
											</td>
										</tr>
									</tbody>
								</table>
						</div>
					</div>
				</div>
			</div>
		</section>
		@include('lts.features')
@endsection
@section('foot')
@endsection
