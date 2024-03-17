@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/pg/{{$page->image}}" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/pg/{{$page->image}}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{$page->title}}" />
<meta property="og:url" content="https://sade.store/store/{{$page->slug}}" />
<meta property="og:type" content="website" />
<meta property="og:description" content="{{$page->title}}" />
<meta property="og:title" content="{{ $page->shortname}}: Sade Store" />
<meta name="description" content="{{$page->title}}">
<meta name="keywords" content="@foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<meta name="twitter:card" content="https://sade.store/uploads/pg/{{$page->image}}" />
<meta name="twitter:title" content="{{ $page->shortname}}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/store/{{$page->slug}}" />
<meta name="twitter:description" content="{{$page->title}}" />
<meta name="twitter:image" content="https://sade.store/uploads/pg/{{$page->image}}" />
<title>{{ $page->shortname}}: Sade Store</title>
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
									<span><img src="/img/icons/arrow-right.png" alt=""></span>
								</li>
								<li class="trail-item">
									<a href="#" title="">{{__('app.Pages')}}</a>
									<span><img src="/img/icons/arrow-right.png" alt=""></span>
								</li>
								<li class="trail-end">
									<a href="/store/{{$page->slug}}" title="{{$page->shortname}}">{{$page->shortname}}</a>
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
								<article class="main-post single">
									<div class="featured-post">
										<a href="/store/{{$page->slug}}" title="{{$page->title}}">
											<img src="/uploads/pg/{{$page->image}}" alt="{{$page->title}}">
										</a>
									</div>
									<div class="divider25"></div>
									<div class="content-post">
										<h3 class="title-post">
											<a href="#" title="">{{$page->shortname}}</a>
										</h3>
										<div class="entry-post">
											{!! $page->details !!}
										</div>
									</div>
								</article>
							</div>
							<div class="blog-pagination single">
								<ul class="flat-pagination style2">
									@if(isset($previous))
									<li class="prev">
										<a href="/store/{{$previous}}" title="">
											<img src="/img/icons/left-1.png" alt="">{{App\Page::where('slug',$previous)->first()->shortname}}
										</a>
									</li>
									@endif
									@if(isset($next))
									<li class="next">
										<a href="/store/{{$next}}" title="">
											{{App\Page::where('slug',$next)->first()->shortname}}<img src="/img/icons/right-1.png" alt="">
										</a>
									</li>
									@endif
								</ul>
							</div>
						</div>
						@include('lts.right_section')
					</div>
				</div>
			</section>
@endsection
@section('foot')
@endsection
