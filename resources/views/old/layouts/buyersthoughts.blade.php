<div class="testimonials">
  <div class="slider-items-products">
    <div id="testimonials-slider" class="product-flexslider hidden-buttons home-testimonials">
      <div class="slider-items slider-width-col4 ">
        @foreach($vp = App\VipComments::all() as $vp)
        <div class="holder">
          <p>{{ $vp->message}} </p>
          <div class="thumb">
            <img src="//img.sade.store/user.png" alt="{{ $vp->message}}">
          </div>
          <div class="author"> <strong class="name">{{$vp->name}} {{$vp->surname}}</strong>
            <strong class="designation">{{$vp->rating}} <i class="fa fa-star orange"></i> </strong>
          </div>
        </div>
        @endforeach
      </div>
    </div>
  </div>
</div>
