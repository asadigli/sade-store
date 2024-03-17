<div class="single-img-add sidebar-add-slider">
  <div id="carousel-example-generic" class="carousel">
    <div class="carousel-inner" role="listbox">
      @foreach($poster = App\Poster::inRandomOrder()->take(1)->get() as $post)
      <div class="">
        @if($post->product_id != 0)
              @foreach($prod = App\ProductDetails::where('id',$post->product_id)->get() as $pro)
                  <a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">
                    <img src="//img.sade.store/propo/{{$post->poster}}" alt="{{$post->poster}}">
                  </a>
              @endforeach
        @elseif($post->product_id == 0 && $post->item_id == 0)
              <img src="//img.sade.store/propo/{{$post->poster}}" alt="Sade Store">
        @elseif($post->product_id == 0 && $post->item_id != 0)
            @foreach($newslug = App\News::where('id',$post->item_id)->get() as $nss)
              <a href="/news/{{$nss->slug}}">
                <img src="//img.sade.store/propo/{{$post->poster}}" alt="{{$nss->news_title}}">
              </a>
            @endforeach
        @endif
      </div>
      @endforeach
    </div>
</div>
