@extends('lts.ms')
@section('head')
@if(!empty($subcat))
<meta property="og:url" content="https://sade.store/subcategory/{{$subcat->slug}}" />
<meta name="twitter:url" content="https://sade.store/subcategory/{{$subcat->slug}}" />
<meta property="og:image" itemprop="image" content="@if($subcat->poster != 'default.jpg') http://sade.store/ph/sct/{{$subcat->poster}} @else http://sade.store/catposter.jpg @endif" />
<meta property="og:image:secure_url" itemprop="image" content="@if($subcat->poster != 'default.jpg') https://sade.store/ph/sct/{{$subcat->poster}} @else https://sade.store/catposter.jpg @endif" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach" />
<meta property="twitter:image" content="@if($subcat->poster != 'default.jpg') https://sade.store/ph/sct/{{$subcat->poster}} @else https://sade.store/catposter.jpg @endif" />
<meta property="twitter:card" content="@if($subcat->poster != 'default.jpg') https://sade.store/ph/sct/{{$subcat->poster}} @else https://sade.store/catposter.jpg @endif" />
@else
<meta property="og:url" content="https://sade.store/category/{{$cat->slug}}" />
<meta name="twitter:url" content="https://sade.store/category/{{$cat->slug}}" />
<meta property="og:image" itemprop="image" content="@if($cat->poster != 'default.jpg') http://sade.store/ph/sct/{{$cat->poster}} @else http://sade.store/catposter.jpg @endif" />
<meta property="og:image:secure_url" itemprop="image" content="@if($cat->poster != 'default.jpg') https://sade.store/ph/sct/{{$cat->poster}} @else https://sade.store/catposter.jpg @endif" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach" />
<meta property="twitter:image" content="@if($cat->poster != 'default.jpg') https://sade.store/ph/sct/{{$cat->poster}} @else https://sade.store/catposter.jpg @endif" />
<meta property="twitter:card" content="@if($cat->poster != 'default.jpg') https://sade.store/ph/sct/{{$cat->poster}} @else https://sade.store/catposter.jpg @endif" />
@endif
<meta property="og:title" content="@if(!empty($subcat)) {{$subcat->name}} @else {{$cat->name}} @endif - Sade Store" />
<meta name="twitter:title" content="@if(!empty($subcat)) {{$subcat->name}} @else {{$cat->name}} @endif - Sade Store" />
<meta property="og:type" content="website" />
<meta property="og:description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach" />
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach">
<meta name="keywords" content="@foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<meta name="twitter:description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach" />
<title>@if(!empty($subcat)) {{$subcat->name}} @else {{$cat->name}} @endif - Sade Store</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
@endsection
@section('body')
@include('lts.head2')
		<section class="flat-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li class="trail-item">
								<a href="/" title="">{{__('app.Home')}}</a>
								<span><img src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							@if(!empty($subcat))
							<li class="trail-item">
								<a href="/category/{{$cat->slug}}" title="{{__('app.Categories')}}">{{App\Category::find($subcat->parent_id)->name}}</a>
								<span><img src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-end" data-slug="{{$subcat->slug}}">
								<a href="/subcategory/{{$subcat->slug}}" title="{{$subcat->name}}">{{$subcat->name}}</a>
							</li>
							@else
							<li class="trail-item">
								<a href="#" title="{{__('app.Categories')}}">{{__('app.Categories')}}</a>
								<span><img src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-end" data-slug="{{$cat->slug}}">
								<a href="/category/{{$cat->slug}}" title="{{$cat->name}}">{{$cat->name}}</a>
							</li>
							@endif
						</ul>
					</div>
				</div>
			</div>
		</section>
		<main id="shop">
			<div class="container">
				<div class="row">
					@include('lts.filters')
					<div class="col-lg-9 col-md-8">
						<div class="main-shop">
							<div class="wrap-imagebox">
								<div class="flat-row-title">
									<h3>@if(!empty($subcat)) {{$subcat->name}} @else {{$cat->name}} @endif</h3>
									<span>{{trans("app.showing_out",['cnt' => $cnt, 'current' => 10])}}</span>
									<div class="clearfix"></div>
								</div>
								<div class="sort-product">
									<div class="sort">
										@if(substr(Request::root(),7,9) == "localhost")
											<div class="popularity">
												<select name="popularity">
													<option value="0">{{__('app.Latest')}}</option>
													<option value="1">{{__('app.Cheap_to_expensive')}}</option>
													<option value="2">{{__('app.Expensive_to_cheap')}}</option>
												</select>
											</div>
										@endif
										<div class="showed">
											<select name="showed">
												@for($o=6;$o<=count($pros);$o=$o+6)
												<option value="{{$o}}">{{trans_choice('app.Show_s',$o)}}</option>
												@endfor
											</select>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="tab-product">
									<div class="row sort-box" id="my-prod-list" @if(Auth::check()) data-translate="{{__('app.Add_to_wishlist')}}" @endif><img class="big-lding" src="/css/giphy.gif"></div>
									<div class="sort-box">
										<div style="height: 9px;"></div>
									</div>
								</div>
							</div>
							<div class="blog-pagination">
								<center><a class="mybtn btn-load">{{__('app.Load_more')}}</a> </center>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<section class="flat-imagebox style4">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="flat-row-title">
							<h3>{{__('app.Latest_choices')}}</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="owl-carousel-3 style3">
							@foreach(App\ProductDetails::orderBy('created_at','desc')->take(20)->get() as $pr)
							<div class="imagebox style4">
								<div class="box-image">
									@if(!empty($img = App\Images::where('pro_id',$pr->id)->first()))
										<a href="/product-details/{{$pr->slug}}" title="{{$pr->productname}}"><img src="/uploads/proph/small/{{$img->image}}" alt="{{$pr->productname}}"/></a>
									@else
										<img src="/uploads/defaultimage.jpg" alt="{{$pr->productname}}"/>
									@endif
								</div>
								<div class="box-content">
									<div class="cat-name">
										<a href="/product-details/{{$pr->slug}}" title="{{$pr->productname}}">{{App\Subcat::find($pr->subcat_id)->name}}</a>
									</div>
									<div class="product-name">
										<a href="/product-details/{{$pr->slug}}" title="{{$pr->productname}}">{{$pr->productname}}</a>
									</div>
									<div class="price">
										<span class="sale">
											@if(empty($pr->discount))
												 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
												 {{number_format(($pr->price / Session::get('difference')),2)}}
												 {{Session::get('currency')}}
												 @else
												 {{$pr->price}} AZN
												 @endif
											@else
													@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
													{{number_format(((($pr->price)-($pr->discount)) / Session::get('difference')),2)}}
													{{Session::get('currency')}}
													@else
													{{number_format(($pr->price - $pr->discount),2)}} AZN
													@endif
												</span>
												<br>
										<span class="regular">
											@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
											{{number_format(($pr->price / Session::get('difference')),2)}}
											{{Session::get('currency')}}
											@else
											{{number_format($pr->price,2)}} AZN
											@endif
										</span>
										@endif
									</div>
								</div>
							</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
		</section>
@endsection
@section('foot')
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
@endsection
