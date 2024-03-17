@extends('layouts.master')
@section('css')
<title>{{ ucwords(trans('app.allnews'))}}: Sade Store</title>
<meta name="author" content="Sade Store">
<meta name="description" content="Sade Store xəbərlərini burdan izləyə bilərsiniz">
<meta name="keywords" content="avadanlıqlar, kameralar, komputer hissələri, müasir texnologiyar, xəbərlər, təkliflər, kompaniyalar">
<meta property=”og:title” content=”{{ ucwords(trans('app.allnews'))}}: Sade Store” />
<meta property=”og:description” content=”Sade Store xəbərlərini burdan izləyə bilərsiniz” />
<meta property=”og:image” content=”//img.sade.store/logo.png” />
<meta property=”og:url” content=”//sade.store/all-news” />
@endsection
@section('body')
<div class="breadcrumbs">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ul>
          <li class="home"><a title="{{ trans('app.go_to_home_page')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
          <li><strong title="{{ trans('app.Allnews')}}">{{__('app.Allnews')}}</strong></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section class="main-container col1-layout">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-9 col-sm-push-3" id="center_column">
        <div class="center_column">
          <div class="page-title">
            <h2>{{ trans('app.allnews')}}</h2>
          </div>
          <ul class="blog-posts">
            @foreach($news as $ns)
            <li class="post-item">
              <article class="entry">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="entry-thumb"> <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">
                      <figure><img src="//img.sade.store/n/{{$ns->news_image_1}}" alt="{{$ns->news_title}}"></figure>
                      </a> </div>
                  </div>
                  <div class="col-sm-7">
                    <h3 class="entry-title">
                      <a href="/news/{{$ns->slug}}">
                        {{ str_limit($ns->news_title, $limit = 55, $end = '...') }}
                      </a></h3>
                    <div class="entry-meta-data"> <span class="author"> <i class="fa fa-user"></i>&nbsp; <a href="#">Admin</a> tərəfindən</span>
                      <span class="cat"> <i class="fa fa-folder"></i>&nbsp; <a class="capi" title="{{ trans('app.allnews')}}" href="/all-news">{{ trans('app.news')}} </a> </span>
                      <span class="comment-count"> <i class="fa fa-comment"></i>&nbsp;
                        {{$nsc = App\Newscomment::where('news_id',$ns->id)->where('verify',1)->count()}}
                       </span>
                       <span class="date"><i class="fa fa-calendar"></i>&nbsp; {{$ns->created_at->toFormattedDateString()}}</span> </div>
                    <div class="entry-excerpt">
                      {{substr(($ns->news_body),0,200)}}
                        @if(strlen($ns->news_body) > 200)
                        ...
                        @endif
                    </div>
                    <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}" class="button read-more">{{ trans('app.more')}}&nbsp; <i class="fa fa-angle-double-right"></i></a> </div>
                </div>
              </article>
            </li>
            @endforeach
          </ul>
          <div class="sortPagiBar">
            <div class="pagination-area">
              <ul>
                {{ $news->links() }}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <aside class="sidebar col-xs-12 col-sm-3 col-sm-pull-9">
        <div class="block blog-module">
          <div class="sidebar-bar-title">
            <h3>{{ trans('app.recent_comments')}}</h3>
          </div>
          <div class="block_content">
            <div class="layered">
              <div class="layered-content">
                <ul class="recent-comment-list">
                  @foreach($ncs = App\Newscomment::where('verify',1)->take(4)->get() as $ncs)
                  <li>
                    <h5><a href="#"><i>{{ $ncs->name}} {{$ncs->surname}}</i> </a></h5>
                    <div class="comment">
                    @foreach($newsslug = App\News::where('id',$ncs->news_id)->get() as $newsslug)
                    <a href="/news/{{$newsslug->slug}}" title="{{$newsslug->news_title}}">
                    @endforeach
                        "{{substr(($ncs->message),0,55)}}
                      @if(strlen($ncs->message) > 55)
                      ...
                      @endif "
                    </a>
                    </div>
                  </li>
                  @endforeach
                </ul>
              </div>
            </div>
          </div>
        </div>
        @include('layouts.popularproducts')
      </aside>
    </div>
  </div>
</section>
@endsection
@section('js')
@endsection
