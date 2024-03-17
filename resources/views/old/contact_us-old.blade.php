@extends('layouts.master')
@section('css')
<title>{{ ucwords(trans('app.contact_us')) }}: Sade Store</title>
<meta name="author" content="Sade Store">
<meta name="description" content="Bizimlə əlaqə saxlamaq yolları">
<meta name="keywords" content="avadanlıqlar, kameralar, komputer hissələri, müasir texnologiyar, əlaqə">
<meta property=”og:title” content=”{{ ucwords(trans('app.contact_us')) }}: Sade Store” />
<meta property=”og:description” content=”Bizimlə əlaqə saxlamaq yolları” />
<meta property=”og:image” content=”//img.sade.store/logo.png” />
<meta property=”og:url” content=”//sade.store/contact” />
@endsection
@section('body')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"><a title="{{ trans('app.go_to_home_page')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong title="{{ trans('app.Contact_us')}}">{{ trans('app.Contact_us')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="main-container col1-layout">
    <div class="main container">
      <div class="row">
        <a href="/contact" title="Sade Store">
          <img src="//img.sade.store/contact-us.jpg" alt="Sade Store">
        </a>
      </div>
      <div class="row">
        <section class="col-main col-sm-12">
          <div id="contact" class="page-content page-contact">
            <div class="row">
              <div class="col-xs-12 col-sm-6" id="contact_form_map">
                <h3 class="page-subheading">{{ trans('app.lets_get_in_touch')}}</h3>
                <p>
                  SadeStore Müştəri xidmətləri ilə əlaqə quraraq təklif və iradlarınızı,
                  həmçinin də satış xidmətimiz haqqında fikrinizi bildirə bilərsiniz. Qeyd edək ki,
                  müştəri xidmətləri ilə əlaqə saxlamaq üçün aşağıdakı vasitələrdən istifadə edə bilərsiniz:
                </p>
                <br/>
                <ul>
                  <li>Sayt üzərindən fikir bildirmək (üstün tutulur)</li>
                  <li>Qeyd olunan E-poçt ünvanı vasitəsi ilə əlaqə qurmaq (rəsmi danışıqlar üçün)</li>
                  <li>Qeyd olunan əlaqə nömrəsi ilə əlaqə qurmaq</li>
                </ul>
                  <br/>
                <p>
                  Əlavə olaraq qeyd edək ki, müştəri xidmətləri ilə E-Poçta və ya sayt üzərindən əlaqə
                  qurduğunuz zaman sizin məktubunuz daxil etdiyiniz E-Poçta vasitəsilə cavablandırılacaqdır.
                </p>
                <br/>
                <ul class="sadestore">
                  <li><i class="fa fa-home"></i>Bakı, Azərbaycan</li>
                  <li><i class="fa fa-phone"></i><span>(+994) 70 818 66 01</span></li>
                  <li><i class="fa fa-envelope"></i><span><a href="mailto:contact@sade.store">contact@sade.store</a></span></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h3 class="page-subheading">{{ trans('app.fulfill_the_blank')}}</h3>
                  <div class="alert alert-success hidden_alert" id="message_sent" style="display:none;"></div>
                  <div class="alert alert-danger hidden_alert" id="message_sent_failed" style="display:none;"></div>
                  <div class="contact-form-box">
                    <div class="form-selector">
                      <input type="text" class="form-control input-sm" id="contact_name" placeholder="* {{ trans('app.your_name')}}..." required/>
                    </div>
                    <div class="form-selector">
                      <input type="text" class="form-control input-sm" id="contact_surname" placeholder="* {{ trans('app.your_surname')}}..." required/>
                    </div>
                    <div class="form-selector">
                      <input type="text" class="form-control input-sm" id="contact_email" placeholder="* {{ trans('app.your_email')}}..." required/>
                    </div>
                    <input type="hidden" name="phone_number" value="0">
                    <div class="form-selector">
                      <input type="text" class="form-control input-sm" id="problem_title" placeholder="* {{ trans('app.message_title')}}..." required/>
                    </div>
                    <div class="form-selector">
                      <textarea class="form-control input-sm text-sm" id="problem_body" placeholder="* {{ trans('app.your_message')}}..." required></textarea>
                    </div>
                    <div class="form-selector"><button type="submit" id="AddContact" class="button pull-right"><i class="fa fa-send"></i><span> {{ trans('app.send_message')}}</span></button></div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
@endsection
@section('js')
@endsection
