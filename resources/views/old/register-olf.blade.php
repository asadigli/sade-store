@extends('layouts.master')

@section('body')
<div id="page">
<!-- Header -->
@include('layouts.header')
@include('layouts.menuarea')
  <!-- Breadcrumbs -->

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a class="capi" title="{{ trans('app.go_to_home_page')}}" href="/">{{ trans('app.home') }}</a><span>&raquo;</span></li>
            <li><strong class="capi" title="{{ trans('app.register') }}">{{ trans('app.register') }}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End -->

  <!-- Main Container -->
  <section class="main-container col1-layout">
    <div class="main container">
        <div class="page-content">
            <div class="account-login">
              <div class="box-authentication">
                <h4>Register</h4>
                <form class="" method="POST" action="{{ route('register') }}">
                  {{ csrf_field() }}
                  <p class="before-login-text">Welcome! Create a new account</p>
                  <input type="hidden" name="role_id" value="1">
                   <label for="name">Name<span class="required">*</span></label>
                   <input id="name" type="text" class="form-control" name="name" placeholder="Your name" required>
                     @if ($errors->has('name'))
                         <span class="help-block">
                             <strong>{{ $errors->first('name') }}</strong>
                         </span>
                     @endif
                   <label for="surname">Surname<span class="required">*</span></label>
                   <input id="surname" type="text" class="form-control" name="surname" placeholder="Your surname" required>
                     @if ($errors->has('surname'))
                         <span class="help-block">
                             <strong>{{ $errors->first('surname') }}</strong>
                         </span>
                     @endif
                   <label for="email">Email address<span class="required">*</span></label>
                   <input id="email" type="email" class="form-control" name="email" placeholder="Email" required>
                     @if ($errors->has('email'))
                         <span class="help-block">
                             <strong>{{ $errors->first('email') }}</strong>
                         </span>
                     @endif
                     <label for="gender">Gender<span class="required">*</span></label>
                     <select class="form-control" name="gender" style="width:100px;" required>
                       <option value="1">Male</option>
                       <option value="2">Female</option>
                     </select>
                     @if ($errors->has('gender'))
                         <span class="help-block">
                             <strong>{{ $errors->first('gender') }}</strong>
                         </span>
                     @endif
                   <label for="date">Birthday<span class="required">*</span></label>
                   <input type="date" name="dob" max="2004-12-31" class="form-control" required>
                     @if ($errors->has('dob'))
                         <span class="help-block">
                             <strong>{{ $errors->first('dob') }}</strong>
                         </span>
                     @endif
                   <label for="password">Password<span class="required">*</span></label>
                   <input id="password" type="password" class="form-control" name="password" placeholder="Password" required>
                     @if ($errors->has('password'))
                         <span class="help-block">
                             <strong>{{ $errors->first('password') }}</strong>
                         </span>
                     @endif
                     <label for="password-confirm">Confirm Password</label>
                     <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" required>
                     <button type="submit" class="button">
                      <i class="fa fa-lock"></i>&nbsp;    Register
                    </button>
                </form>
              </div>
              <div class="box-authentication">
                <br><br>
                <div class="register-benefits">
												<h5>Sign up today and you will be able to :</h5>
                        <p class="forgot-pass"><a href="/login">Already Registered?</a></p>
                        <p class="forgot-pass"><a href="#">Lost your password?</a></p>
												<ul>
													<li>Speed your way through checkout</li>
													<li>Track your orders easily</li>
													<li>Keep a record of all your purchases</li>
												</ul>
											</div>
              </div>


        </div>
      </div>

    </div>
  </section>
  <!-- Main Container End -->
   <!-- our clients Slider -->

<script type="text/javascript">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
$(document).ready(function(){
$(document).on('change','.country', function(){
  var count_id=$(this).val();
  var div=$(this).parent();
  var op=" ";
  $.ajax({
    type:'GET',
    url:'{!!URL::to('getcitybyajax')!!}',
    data:{'id':count_id},
    cache: false,
    success:function(data){
      op+='<option value="0" selected disabled>Choose A City</option>';
      for(var i=0; i<data.length; i++){
        op+='<option value="'+data[i].id+'">'+data[i].name+'</option>';
        }
        $('body').find('.name').html(" ");
        $('body').find('.name').append(op);
    },
    error:function(){
      console.log('error var');
    }
  });
});
$("#submit").click(function(){
  var a =$(this).parent();
  var city = a.find('.name').val();
  $.ajax({
    type:'get',
    url:'{!!URL::to('register')!!}',
    data:{'city':city},
    dataType:'json',
    success:function(data){
      console.log("done!")
    },
    error:function(){
    }
  });
});
});
</script>

</script>
@include('layouts.partners')
@include('layouts.footerdiscounts')
@include('layouts.footer')
  <a href="#" class="totop"> </a> </div>

@endsection
