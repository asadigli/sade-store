@extends('layouts.master')

@section('body')

<div id="page">
<!-- Header -->
@include('layouts.header')
  <!-- end header -->
  <!-- Start Menu Area -->
  <!-- Start Mobile Menu -->
@include('layouts.menuarea')
  <!-- End  -->
  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>{{ trans('app.wishlist')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End -->
  <!-- Main Container -->
  <section class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        @if(Session::has('wishlistdeleted'))
          <center>
            <div class="col-md-4">
              <div class="alert alert-success">
                <button type="button" class="close" data-dismiss="alert">×</button>
                {{Session::get('wishlistdeleted')}}
              </div>
            </div>
          </center>
        @endif
        <div class="col-main col-sm-9 col-xs-12">
          <div class="my-account">
            <div class="page-title">
              <h2>My Wishlist</h2>
            </div>
            <div class="wishlist-item table-responsive">
              <table class="col-md-12">
                <thead>
                  <tr>
                    <th class="th-delete">Remove</th>
                    <th class="th-product">Images</th>
                    <th class="th-name">Product Name</th>
                    <th class="th-price">Discount</th>
                    <th class="th-price">Price </th>
                  </tr>
                </thead>
                <tbody>
                  @php
                  $wishlist = App\Wishlist::where('user_id',[Auth::user()->id])->get()
                  @endphp
                  @php($total = 0)
								  @php($total1=0)
                  @foreach($wishlist as $wish)
                  <tr>
                    <td class="th-delete">
                      <a href="/wishlistproddel/{{ $wish->id }}" class="btn btn-danger" type="button">
  											<i class="fa fa-remove" style="color:white;"> </i></a>
                      </td>
                    @php
                    $pro = App\ProductDetails::where('id','=',[$wish->product_id])->get()
                    @endphp
                    @foreach($pro as $pro)
                    <td class="th-product"><a href="#"><img src="/uploads/productphotos/{{$pro->photos}}" alt="cart"></a></td>
                    <td class="th-name"><h2><a href="/product-details/{{$pro->slug}}" title="{{$pro->productname}}">{{$wish->product_name}}</a></h2></td>
                    @endforeach
                    <td class="th-price">
                      {{$wish->product_discount}}
                    </td>
                    <th class="td-price">{{$wish->product_price}}AZN</th>
                  </tr>

										@php($total += $wish->product_price)
										@php($total1 += $wish->product_discount)
                  @endforeach
                </tbody>
                @if(!empty($wishlist))
                <tfooter>
                  <tr>
                    <th class="th-delete"></th>
                    <th class="th-product"></th>
                    <th class="th-details">Total:</th>
                    <th class="th-price"> ({{$total}} - {{$total1}}) = </th>
                    <th class="th-total th-add-to-cart">{{($total)-($total1)}} </th>
                  </tr>
                </tfooter>
                @endif
              </table>
              <!-- <a href="checkout.html" class="all-cart">Add all to cart</a> </div> -->
          </div>
        </div>
        <!-- <aside class="right sidebar col-sm-3 col-xs-12">
          <div class="sidebar-account block">
            <div class="sidebar-bar-title">
              <h3>My Account</h3>
            </div>
            <div class="block-content">
              <ul>
                <li><a>Account Dashboard</a></li>
                <li><a href="#">Account Information</a></li>
                <li><a href="#">Address Book</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Billing Agreements</a></li>
                <li><a href="#">Recurring Profiles</a></li>
                <li><a href="#">My Product Reviews</a></li>
                <li><a href="#">My Tags</a></li>
                <li class="current"><a href="#">My Wishlist</a></li>
                <li><a href="#">My Downloadable</a></li>
                <li class="last"><a href="#">Newsletter Subscriptions</a></li>
              </ul>
            </div>
          </div>
        </aside> -->
      </div>
    </div>
  </section>
   <!-- our clients Slider -->

   @include('layouts.partners')
   @include('layouts.footerdiscounts')
  @include('layouts.footer')
  <a href="#" class="totop"> </a>
</div>
@endsection
