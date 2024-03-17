@extends('lts.ms')
@section('head')
<meta property="og:image" itemprop="image" content="http://sade.store/uploads/n/{{$news->news_image_1}}" />
<meta property="og:image:secure_url" itemprop="image" content="https://sade.store/uploads/n/{{$news->news_image_1}}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="{{$news->news_title}}" />

<meta property="og:url" content="https://sade.store/news/{{$news->slug}}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{{ucwords($news->news_title)}}: Sade Store" />
<meta property="og:description" content="{{$news->news_title}}" />
<meta name="description" content="{{$news->news_title}}">
<meta name="keywords" content="@foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<meta name="twitter:card" content="https://sade.store/uploads/n/{{$news->news_image_1}}" />
<meta name="twitter:title" content="{{ucwords($news->news_title)}}: Sade Store" />
<meta name="twitter:url" content="https://sade.store/news/{{$news->slug}}" />
<meta name="twitter:description" content="{{$news->news_title}}" />
<meta name="twitter:image" content="https://sade.store/uploads/n/{{$news->news_image_1}}" />
<title>{{$news->news_title}}</title>
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
									<a href="/all-news" title="{{__('app.Allnews')}}">{{__('app.Allnews')}}</a>
									<span><img data-src="/img/icons/arrow-right.png" alt=">"></span>
								</li>
								<li class="trail-end">
									<a href="/news/{{$news->slug}}" title="{{$news->news_title}}">{{str_limit($news->news_title, $limit = 20, $end = '...')}}</a>
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
										<a href="#" title="{{$news->news_title}}">
											<img data-src="/uploads/n/{{$news->news_image_1}}" alt="{{$news->news_title}}">
										</a>
									</div>
									<div class="divider25"></div>
									<div class="content-post">
										<h3 class="title-post">
											<a href="#" title="{{$news->news_title}}">{{$news->news_title}}</a>
										</h3>
										<ul class="meta-post">
											<li class="comment">
												<a href="#" title="{{trans_choice('app.review_s',App\Newscomment::where('news_id',$news->id)->count())}}">
													 {{trans_choice('app.review_s',App\Newscomment::where('news_id',$news->id)->count())}}
												</a>
											</li>
											<li class="date">
												<a href="#" title="{{$news->news_title}}">
													{{\Carbon\Carbon::parse($news->created_at)->format('d M, Y')}}
												</a>
											</li>
										</ul>
										<div class="entry-post">
											{!! $news->news_body !!}
										</div>
										@if(2==4)
										<div class="social-single">
											<span>SHARE</span>
											<ul class="social-list style2">
												<li>
													<a href="#" title="">
														<i class="fa fa-facebook" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#" title="">
														<i class="fa fa-twitter" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#" title="">
														<i class="fa fa-instagram" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#" title="">
														<i class="fa fa-pinterest" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#" title="">
														<i class="fa fa-dribbble" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#" title="">
														<i class="fa fa-google" aria-hidden="true"></i>
													</a>
												</li>
											</ul>
										</div>
										@endif
									</div>
								</article>
							</div>
							<hr>
							<div class="comment-area">
								<h2 class="comment-title">{{trans_choice('app.review_s',App\Newscomment::where('news_id',$news->id)->count())}}</h2>
								<ol class="comment-list" id="news-comments" data-news="{{$news->id}}" data-empty="{{__('app.No_comment_here')}}"></ol>
								@if(App\Newscomment::where('news_id',$news->id)->count() > 6)
								 <center><a class="mybtn" id="ncomm_load">{{__('app.More')}}</a></center>
								@endif
								<div class="comment-respond">
									<h2 class="comment-reply-title">{{__('app.Leave_a_comment')}}</h2>
									<div class="form-comment">
										<form class="news-commenting">
											<input type="hidden" id="news_id" value="{{$news->id}}">
											<input type="hidden" id="rating" value="5">
											<div class="review-form-name">
												<input id="news_name" @if(Auth::check()) type="hidden" value="{{Auth::user()->name}}" disabled @else type="text" @endif placeholder="{{__('app.Name')}}...">
											</div>
											<div class="review-form-name">
												<input id="news_surname" @if(Auth::check()) type="hidden" value="{{Auth::user()->surname}}" disabled @else type="text" @endif placeholder="{{__('app.Surname')}}...">
											</div>
											<div class="review-form-email">
												<input id="news_email" @if(Auth::check()) type="hidden" value="{{Auth::user()->email}}" disabled @else type="email" @endif placeholder="{{__('app.emailaddress')}}...">
											</div>
											<div class="your-rating queue">
												<span>{{__('app.Your_rating')}}</span>
												@for($u=0;$u<5;$u++)
												<i class="fa fa-star" aria-hidden="true"></i>
												@endfor
											</div>
											<div class="review-form-comment">
												<textarea id="news_body" placeholder="{{__('app.Your_comment')}}..."></textarea>
											</div>
											<div class="btn-submit">
												<button type="button">{{__('app.Post_comment')}}</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						@include('lts.right_section')
					</div>
				</div>
			</section>
@endsection
@section('foot')
@endsection
