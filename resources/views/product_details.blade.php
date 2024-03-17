@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/proph/{{App\Images::where('pro_id',$pro->id)->first()->image}}" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/proph/{{App\Images::where('pro_id',$pro->id)->first()->image}}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="@if(empty($seods)) {{$pro->productname}} @else @foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach @endif" />
<meta property="og:url" content="https://sade.store/product-details/{{$pro->slug}}" />
<meta property="og:type" content="website" />
<meta property="og:description" content="@if(empty($seods)) {{$pro->productname}} @else @foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach @endif" />
<meta property="og:title" content="{{$pro->productname}}: Sade Store" />
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach - ID {{$pro->main_id}}">
<meta name="keywords" content="ID {{$pro->main_id}}: @foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<meta name="twitter:card" content="https://sade.store/uploads/proph/{{App\Images::where('pro_id',$pro->id)->first()->image}}" />
<meta name="twitter:title" content=" {{$pro->productname}}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/product-details/{{$pro->slug}}" />
<meta name="twitter:description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach - ID {{$pro->main_id}}" />
<meta name="twitter:image" content="https://sade.store/uploads/proph/{{App\Images::where('pro_id',$pro->id)->first()->image}}" />
<title>{{ucfirst($pro->productname)}} - Sade Store</title>
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
								<span><img data-src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-item">
								<a href="/category/{{App\Category::find($pro->category_id)->slug}}" title="{{App\Category::find($pro->category_id)->name}}">{{App\Category::find($pro->category_id)->name}}</a>
								<span><img data-src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-item">
								<a href="/subcategory/{{App\Subcat::find($pro->subcat_id)->slug}}" title="{{App\Subcat::find($pro->subcat_id)->name}}">{{App\Subcat::find($pro->subcat_id)->name}}</a>
								<span><img data-src="/img/icons/arrow-right.png" alt=">"></span>
							</li>
							<li class="trail-end">
								<a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">{{$pro->productname}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-product-detail style1">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="flexslider style1">
							<ul class="slides">
								@if(!empty($img = App\Images::where('pro_id',$pro->id)->first()))
									@foreach(App\Images::where('pro_id',$pro->id)->get() as $k => $img)
										<li data-thumb="/uploads/proph/small/{{$img->image}}">
								      <a href='#' @if($k == 0) id="zoom" @else id="zoom{{$k}}" @endif class='zoom'>
												<img data-src="/uploads/proph/{{$img->image}}" alt='{{$pro->productname}}' width='400' height='300' />
											</a>
								    </li>
										<img class="m-img" alt="{{$pro->productname}}"/>
									@endforeach
								@else
									<img data-src="/uploads/defaultimage.jpg" alt="{{$pro->productname}}"/>
								@endif
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="product-detail style1">
							<span class="bg"></span>
							<div class="header-detail">
								<h4 class="name">{{$pro->productname}}</h4>
								<div class="category">
									{{App\Subcat::find($pro->subcat_id)->name}}
								</div>
								<div class="reviewed">
									<div class="review">
										<div class="queue" id="pro-stars">
											@for($k = 0; $k < 5; $k++)
											<i @if(number_format(DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->avg('rating'),1) > $k) class="fa fa-star" @else class="fa fa-star-o" @endif aria-hidden="true"></i>
											@endfor
										</div>
										<div class="text">
											<span>{{trans_choice('app.review_s',App\Newscomment::where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->count())}}</span>
											<span class="add-review"><a href="#reviews">{{__('app.Add_your_review')}}</a></span>
										</div>
									</div>
									<div class="status-product">
										{{__('app.Availablity')}}
										<span>
											@if($pro->quantity != 0)
											{{__('app.exist_in_stock')}}
											@else
											{{__('app.notavaliable')}}
											@endif
										</span>
									</div>
								</div>
							</div>
							<div class="content-detail">
								<div class="price">
									@if(empty($pro->discount))
											<div class="sale">
			                 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
			                 {{number_format(($pro->price / Session::get('difference')),2)}}
			                 {{Session::get('currency')}}
			                 @else
			                 {{$pro->price}} AZN
			                 @endif
										 </div>
		              @else
										<div class="regular">
				              @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
				              {{number_format(($pro->price / Session::get('difference')),2)}}
				              {{Session::get('currency')}}
				              @else
				              {{number_format($pro->price,2)}} AZN
				              @endif
				            </div>
										<div class="sale">
			                  @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
			                  {{number_format(((($pro->price)-($pro->discount)) / Session::get('difference')),2)}}
			                  {{Session::get('currency')}}
			                  @else
			                  {{number_format(($pro->price - $pro->discount),2)}} AZN
			                  @endif
										</div>
		            @endif
								</div>
								<div class="info-text">{!! str_limit($pro->description, $limit = 300, $end = '...<a href="#description">more</a>')  !!}</div>
								<div class="product-id">
									{{__('app.Product_id')}}: <span class="id">{{$pro->main_id}}</span>
								</div>
							</div>
							<div class="footer-detail">
								<div class="quantity-box">
									<div class="quantity" id="w-list">
										<span class="btn-down"></span>
										<input type="number" name="number" min="1" value="1" max="100" placeholder="{{__('app.Quantity')}}..." readonly>
										<span class="btn-up"></span>
									</div>
								</div>
								<div class="box-cart style2">
									<div class="btn-add-cart">
										@if(Auth::check())
											<a href="#" class="wishlist-btn" data="{{$pro->id}}"> {{__('app.Add_to_wishlist')}} </a>
										@endif
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-product-content style1">
			<ul class="product-detail-bar style1">
				<li class="active" data-url="#description">{{__('app.Description')}}</li>
				<li data-url="#features">{{__('app.Features')}}</li>
				<li data-url="#reviews">{{__('app.Reviews')}}</li>
			</ul>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="product-description">
							<div class="title">{{$pro->descriptionname}}</div>
							<p>{!! $pro->description !!}</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="tecnical-specs" id="description">
							<h4 class="name">{{$pro->productname}}</h4>
							<table>
								<tbody>
										@if(!empty($pro->brand))
											<tr><td>{{ trans('app.brand')}}: </td><td>{{$pro->brand}}</td></tr>
										@endif
										@if(!empty($pro->releasedate))
											<tr><td>{{ trans('app.released_on')}}:</td><td>{{$pro->releasedate}}</td></tr>
										@endif
										@if(!empty($pro->condition))
											<tr><td>{{ trans('app.condition')}}:</td><td>
											@if($pro->condition == 1)
											{{ trans('app.new')}}
											@else
											{{ trans('app.used' )}}
											@endif
											</td></tr>
										@endif
										@if(!empty($pro->dimension))
											<tr><td>{{trans('app.dimension')}}:</td><td>{{$pro->dimension}}</td></tr>
										@endif
										@if(!empty($pro->features) && $pro->features != '<p>---</p>')
											<tr><td>{{ trans('app.features')}}:</td><td>{!! $pro->features !!}</td></tr>
										@endif
										@if(!empty($pro->sadestore_points))
											<tr><td>{{ trans('app.sadestore_points')}}:</td><td>
													 @if($pro->sadestore_points == '0') {{__('app.No_point_for_this_product')}} @else {{ $pro->sadestore_points}} @endif
											</td></tr>
										@endif
										@foreach($prodtab = App\Prodtab::where('product_id',$pro->id)->get() as $pt)
										<tr><td>{{$pt->title}}:</td><td>{{$pt->detail}}</td></tr>
										@endforeach
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="rating" id="reviews">
							<div class="title">{{trans_choice('app.review_s',App\Newscomment::where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->count())}} </div>
							<div class="score">
								<div class="average-score">
									<p class="numb">{{number_format(DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->avg('rating'),1)}}</p>
									<p class="text">{{__('app.Average_score')}}</p>
								</div>
								<div class="queue">
									@for($k = 0; $k < 5; $k++)
									<i @if(number_format(DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->avg('rating'),1) > $k) class="fa fa-star" @else class="fa fa-star-o" @endif aria-hidden="true"></i>
									@endfor
								</div>
							</div>
							<ul class="queue-box">
								@for($h=5;$h>0;$h--)
								<li data-number="{{$h}}" data-total="{{DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->count()}}">
									<span>@for($g=1;$g<=5;$g++)<i class="fa fa-star" aria-hidden="true"></i>@endfor</span>
									<span class="numb-star">{{DB::table('newscomment')->where('verify',1)->where('news_id',0)->where('product_id',$pro->id)->where('rating',$h)->count()}}</span>
								</li>
								@endfor
							</ul>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-review style1">
							<div class="title">{{__('app.Leave_a_comment')}}</div>
							<div class="your-rating queue">
								<span>{{__('app.Your_rating')}}</span>
								@for($l=1;$l<=5;$l++)
								<i class="fa fa-star" aria-hidden="true"></i>
								@endfor
							</div>
							<form class="pro-com-sec">
								<input type="hidden" id="product_id" value="{{$pro->id}}">
								<input type="hidden" id="rating" value="5">
								<div class="review-form-name">
									<input @if(Auth::check()) type="hidden" value="{{Auth::user()->name}}" disabled @else type="text" @endif id="pro-com-name" maxlength="100" placeholder="{{__('app.Name')}}...">
								</div>
								<div class="review-form-name">
									<input @if(Auth::check()) type="hidden" value="{{Auth::user()->surname}}" disabled @else type="text" @endif id="pro-com-surname" maxlength="100" placeholder="{{__('app.Surname')}}...">
								</div>
								<div class="review-form-email">
									<input @if(Auth::check()) type="hidden" value="{{Auth::user()->email}}" disabled @else type="email" @endif id="pro-com-email" maxlength="100" placeholder="{{__('app.emailaddress')}}..." data-error="{{__('app.Enter_valid_email')}}">
								</div>
								<div class="review-form-comment">
									<textarea id="pro-com-body" maxlength="1200" placeholder="{{__('app.Your_comment')}}..."></textarea>
								</div>
								<div class="btn-submit">
									<button type="button">{{__('app.Post_comment')}}</button>
								</div>
							</form>
						</div>
					</div>
					<div class="col-md-12">
						<hr><ul class="review-list" id="pro-comment-list" data-empty="{{__('app.No_comment_here')}}" data-prod="{{$pro->id}}"></ul>
						@if(App\Newscomment::where('product_id',$pro->id)->count() > 6)
						 <center><a class="mybtn" id="pcomm_load">{{__('app.More')}}</a></center>
						@endif
					</div>
				</div>
			</div>
		</section>
		<section class="flat-imagebox style4">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="flat-row-title">
							<h3>{{__('app.Related_products')}}</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="owl-carousel-3">
							@foreach(App\ProductDetails::where('category_id',$pro->category_id)->take(20)->get() as $prod)
							<div class="imagebox style4">
								@if(!empty($prod->discount) && ($prod->discount) != 0)
								<span class="item-sale" title="{{__('app.Discount')}}">{{round((($prod->price)-(($prod->price)-($prod->discount)))*100/($prod->price))}}% </span>
								@endif
								<span class="view-count"><i class="fa fa-eye"></i> {{$prod->view}}</span>
								<div class="box-image">
									@if(!empty($img = App\Images::where('pro_id',$prod->id)->first()))
											<a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}"><img data-src="/uploads/proph/small/{{App\Images::where('pro_id',$prod->id)->first()->image}}" class="m-img" alt="{{$prod->productname}}"/></a>
									@else
											<a><img data-src="/uploads/defaultimage.jpg" alt="{{$prod->productname}}"/></a>
									@endif
								</div>
								<div class="box-content">
									<div class="cat-name"></div>
									<div class="product-name">
										<a href="/product-details/{{$prod->slug}}" title="{{$prod->productname}}">{{$prod->productname}}</a>
									</div>
									<div class="price">
										<span class="sale">
											@if(empty($prod->discount))
												 @if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
												 {{number_format(($prod->price / Session::get('difference')),2)}}
												 {{Session::get('currency')}}
												 @else
												 {{$prod->price}} AZN
												 @endif
											@else
													@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
													{{number_format(((($prod->price)-($prod->discount)) / Session::get('difference')),2)}}
													{{Session::get('currency')}}
													@else
													{{number_format(($prod->price - $prod->discount),2)}} AZN
													@endif
												</span>
										<span class="regular">
											@if(!empty(Session::get('currency')) && Session::get('currency') != 'AZN')
											{{number_format(($prod->price / Session::get('difference')),2)}}
											{{Session::get('currency')}}
											@else
											{{number_format($prod->price,2)}} AZN
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
