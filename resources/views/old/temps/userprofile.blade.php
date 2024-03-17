@extends('layouts.master')

@section('body')
<style media="screen">
.verif_sign{
  color:#19bfb1;
  cursor:pointer;
}
.means_verif {
 visibility: hidden;
 width: 120px;
 background-color: gray;
 color: #fff;
 text-align: center;
 border-radius: 6px;
 padding: 5px 0;
 position: absolute;
}
.verif_sign:hover .means_verif {
  visibility: visible;
}
</style>
<div id="page">
  @include('layouts.header')
  <!-- end header -->
  @include('layouts.menuarea')
  <!-- Breadcrumbs -->

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>{{$user->name}} {{$user->surname}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End -->
  <!-- Main Container -->
  <div class="main-container col2-left-layout">
    <div class="container">
      <div class="row">
        <div class="col-main col-sm-9 col-xs-12 col-sm-push-3">
          <div class="product-view-area">
            <div class="product-big-image col-xs-12 col-sm-5 col-lg-5 col-md-5">
              <div class="large-image">
                <img class="zoom-img" src="/uploads/avatars/{{ $user->avatar}}" alt="products" style="height:300px;width:300px;border-radius:50%;" >
              </div>
            </div>
            <div class="col-xs-12 col-sm-7 col-lg-7 col-md-7 product-details-area">
              <!-- <div class="product-name">
                <h1>Lorem Ipsum is simply</h1>
              </div> -->
              <div class="price-box">
                <p class="special-price">
                 <h2><span>{{$user->name}} {{$user->surname}}
                   @if(($user->role_id)==2 | ($user->role_id)==3 | ($user->role_id)==4)
              			 <a class="verif_sign">&#10004;</a>
                     <span class="means_verif">This user is an admin</span>
              		 @endif
                </span></h2>
                </p>
              </div>
              <div class="ratings">
                <!-- <div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                <p class="rating-links"> <a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Your Review</a> </p> -->
                <i><a href="#" style="color:#19bfb1">{{$user->email}}</a> </i>
                <br><br>
              </div>

              <div class="short-description">
              <b>  Gender:</b>
              @if($user->gender == 1)
              Male
              @elseif($user->gender == 2)
              Female
              @endif
              </div>
              <div class="product-color-size-area">

              </div>
              <div class="product-cart-option">


              </div>
            </div>
          </div>
          <div class="product-overview-tab">

                <div class="product-tab-inner">
                  <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                    <li class="active"> <a href="#description" data-toggle="tab"> {{ trans('app.description')}} </a> </li>

                    @if (Route::has('login'))
  									@if (Auth::check())
                    @if($user->id == Auth::user()->id)
                    <li > <a href="#mybonus" data-toggle="tab"> {{ trans('app.mybonus')}} </a> </li>
                    @endif
                    @endif
                    @endif
                  </ul>
                  <div id="productTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="description">
                      <div class="std">
                        <p>Proin lectus ipsum, gravida et mattis vulputate,
                          tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend
                          laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                          luctus malesuada tincidunt. Nunc facilisis sagittis ullamcorper. Proin
                          lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et
                          lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
                          ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus
                          adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada
                          tincidunt. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                          gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                          cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl
                          ut dolor dignissim semper. Nulla luctus malesuada tincidunt.</p>
                        <p> Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                      </div>
                    </div>
                    @if (Route::has('login'))
  									@if (Auth::check())
                    @if($user->id == Auth::user()->id)
                    <div class="tab-pane fade in" id="mybonus">
                      <div class="std">
                        <div class="table-responsive">
                          <table class="table">
                           <thead>
                             <tr>
                               <!-- <th></th> -->
                               <th>Product</th>
                               <th>Date</th>
                               <th>Earned</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>Led Light</td>
                               <td>2 Jan</td>
                               <td>20 points</td>
                             </tr>
                           </tbody>
                          </table>
                          </div>
                      </div>
                    </div>
                    @endif
                    @endif
                    @endif
                  </div>
                </div>

        </div>
        </div>
        <aside class="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
          @include('layouts.myaccount')
          @include('layouts.populartags')
        </aside>
      </div>
    </div>
  </div>
@include('layouts.partners')
@include('layouts.footerdiscounts')
@include('layouts.footer')
  <a href="#" class="totop"> </a> </div>
@endsection
