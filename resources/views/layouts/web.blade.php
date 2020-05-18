<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description"
    content="Partnergrammer ayuda a marcas globales a diseñar, construir y lanzar productos digitales. Desarrollamos software a la medida, sistemas web, móviles o de escritorio con soluciones innovadoras. Pide tu cotización ahora.">

    <title>{{ config('app.name', 'PartnerGrammer') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script id="instagram-embed" src="https://www.instagram.com/embed.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.css">

    <style>
        *{
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
<body style="overflow-x: hidden;">
    <div id="app">
        @yield('content')
    </div>

</body>
</html>
