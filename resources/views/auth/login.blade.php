@extends('lts.ms')
@section('head')
@if(Request::is('register'))
<title>{{__('app.Registration')}}</title>
@else
<title>{{__('app.Login')}}</title>
@endif
<meta name="description" content="Sade Store qediyyat">
<meta name="keywords" content="qediyyat,hesab">
<style media="screen">
	label[for='password-register'] small{
		font-style: italic;
    color: gray;
    font-size: 12px;
    display: block;
	}
</style>
@endsection
@section('body')
@include('lts.head2')
		<section class="flat-breadcrumb">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li class="trail-item">
								<a href="/" title="">{{__('app.Home')}}</a>
								<span><img src="/img/icons/arrow-right.png" alt=""></span>
							</li>
							<li class="trail-end">
								@if(Request::is('register'))
								<a href="/register" title="{{__('app.Registration')}}">{{__('app.Registration')}}</a>
								@else
								<a href="/login" title="{{__('app.login')}}">{{__('app.Login')}}</a>
								@endif
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="flat-account background">
			<div class="container">
				<div class="row">
					@if(Request::is('login'))
					<div class="col-md-6 col-6-center">
						<div class="form-login">
							<div class="title">
								<h3>{{__('app.Login')}}</h3>
							</div>
							<form action="{{ route('login') }}" method="POST" accept-charset="utf-8">
								{{csrf_field()}}
								<div class="form-box">
									<label for="name-login">{{__('app.email')}} </label>
									<input type="text" id="email" name="email" placeholder="{{__('app.email')}}..." required>
									@if ($errors->has('email'))
                      <span class="help-block">
                          <strong>{{ $errors->first('email') }}</strong>
                      </span>
                  @endif
								</div>
								<div class="form-box">
									<label for="password-login">{{__('app.Password')}} </label>
									<input type="password" id="password" name="password" placeholder="{{__('app.Password')}}..." required>
									@if ($errors->has('password'))
                      <span class="help-block">
                          <strong>{{ $errors->first('password') }}</strong>
                      </span>
                  @endif
								</div>
								<div class="form-box checkbox">
									<input type="checkbox" id="rememberme" value="forever" checked>
									<label for="rememberme">{{__('app.Remember_me')}}</label>
								</div>
								<div class="form-box">
									<button type="submit" class="login">{{__('app.Login')}}</button> @if(2==4)
									<a href="#" title="{{__('app.Lost_your_password')}}">{{__('app.Lost_your_password')}}</a><br> @endif
									<a href="/register" title="{{__('app.Register')}}">{{__('app.Register')}}</a>
								</div>
							</form>
						</div>
					</div>
					@else
					<div class="col-md-6 col-6-center">
						<div class="form-register">
							<div class="title">
								<h3>{{__('app.Registration')}}</h3>
							</div>
							<form method="POST" action="{{ route('register') }}" accept-charset="utf-8">
								{{ csrf_field() }}
								<div class="form-box">
									<label for="name">{{__('app.Name')}} </label>
									<input type="text" id="name" name="name" placeholder="{{__('app.Name')}}..." required autocomplete="off">
									@if ($errors->has('name'))
											<span class="help-block">
													<strong>{{ $errors->first('name') }}</strong>
											</span>
									@endif
								</div>
								<div class="form-box">
									<label for="surname">{{__('app.Surname')}} </label>
									<input type="text" id="surname" name="surname" placeholder="{{__('app.Surname')}}..." required autocomplete="off">
									@if ($errors->has('surname'))
											<span class="help-block">
													<strong>{{ $errors->first('surname') }}</strong>
											</span>
									@endif
								</div>
								<div class="form-box">
									<label for="email">{{__('app.emailaddress')}} </label>
									<input type="email" id="email" name="email" placeholder="{{__('app.emailaddress')}}..." required data-error="{{__('app.Enter_valid_email')}}" autocomplete="off">
									@if ($errors->has('email'))
											<span class="help-block">
													<strong>{{ $errors->first('email') }}</strong>
											</span>
									@endif
								</div>
								<div class="form-box">
									<label for="gender">{{__('app.Gender')}} </label>
									<select name="gender" required>
										<option value="1">{{__('app.male')}}</option>
										<option value="2">{{__('app.female')}}</option>
									</select>
									@if ($errors->has('gender'))
											<span class="help-block">
													<strong>{{ $errors->first('gender') }}</strong>
											</span>
									@endif
								</div>
								<div class="form-box">
									<label for="password-register">{{__('app.Password')}} <small>({{__('app.Password_rules_list')}})</small></label>
									<input type="password" id="password" name="password" placeholder="{{__('app.Password')}}..." autocomplete="off">
									@if ($errors->has('password'))
											<span class="help-block">
													<strong>{{ $errors->first('password') }}</strong>
											</span>
									@endif
								</div>
								<div class="form-box">
									<label for="password-register">{{__('app.Confirm_password')}}</label>
									<input type="password" id="confirm-password" name="password_confirmation" placeholder="{{__('app.Confirm_password')}}..." autocomplete="off">
								</div>
								<div class="form-box"><button type="submit" class="register">{{__('app.Register')}}</button>
									<a class="have-acc" href="/login" title="{{__('app.Login')}}">{{__('app.Have_an_account')}}</a>
								</div>
							</form>
						</div>
					</div>
					@endif
				</div>
			</div>
		</section>
@endsection
@section('foot')
@endsection
