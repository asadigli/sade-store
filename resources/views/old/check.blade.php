@extends('layouts.master')
@section('css')
<meta name="description" content="Sade Store Check xidməti Sade Store üzərindən alış-veriş zamanı əldə edilən qəbzlərin etibarlılığını yoxlamaq üçündür">
<meta name="keywords" content="Sade Store, online satış, faktura, invoice, yararlılıq yoxlamaq">
<title>{{__('app.Check_invoice')}}: Sade Store</title>
<meta property=”og:title” content=”{{__('app.Check_invoice')}}: Sade Store” />
<meta property=”og:description” content=”Sade Store Check xidməti Sade Store üzərindən alış-veriş zamanı əldə edilən qəbzlərin etibarlılığını yoxlamaq üçündür” />
<meta property=”og:image” content=”//img.sade.store/logo.png” />
<meta property=”og:url” content=”//sade.store/check” />
@endsection
@section('body')
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"><a title="{{ trans('app.go_back_to_home')}}" href="/">{{ trans('app.home')}}</a><span>&raquo;</span></li>
            <li><strong>{{__('app.Check_invoice')}}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main container">
    <div class="row">
     <div class="about-page check-table">
        <div class="col-xs-12 col-sm-6">
          <h3>{{__('app.Check_invoice')}}</h3>
          <p>Sade Store Check vasitəsilə, istifadəçilər qəbzlərinin etibarlılığını yoxlaya bilərlər.</p>
          <p>Əməliyyat aparmaq üçün, aşağıdaki xanalara qəbzin kodu və alış edilən əlaqə nömrəsini daxil edin.</p>
          <p><i><u>Əlavə qeyd:</u> qəbz haqqında məlumat satıldığı gün ərzində saat 18:00-dan sonra sistemə yerləşdiriləcəkdir.</i></p>
          <div class="form-group">
            <label for="phone_number">Qəbzin kodu</label>
            <input class="form-control" type="number" id="invoice_id" placeholder="Çekin kodu...">
          </div>
          <div class="form-group">
            <label for="phone_number">Əlaqə nömrəsi</label>
            <div class="input-group">
              <div class="input-group-icon">+994</div>
              <div class="input-group-area"><input type="number" id="phone_number" placeholder="Əlaqə nömrəsi..."></div>
            </div>
          </div>
          <div class="form-group">
            <button onclick="checkinvoice()" class="button pull-right">{{__('app.Check')}}</button>
          </div>
          <br><br>
        </div>
        <div class="col-xs-12 col-sm-6" id="result">
          <table class='table invoice-table'><thead><tr style='background:#ddd;'><th colspan='1'>Qəbz haqqında</th></tr></thead><tbody><tr><td style='text-align:left'>Nəticə əldə etmək üçün xanaları doldurun</td></tr></tbody></table>
        </div>
      </div>
    </div>
  </div>
@endsection
@section('js')
@endsection
