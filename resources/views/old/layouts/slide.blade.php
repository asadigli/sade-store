<div class="main-slider">
  <div class="slider">
    <div id="mainSlider" class="nivoSlider slider-image">
      <img src="//img.sade.store/images/s/1.jpg" alt="Sade Store" title="#slideone"/>
      <img src="//img.sade.store/images/s/2.jpg" alt="Sade Store" title="#slidetwo"/>
    </div>
    <div id="slideone" class="nivo-html-caption slider-caption-1">
      <div class="slider-progress"></div>
      <div class="slide-text">
        <div class="middle-text">
          <div class="cap-dec">
            <h1 class="cap-dec wow rubberBand" data-wow-duration="1.1s" data-wow-delay="0s">{{ trans('app.latest')}}</h1>
            <h2 class="cap-dec wow rubberBand" data-wow-duration="1.3s" data-wow-delay="0s">{{ date('Y')}} {{ trans('app.products')}}</h2>
            <p class="cap-dec wow rubberBand" data-wow-duration="1.5s" data-wow-delay="0s"> {{ trans('app.latest_products_for_special_buyers')}}</p>
          </div>
          <div class="cap-readmore wow rubberBand" data-wow-duration=".9s" data-wow-delay=".5s">
          </div>
        </div>
      </div>
    </div>
    <div id="slidetwo" class="nivo-html-caption slider-caption-2">
      <div class="slider-progress"></div>
      <div class="slide-text slide-text-2">
        <div class="middle-text">
          <div class="cap-dec">
            <h1 class="wow swing" data-wow-duration="1.1s" data-wow-delay="0s">Sade Store  </h1>
            <h2 class="wow swing" data-wow-duration="1.1s" data-wow-delay="0s">{{ trans('app.discounts')}}</h2>
            <p class="wow swing" data-wow-duration="1.3s" data-wow-delay="0s"> {{ trans('app.buy_more_earn_more')}}</p>
          </div>
          <div class="cap-readmore wow swing" data-wow-duration="1.3s" data-wow-delay=".3s">
            @if (Route::has('login'))
            @if (Auth::check())
            <!-- <a href="/profile/{{Auth::user()->id}}">{{ trans('app.mybonuses')}}</a> -->
            @else
            <!-- <a href="/">{{ trans('app.create_account')}}</a> -->
            @endif
            @endif
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
