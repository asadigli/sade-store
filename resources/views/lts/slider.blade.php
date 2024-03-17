<section class="flat-row flat-slider style3">
 <div class="container">
   <div class="row">
     <div class="col-lg-3">
     </div>
     <div class="col-lg-9">
       <div class="slider owl-carousel-11">
         <div class="slider-item style5">
           <div class="item-text">
             <div class="header-item">
               <p>{{ trans('app.Latest')}}</p>
               <h2 class="name" style="font-size:39px;">{{ trans('app.Latest_products_for_special_buyers')}}</h2>
             </div>
             <div class="content-item">
               <!-- <div class="price">
                 <span class="sale" style="font-size:30px;">{{ trans('app.Latest')}}</span>
                 <div class="clearfix"></div>
               </div> -->
               <div class="btn-shop">
                 @if(Auth::guest())
                 <a href="/register" title="{{__('app.Register')}}" style="background: #ff9b2e;">{{__('app.Register')}} </a>
                 @endif
               </div>
             </div>
           </div>
           <div class="item-image">
             <img data-src="/uploads/c-accessories.png" alt="">
           </div>
         </div>
         @if(3==5)
         <div class="slider-item style5">
           <div class="item-text">
             <div class="header-item">
               <p>Enhanced Technology</p>
               <h2 class="name">SMART <span>TV</span></h2>
             </div>
             <div class="content-item">
               <div class="price">
                 <span class="sale">$5.325.99</span>
                 <div class="clearfix"></div>
               </div>
               <div class="regular">
                 $2.500.99
               </div>
               <div class="btn-shop">
                 <a href="#" title="">SHOP NOW </a>
               </div>
             </div>
           </div>
           <div class="item-image">
             <img data-src="/img/slider/02.png" alt="">
           </div>
         </div>
         @endif
       </div>
     </div>
   </div>
 </div>
</section>
