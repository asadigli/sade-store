@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/ss_logo.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{__('app.Allnews_description')}}" />

<meta property="og:url" content="https://sade.store/all-news" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{{__('app.Allnews')}}: Sade Store" />
<meta property="og:description" content="{{__('app.Allnews_description')}}" />
<meta name="description" content="{{__('app.Allnews_description')}}">
<meta name="keywords" content="{{__('app.Allnews_keywords')}}">
<meta name="twitter:card" content="http://sade.store/uploads/ss_logo.jpg" />
<meta name="twitter:title" content="{{__('app.Allnews')}}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/all-news" />
<meta name="twitter:description" content="{{__('app.Allnews_description')}}" />
<meta name="twitter:image" content="http://sade.store/uploads/ss_logo.jpg" />
<title>{{__('app.Allnews')}}</title>
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
									<span><img src="/img/icons/arrow-right.png" alt=""></span>
								</li>
								<li class="trail-end">
									<a href="/all-news" title="{{__('app.Allnews')}}">{{__('app.Allnews')}}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section class="main-blog">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-lg-9">
							<div class="post-wrap">
								@foreach($news as $ns)
								<article class="main-post style1">
									<div class="featured-post">
										<a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">
											<img src="/uploads/n/{{$ns->news_image_1}}" alt="{{$ns->news_title}}" class="ns-img">
										</a>
									</div>
									<div class="content-post">
										<h3 class="title-post">
											<a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">{{$ns->news_title}}</a>
										</h3>
										<ul class="meta-post">
											<li class="comment">
												<a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">
													{{trans_choice('app.review_s',App\Newscomment::where('news_id',$ns->id)->count())}}
												</a>
											</li>
											<li class="date">
												<a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">{{\Carbon\Carbon::parse($ns->created_at)->format('d M, Y')}}</a>
											</li>
										</ul>
										<div class="entry-post">
											<p>{!! strip_tags(str_limit($ns->news_body, $limit = 210, $end = '...')) !!}</p>
											<div class="more-link">
												<a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">{{__('app.Read_more')}}
													<span><img src="/img/icons/right-2.png" alt="{{$ns->news_title}}"></span>
												</a>
											</div>
										</div>
									</div>
								</article>
								@endforeach
							</div>
							@if(2==5)
							<div class="blog-pagination style2">
								<ul class="flat-pagination">
									<li class="prev">
										<a href="#" title="">
											<img src="/img/icons/left-1.png" alt="">Prev Page
										</a>
									</li>
									<li>
										<a href="#" class="waves-effect" title="">01</a>
									</li>
									<li>
										<a href="#" class="waves-effect" title="">02</a>
									</li>
									<li class="active">
										<a href="#" class="waves-effect" title="">03</a>
									</li>
									<li>
										<a href="#" class="waves-effect" title="">04</a>
									</li>
									<li class="next">
										<a href="#" title="">
											Next Page<img src="/img/icons/right-1.png" alt="">
										</a>
									</li>
								</ul>
							</div>
							@endif
						</div>
						@include('lts.right_section')
					</div>
				</div>
			</section>
@endsection
@section('foot')
@endsection
