<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="author" content="Sade Store">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{csrf_token()}}" />
    <meta name="theme-color" content="#19bfb1" />
    <link rel="shortcut icon" type="image/x-icon" href="//img.sade.store/logo.png" />
    <meta property=”og:type” content=”store” />
    <meta property="fb:page_id" content="859076027774930">
    <meta property=”og:site_name” content=”Sade Store” />
    @section('css')
    @show
    <link rel="stylesheet" type="text/css" href="/css/sade.min.css?v={{md5(uniqid())}}" media="all">
</head>
<body class="cms-index-index cms-home-page">
  @if(2==4)<div class="se-pre-con"></div>@endif
    <div id="page">
        @include('layouts.header')
        @include('layouts.menuarea')
        @section('body')
        @show
        @include('layouts.footerdiscounts')
        @include('layouts.footer')
        <a class="totop"> </a>
    </div>
    <script type="text/javascript"  src="//code.jquery.com/jquery-1.11.3.min.js?v={{md5(uniqid())}}"></script>
    <script type="text/javascript" src="/js/sade.min.js?v={{md5(uniqid())}}" defer></script>
    @section('js')
    @show
    @if(2==4)
    <script type="text/javascript">
    $(window).load(function() {
      $(".se-pre-con").fadeOut("slow");;
    });
    </script>
    @endif
  </body>
</html>
