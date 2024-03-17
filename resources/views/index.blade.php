@extends('lts.ms')
@section('head')
<meta name="description" content="{{__('app.Home_description')}}">
<meta name="keywords" content="{{__('app.Home_keywords')}}">
<meta property="og:title" content="Əsas səhifə: Sade Store" />
<meta property="og:description" content="{{__('app.Home_description')}}" />
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:type" content="website" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{__('app.Home_description')}}" />
<meta property="og:url" content="https://sade.store" />
<title>Sade Store</title>
@endsection
@section('body')
@include('lts.header')
<div class="divider30"></div>
		 	@include('lts.slider')
			@include('lts.features')
			<main id="home-4">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-4">
							<div class="sidebar">
								@if(5==6)
								<div class="widget widget-count">
									<div class="widget-title">
										<h3>Special Offer</h3>
									</div>
									<div class="counter style1 v1">
										<span class="sale">Save $60.00</span>
										<div class="counter-content">
											<div class="box-content">
												<div class="box-image owl-carousel-1">
													<a href="#" title="">
														<img data-src="/img/banner_boxes/05.png" alt="">
													</a>
													<a href="#" title="">
														<img data-src="/img/banner_boxes/05.png" alt="">
													</a>
													<a href="#" title="">
														<img data-src="/img/banner_boxes/05.png" alt="">
													</a>
												</div>
												<div class="product-name">
													<a href="#" title="">Harman Kardon</a>
												</div>
												<div class="price">
													<span class="sale">$1,250.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div><!-- /.box-content -->
											<div class="count-down">
												<div class="square">
													<div class="numb">
														14
													</div>
													<div class="text">
														DAYS
													</div>
												</div>
												<div class="square">
													<div class="numb">
														09
													</div>
													<div class="text">
														HOURS
													</div>
												</div>
												<div class="square">
													<div class="numb">
														23
													</div>
													<div class="text">
														SECS
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="widget widget-products">
									<div class="widget-title">
										<h3>Best Seller</h3>
									</div>
									<ul class="product-list">
										<li>
											<div class="img-product">
												<a href="#" title="">
													<img data-src="/img/blog/14.jpg" alt="">
												</a>
											</div>
											<div class="info-product">
												<div class="name">
													<a href="#" title="">Razer RZ02-01071 <br />500-R3M1</a>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>
										<li>
											<div class="img-product">
												<a href="#" title="">
													<img data-src="/img/blog/13.jpg" alt="">
												</a>
											</div>
											<div class="info-product">
												<div class="name">
													<a href="#" title="">Notebook Black Spire <br />V Nitro VN7-591G</a>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
												</div>
												<div class="price">
													<span class="sale">$24.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>
										<li>
											<div class="img-product">
												<a href="#" title="">
													<img data-src="/img/blog/12.jpg" alt="">
												</a>
											</div>
											<div class="info-product">
												<div class="name">
													<a href="#" title="">Apple iPad Mini <br />G2356</a>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
													<i class="fa fa-star" aria-hidden="true"></i>
												</div>
												<div class="price">
													<span class="sale">$90.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>
									</ul>
								</div><!-- /.widget widget-products -->
								<div class="widget widget-accessories">
									<div class="widget-title">
										<h3>Accessories</h3>
									</div>
									<div class="owl-carousel-7">
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<a href="#" title="">
														<img data-src="/img/product/other/06.jpg" alt="">
													</a>
												</div><!-- /.box-image -->
												<div class="box-content">
													<div class="cat-name">
														<a href="#" title="">Cameras</a>
													</div>
													<div class="product-name">
														<a href="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</a>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div><!-- /.box-content -->
											</div><!-- /.imagebox -->
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<a href="#" title="">
														<img data-src="/img/product/other/05.jpg" alt="">
													</a>
												</div><!-- /.box-image -->
												<div class="box-content">
													<div class="cat-name">
														<a href="#" title="">Cameras</a>
													</div>
													<div class="product-name">
														<a href="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</a>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div><!-- /.box-content -->
											</div><!-- /.imagebox -->
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<a href="#" title="">
														<img data-src="/img/product/other/06.jpg" alt="">
													</a>
												</div><!-- /.box-image -->
												<div class="box-content">
													<div class="cat-name">
														<a href="#" title="">Cameras</a>
													</div>
													<div class="product-name">
														<a href="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</a>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div><!-- /.box-content -->
											</div><!-- /.imagebox -->
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<a href="#" title="">
														<img data-src="/img/product/other/05.jpg" alt="">
													</a>
												</div><!-- /.box-image -->
												<div class="box-content">
													<div class="cat-name">
														<a href="#" title="">Cameras</a>
													</div>
													<div class="product-name">
														<a href="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</a>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
				        @endif
								@include('lts.posters')
							</div>
						</div>
						<div class="col-lg-9 col-md-8">
							<div class="wrap-imagebox flat-imagebox">
								<div class="product-tab">
									<ul class="tab-list">
										<li class="active">{{__('app.latestproduct')}}</li>
										<li>{{__('app.Top_selling_products')}}</li>
									</ul>
								</div>
								<div class="box-product">
									<div class="row">
										@foreach(App\ProductDetails::orderBy('created_at','desc')->where('quantity','!=',0)->take(12)->get() as $prodet)
										<div class="col-lg-4 col-sm-12">
											<div class="product-box style2 v1">
												<div class="imagebox">
													@if(!empty($prodet->discount) && ($prodet->discount) != 0)
													<span class="item-sale" title="{{__('app.Discount')}}">{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}% </span>
													@endif
													<span class="view-count"><i class="fa fa-eye"></i> {{$prodet->view}}</span>
													<div class="box-image owl-carousel-1">
														@if(!empty($img = App\Images::where('pro_id',$prodet->id)->first()))
															@foreach(App\Images::where('pro_id',$prodet->id)->get() as $img)
																<a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}">
																		<img src="/css/ldng.svg" data-src="/uploads/proph/small/{{$img->image}}" class="m-img"  alt="{{$prodet->productname}}"/>
																</a>
															@endforeach
														@else
															<img data-src="/uploads/defaultimage.jpg" alt="{{$prodet->productname}}"/>
														@endif
													</div>
													<div class="box-content">
														<div class="cat-name">
															<a href="#" title=""> {{App\Subcat::find($prodet->subcat_id)->name}} </a>
														</div>
														<div class="product-name">
															<a title="{{$prodet->productname}}" href="/product-details/{{$prodet->slug}}">
						                    {{ $prodet->productname }}</a>
														</div>
														<div class="price">
															<span class="sale">
																@if(empty($prodet->discount))
																	 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																	 {{number_format(($prodet->price / Session::get('difference')),2)}}
																	 {{Session::get('currency')}}
																	 @else
																	 {{$prodet->price}} AZN
																	 @endif
																@else
																		@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																		{{number_format(((($prodet->price)-($prodet->discount)) / Session::get('difference')),2)}}
																		{{Session::get('currency')}}
																		@else
																		{{number_format(($prodet->price - $prodet->discount),2)}} AZN
																		@endif
																	</span>
															<span class="regular">
																@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																{{number_format(($prodet->price / Session::get('difference')),2)}}
																{{Session::get('currency')}}
																@else
																{{number_format($prodet->price,2)}} AZN
																@endif
															</span>
															@endif
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															@if(Auth::check())
															<a href="#" class="wishlist-btn" data="{{$prodet->id}}">{{__('app.Add_to_wishlist')}}</a>
															@endif
														</div>
													</div>
												</div>
											</div>
										</div>
										@endforeach
									</div>
									<div class="row">
										@foreach(App\ProductDetails::orderBy('view','desc')->where('quantity','!=',0)->take(12)->get() as $prodet)
										<div class="col-lg-4 col-sm-12">
											<div class="product-box style2 v1">
												<div class="imagebox">
													@if(!empty($prodet->discount) && ($prodet->discount) != 0)
													<span class="item-sale" title="{{__('app.Discount')}}">{{round((($prodet->price)-(($prodet->price)-($prodet->discount)))*100/($prodet->price))}}%  </span>
													@endif
													<span class="view-count"><i class="fa fa-eye"></i> {{$prodet->view}}</span>
													@if($prodet->created_at->diffInDays(date('Y-m-d'), false) < 120)
													<span class="item-new">{{__('app.NEW')}} </span>
													@endif
													<div class="box-image owl-carousel-1">
														@if(!empty($img = App\Images::where('pro_id',$prodet->id)->first()))
															@foreach(App\Images::where('pro_id',$prodet->id)->get() as $img)
																<a href="/product-details/{{$prodet->slug}}" title="{{$prodet->productname}}">
																		<img data-src="/uploads/proph/small/{{$img->image}}" class="m-img" alt="{{$prodet->productname}}"/></a>
															@endforeach
														@else
															<img data-src="/uploads/defaultimage.jpg" alt="{{$prodet->productname}}"/>
														@endif
													</div>
													<div class="box-content">
														<div class="cat-name">
															<a href="/subcategory/{{App\Subcat::find($prodet->subcat_id)->slug}}" title="{{App\Subcat::find($prodet->subcat_id)->name}}"> {{App\Subcat::find($prodet->subcat_id)->name}} </a>
														</div>
														<div class="product-name">
															<a title="{{$prodet->productname}}" href="/product-details/{{$prodet->slug}}">{{ $prodet->productname }}</a>
														</div>
														<div class="price">
															<span class="sale">
																@if(empty($prodet->discount))
																	 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																	 {{number_format(($prodet->price / Session::get('difference')),2)}}
																	 {{Session::get('currency')}}
																	 @else
																	 {{$prodet->price}} AZN
																	 @endif
																@else
																		@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																		{{number_format(((($prodet->price)-($prodet->discount)) / Session::get('difference')),2)}}
																		{{Session::get('currency')}}
																		@else
																		{{number_format(($prodet->price - $prodet->discount),2)}} AZN
																		@endif
																	</span>
															<span class="regular">
																@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
																{{number_format(($prodet->price / Session::get('difference')),2)}}
																{{Session::get('currency')}}
																@else
																{{number_format($prodet->price,2)}} AZN
																@endif
															</span>
															@endif
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															@if(Auth::check())
															<a href="#" class="wishlist-btn" data="{{$prodet->id}}">
																{{__('app.Add_to_wishlist')}}
															</a>
															@else

															@endif
														</div>
													</div>
												</div>
											</div>
										</div>
										@endforeach
									</div>
								</div>
							</div>
							@include('lts.our_pros')
							@include('lts.most_viewed')
						</div>
					</div>
				</div>
			</main>
			<section class="flat-row flat-highlights style1">
				<div class="container">
					<div class="row">
						@foreach($sub_for_pro as $sb)
						<div class="col-md-4">
							<div class="flat-row-title">
								<h3>{{$sb->name}}</h3>
							</div>
							<ul class="product-list style1">
								@foreach(App\ProductDetails::where('subcat_id',$sb->id)->take(3)->get() as $pro)
								<li>
									<div class="img-product">
										@if(!empty($img = App\Images::where('pro_id',$pro->id)->first()))
											<a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}"><img data-src="/uploads/proph/small/{{App\Images::where('pro_id',$pro->id)->first()->image}}" alt="{{$pro->productname}}"/></a>
										@else
											<img data-src="/uploads/defaultimage.jpg" alt="{{$pro->productname}}"/>
										@endif
									</div>
									<div class="info-product">
										<div class="name">
											<a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">{{$pro->productname}}</a>
										</div>
										<div class="queue">
											@for($k = 0; $k < 5; $k++)
											<i @if(number_format(DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->avg('rating'),1) > $k) class="fa fa-star" @else class="fa fa-star-o" @endif aria-hidden="true"></i>
											@endfor
										</div>
										<div class="price">
											<span class="sale">
												@if(empty($pro->discount))
													 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
													 {{number_format(($pro->price / Session::get('difference')),2)}}
													 {{Session::get('currency')}}
													 @else
													 {{$pro->price}} AZN
													 @endif
												@else
														@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
														{{number_format(((($pro->price)-($pro->discount)) / Session::get('difference')),2)}}
														{{Session::get('currency')}}
														@else
														{{number_format(($pro->price - $pro->discount),2)}} AZN
														@endif
													</span>
											<span class="regular">
												@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
												{{number_format(($pro->price / Session::get('difference')),2)}}
												{{Session::get('currency')}}
												@else
												{{number_format($pro->price,2)}} AZN
												@endif
											</span>
											@endif
										</div>
									</div>
									<div class="clearfix"></div>
								</li>
								@endforeach
							</ul>
						</div>
						@endforeach
						<div class="col-md-12">
							@include('lts.news_section')
						</div>
					</div>
				</div>
			</section>
			@include('lts.brands')
@endsection
@section('foot')
@endsection
