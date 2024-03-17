@extends('lts.ms')
@section('head')
<meta property=”og:image” content=”https://img.sade.store/logo.png” />
<meta property=”og:type” content="{{__('app.tag')}}" />
<meta property=”og:title” content=”{{__('app.Tag_list')}}: Sade Store” />
<meta property=”og:description” content=”{!!trans('app.Result_for_tag_desc',['word' => $tag])!!}” />
<meta name="description" content="{!!trans('app.Result_for_tag_desc',['word' => $tag])!!}">
<meta name="keywords" content="{{$tag}},{{__('app.Keywords')}},{{__('app.Similar_comments')}},{{__('app.Comments')}},{{__('app.Feedbacks')}},{{__('app.Tags')}}">
<meta name=”twitter:card” content=”https://img.sade.store/logo.png” />
<meta name=”twitter:title” content=”#{{$tag}}: Sade Store” />
<meta name=”twitter:description” content=”{!!trans('app.Result_for_tag_desc',['word' => $tag])!!}” />
<meta name=”twitter:image” content=”https://img.sade.store/logo.png” />
<title>{{__('app.Tag_list')}} - Sade Store</title>
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
									<a href="#" title="{{__('app.Tag_list')}}">{{__('app.Tag_list')}}</a>
									<span><img data-src="/img/icons/arrow-right.png" alt=">"></span>
								</li>
								<li class="trail-end">
									<a href="/tags/{{$tag}}" title="#{{$tag}}">"#{{$tag}}"</a>
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
							<div class="comment-area">
								<h2 class="comment-title">{!!trans('app.Result_for_tag_s',['word' => $tag])!!}</h2><hr>
								<ol class="comment-list" id="comments" data-tag="{{$tag}}" data-empty="{{__('app.No_comment_here')}}"></ol>
								@if(App\Newscomment::where('message','LIKE','%'.'#'.$tag.'%')->count() > 6)
								 <center><a class="mybtn" id="comm_load">{{__('app.More')}}</a></center>
								@endif
							</div>
						</div>
						@include('lts.right_section')
					</div>
				</div>
			</section>
@endsection
@section('foot')
@endsection
