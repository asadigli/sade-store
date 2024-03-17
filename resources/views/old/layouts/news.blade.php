<div id="latest-news" class="news">
  <div class="page-header">
    <h2> {{ trans('app.Latest_blogs')}}
      <small>
        <a href="/all-news" title="{{trans('app.all_blogs')}}">{{ trans('app.all_blogs')}}</a>
      </small>
    </h2>
  </div>
  <div class="slider-items-products">
    <div id="latest-news-slider" class="product-flexslider hidden-buttons">
      <div class="slider-items slider-width-col6">
        @php($news = App\News::orderBy('created_at','desc')->get())
        @foreach($news as $news)
        <div class="item">
          <div class="jtv-blog">
            <div class="blog-img"> <a href="/news/{{$news->slug}}" title="{{$news->news_title}}">
              <img class="primary-img" src="//img.sade.store/n/{{$news->news_image_1}}" alt="{{$news->news_title}}"></a>
              <span class="moretag"></span>
            </div>
            <div class="blog-content-jtv">
              <h2><a href="/news/{{$news->slug}}" title="{{$news->news_title}}">{{substr(($news->news_title),0,55)}}
              @if(strlen($news->news_title) > 55)
              ...
              @endif
              </a></h2>
              <span><i class="fa fa-calendar"></i>{{$news->created_at->toFormattedDateString()}}</span>
              <!-- <span class="blog-likes"><i class="fa fa-thumbs-up"></i>149</span> -->
              <span class="blog-comments"><i class="fa fa-comment"></i>
                {{$nsc = App\Newscomment::where('news_id',$news->id)->where('verify',1)->count()}}
              </span>
              <p>{{substr(($news->news_body),0,100)}}
                @if(strlen($news->news_body) > 100)
                ...
                @endif
              </p>
            </div>
          </div>
        </div>
        @endforeach
      </div>
    </div>
  </div>
</div>
