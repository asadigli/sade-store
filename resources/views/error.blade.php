@extends('lts.ms')
@section('head')
<meta name="googlebot-news" content="noindex" />
<meta name="googlebot" content="noindex" />
<meta name="robots" content="noindex, nofollow">
<title>{{__('app.Error')}}</title>
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
							<li class="trail-end"><a href="#">{{__('app.Error')}}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-error">
			<div class="container">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<div class="wrap-error center">
							<div class="header-error">
								<h1 style="color: #14bfb1;font-size: 54px;font-weight: bold;">{{__('app.Failed')}}</h1>
								<p>{{__('app.Page_you_are_looking_not_found')}}</p>
							</div>
						</div>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</section>
@endsection
