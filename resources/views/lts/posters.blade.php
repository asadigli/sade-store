@if($pr = App\Poster::all()->count() != 0)
<div class="widget banner-box">
  <div class="inner-box">
    @foreach($poster = App\Poster::inRandomOrder()->take(1)->get() as $post)
      @if($post->product_id != 0)
            @foreach($prod = App\ProductDetails::where('id',$post->product_id)->get() as $pro)
                <a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">
                  <img data-src="//img.sade.store/propo/{{$post->poster}}" alt="{{$post->poster}}">
                </a>
            @endforeach
      @elseif($post->product_id == 0 && $post->item_id == 0)
            <img data-src="//img.sade.store/propo/{{$post->poster}}" alt="Sade Store">
      @elseif($post->product_id == 0 && $post->item_id != 0)
          @foreach($newslug = App\News::where('id',$post->item_id)->get() as $nss)
            <a href="/news/{{$nss->slug}}">
              <img data-src="//img.sade.store/propo/{{$post->poster}}" alt="{{$nss->news_title}}">
            </a>
          @endforeach
      @endif
    @endforeach
  </div>
</div>
@endif
