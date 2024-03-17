@extends('lts.ms')
@section('head')
<meta name="keywords" content="{{__('app.Profile_keywords')}}">
<meta name="description" content="{{__('app.Profile_description')}}">
<title>{{Auth::user()->name}} {{Auth::user()->surname}}</title>
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
								<a href="/account" title="{{__('app.My_account')}}">{{__('app.My_account')}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-tracking background">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="order-tracking myacc">
							@if(Request::is('account'))
							<div class="purchases-part">
								<input type="hidden" name="table-list" value="'{{__('app.Previous')}}','{{__('app.Next')}}','{{__('app.Search')}}','{{__('app.As_a_result_nothing_found')}}'">
								<table id="dtMaterialDesignExample" class="table table-striped" cellspacing="0" width="100%">
									<thead><tr><th class="th-sm">ID</th><th class="th-sm">{{__('app.Product')}}</th><th class="th-sm">{{__('app.SS_point')}}</th><th class="th-sm">{{__('app.Operations')}}</th></tr></thead>
									<tbody>
										@foreach(App\Sales::where('user_id',Auth::user()->id)->get() as $sl)
										<tr>
											<td>{{$sl->sale_id}}</td>
											<td>@if(!empty(App\ProductDetails::where('main_id',$sl->product_id)->first()))<a href="/product-details/{{App\ProductDetails::where('main_id',$sl->product_id)->first()->slug}}" target="_blank">{{App\ProductDetails::where('main_id',$sl->product_id)->first()->productname}}</a> @else --- @endif <br> {{$sl->product_id}}</td>
											<td>{{$sl->ss_point}}</td>
											<td><a class="more-btn" data-toggle="modal" data-target="#mysales" data-id="{{$sl->id}}"><i class="fa fa-eye"></i></a></td>
										</tr>
										@endforeach
										<div id="mysales" class="modal" role="dialog" data-words="{{__('app.More_details')}},{{__('app.Invoice_id')}},{{__('app.Product_id')}},{{__('app.Product')}},{{__('app.Purchase_date')}},{{__('app.Real_price')}},{{__('app.Discount')}},{{__('app.Quantity')}},{{__('app.Total_paid')}},{{__('app.SS_point')}},{{__('app.Close')}}"></div>
									</tbody>
									<tfoot><tr><th>ID</th><th>{{__('app.Product')}}</th><th>{{__('app.SS_point')}}</th><th>{{__('app.Operations')}}</th></tr></tfoot>
								</table>
							</div>
							<div class="account-part">
							  <img src="/uploads/av/default.jpg" alt="{{Auth::user()->name}} {{Auth::user()->surname}}" style="width:100%">
								<p class="acc-btns"><a href="/account/settings"><i class="fa fa-cog"></i> {{__('app.Settings')}}</a><a href="/my-wishlist"><i class="fa fa-cart-plus"></i> {{__('app.Wishlist')}}</a></p>
							  <h1>{{Auth::user()->name}} {{Auth::user()->surname}}</h1>
							  <p>{{Auth::user()->email}}</p>
							  <p>{{\Carbon\Carbon::parse(Auth::user()->dob)->format('d M, Y')}} ({{\Carbon\Carbon::parse(Auth::user()->dob)->age}})</p>
								<p>{{App\Sales::where('user_id',Auth::user()->id)->sum('ss_point')}} xal</p>
							</div>
							@else
							<div class="title"><h3 id="mysetting_title" @if(Auth::user()->mobile_verification == 0 && !empty(Auth::user()->mobile)) data-wrn="{{__('app.Your_number_is_not_verified')}}" @endif>{{__('app.Update_profile_settings')}}</h3></div>
							<form id="update-user-data" class="us-sett">
								{{csrf_field()}}
								<div class="form-group"><input type="text" class="form-control" id="name" value="{{Auth::user()->name}}"></div>
								<div class="form-group"><input type="text" class="form-control" id="surname" value="{{Auth::user()->surname}}"></div>
								<div class="form-group"><input type="text" class="form-control" id="mobile" value="{{Auth::user()->mobile}}"></div>
								<div class="form-group"><input type="date" class="form-control" id="dob" value="{{Auth::user()->dob}}"></div>
								<div class="form-group"><button type="button" class="btn btn-primary">{{__('app.Update')}} </button></div>
							</form>
							<div class="btn-list"><a href="/account">{{__('app.Profile')}}</a></div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</section>
@endsection
@section('foot')
<script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
@endsection
