<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description"
    content="Partnergrammer ayuda a marcas globales a diseñar, construir y lanzar productos digitales. Desarrollamos software a la medida, sistemas web, móviles o de escritorio con soluciones innovadoras. Pide tu cotización ahora.">

    <meta name="keywords"
    content="desarrollo web con python, desarrollo web con php y mysql, desarrollo web angular, desarrollo a la medida, desarrollo web agencia, desarrollo web aplicaciones móviles y big data, desarrollo web aguascalientes, desarrollo web a medida, desarrollo web backend, desarrollo web bootstrap, desarrollo web backend y frontend, desarrollo web en mexico, desarrollo web empresas, desarrollo de aplicaciones web, desarrollo web e-commerce, desarrollo web freelance, desarrollo web guadalajara, ,desarrollo web  html, desarrollo web html y css, desarrollo web html5,  desarrollo web java, desarrollo web jquery, desarrollo web javascript
,software ala medida
,cuanto cuesta un software a la medida
,que es software a la medida
,para que sirve software a medida
,que significa software a medida
,software a la medida mexico
,software a la medida de su empresa
,desarrollo software a la medida
,desarrollo de software a la medida mexico
,software a la medida en monterrey
,software a la medida en juarez
,software a medida para empresas
,software a medida y soluciones empaquetadas
,diseño y construcción de software a la medida para el sector empresarial
,cuanto cuesta un software a la medida
">

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
