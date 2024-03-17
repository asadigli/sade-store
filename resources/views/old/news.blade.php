@extends('layouts.master')
@section('css')
<meta name="description" content="@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach">
<meta name="keywords" content="@foreach ($seots as $seot){{ $loop->first ? '' : ', ' }}{{ $seot->tag }}@endforeach">
<title>{{ucwords($news->news_title)}}: Sade Store</title>
<meta property=”og:title” content=”{{ucwords($news->news_title)}}: Sade Store” />
<meta property=”og:description” content=”@foreach ($seods as $seod){{ $loop->first ? '' : ', ' }}{{ $seod->description }}@endforeach” />
<meta property=”og:image” content=”//img.sade.store/logo.png” />
<meta property=”og:url” content=”//sade.store/news/{{$news->slug}}” />
@endsection
@section('body')
  <section class="blog_post">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-9">
          <div class="entry-detail">
            <div class="page-title">
              <h1>{{$news->news_title}}</h1>
            </div>
            <div class="entry-photo">
              <figure><img src="//img.sade.store/n/{{$news->news_image_1}}" alt="{{$news->news_title}}"></figure>
            </div>
            <div class="entry-meta-data">
              <span class="cat"> <i class="fa fa-folder"></i><a href="/all-news" title="{{trans('app.all_blogs')}}"> {{ trans('app.all_blogs')}} </a></span>
              @if(1 == 2)
              <!-- <span class="comment-count"> <i class="fa fa-comment"></i>&nbsp; 3 </span> -->
              @endif
              <span class="date"><i class="fa fa-calendar"></i> {{Carbon\Carbon::parse($news->created_at)->format('d.m.Y')}} <i>({{Carbon::parse($news->created_at)->diffForHumans()}})</i> </span>
            </div>
            <div class="content-text clearfix justify">
                 {!! $news->news_body !!}
            </div>
            @if(1 == 2)
            <!-- <div class="entry-tags"> <span>Tags:</span> <a href="#">beauty,</a> <a href="#">medicine,</a> <a href="#">health</a> </div> -->
            @endif
          </div>
          <div class="single-box">
            <h2>{{ trans('app.other_news')}}</h2>
            <div class="slider-items-products">
              <div id="related-posts" class="product-flexslider hidden-buttons">
                <div class="slider-items slider-width-col4 fadeInUp">
                  @php($ns = App\News::where('id', '!=', $news->id)->get())
                  @foreach($ns as $ns)
                  <div class="product-item">
                    <article class="entry">
                      <div class="entry-thumb">
                        <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">
                          <img src="//img.sade.store/n/{{$ns->news_image_1}}" alt="{{$ns->news_title}}">
                        </a>
                      </div>
                      <div class="entry-info">
                        <h3 class="entry-title"><a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">{{substr(($ns->news_title),0,28)}}
                        @if(strlen($ns->news_title) > 28)
                        ...
                        @endif</a></h3>
                        <div class="entry-meta-data">
                          @if( 3 == 5)
                          <!-- <span class="comment-count">
                          <i class="fa fa-comment-o">&nbsp;</i> 1 </span> -->
                          @endif
                          <span class="date"> <i class="fa fa-calendar">&nbsp;</i> {{$ns->created_at->toFormattedDateString()}} </span> </div>
                        <div class="entry-more"> <a href="/news/{{$ns->slug}}" class="capi" title="{{$ns->news_title}}">{{ trans('app.read_more')}}</a> </div>
                      </div>
                    </article>
                  </div>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
          <div class="single-box">
            <h2 class="capi">{{ trans('app.comments')}}</h2>
            <div class="comment-list">
              <ul>
                @php($newscomment = App\Newscomment::where('verify',1)->where('news_id',$news->id)->orderBy('created_at','desc')->get())
                @if(count($newscomment) == 0)
                <br>
                <center><i class="gray capi">{{ trans('app.no_comment_here')}}</i></center>
                <br>
                @endif
                @foreach($newscomment as $nc)
                <li>
                  <div class="avartar"> <img src="//img.sade.store/user.png" alt="Avatar" class="op-06"> </div>
                  <div class="comment-body">
                    <div class="comment-meta"> <span class="author"><a href="#">{{$nc->name}} {{$nc->surname}}</a></span>
                      <span class="date"><i><small>{{$nc->created_at->diffForHumans()}}</small> </i> </span>
                    </div>
                    <div class="comment">
                      {!! nl2br(e($nc->message)) !!}
                    </div>
                  </div>
                </li>
                @endforeach
              </ul>
            </div>
          </div>
          <div class="single-box comment-box">
            <h2>{{trans('app.leave_a_comment')}}</h2>
            <div class="coment-form">
              <p>{{ trans('app.here_you_can_say_your_opinion_about_the_news')}}</p>
              @if(Session::has('news_comment_added'))
                <center>
                  <div class="col-md-4 w-100">
                    <div class="alert alert-success">
                      {{Session::get('news_comment_added')}}
                    </div>
                  </div>
                </center>
              @endif
              <form class="" action="/addnewscomment" method="post">
                {{ csrf_field() }}
                <input type="hidden" name="news_id" value="{{$news->id}}">
                <div class="row">
                  <div class="col-sm-6">
                    <label class="capi" for="name">{{ trans('app.name')}}</label>
                    <input id="name" name="name" type="text" minlength="2" maxlength="50" class="form-control" placeholder="{{trans('app.your_name')}}..." required>
                  </div>
                  <div class="col-sm-6">
                    <label class="capi" for="email">{{trans('app.surname')}}</label>
                    <input id="email" name="surname" type="text" minlength="2" maxlength="50" class="form-control" placeholder="{{ trans('app.your_surname')}}..." required>
                  </div>
                  <div class="col-sm-12">
                    <label class="capi" for="website">{{ trans('app.email')}}</label>
                    <input id="website" name="email" type="email" minlength="2" maxlength="70" class="form-control" placeholder="{{ trans('app.your_email')}}..." required>
                  </div>
                  <div class="col-sm-12">
                    <label class="capi" for="message">{{ trans('app.message')}}</label>
                    <textarea name="message" name="message" id="message" minlength="5" maxlength="500" rows="8" class="form-control" placeholder="{{ trans('app.your_message')}}..." required></textarea>
                  </div>
                </div>
                <button class="button" type="submit"><span>{{ trans('app.post_comment')}}</span></button>
              </form>
            </div>
          </div>
        </div>
        <aside class="sidebar col-xs-12 col-sm-3">
          @include('layouts.popularproducts')
        </aside>
      </div>
    </div>
  </section>
@endsection
@section('js')
@endsection
