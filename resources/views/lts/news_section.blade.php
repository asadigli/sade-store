<div class="wrap-imagebox flat-imagebox news_section">
  <div class="flat-row-title style3">
    <h3>{{__('app.Latest_news')}} - <a href="/all-news"><small>{{__('app.Allnews')}}</small></a> </h3>
  </div>
  <div class="rows style1">
    <div class="owl-carousel-4">
      @foreach(App\News::orderBy('created_at','desc')->take(20)->get() as $ns)
      <div class="imagebox style4 style4-4" id="home-news-section">
        <div class="box-image">
          <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">
              <img data-src="/uploads/n/{{$ns->news_image_1}}" class="m-img" alt="{{$ns->news_title}}"/></a>
        </div>
        <div class="box-content">
          <div class="cat-name">
            <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}"><i class="fa fa-calendar"></i> {{$ns->created_at->format('d M, Y')}} <i class="fa fa-comment"></i> {{App\Newscomment::where('news_id',$ns->id)->count()}} </a>
          </div>
          <div class="product-name">
            <a href="/news/{{$ns->slug}}" title="{{$ns->news_title}}">{{$ns->news_title}}</a>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</div>
