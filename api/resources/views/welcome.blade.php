<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Escuela de Manejo del Sol</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&amp;subset=latin-ext" rel="stylesheet">

        <!-- CSS -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        <!-- JS -->
        <script src="{{asset('js/jquery-1.12.0.min.js')}}"></script>
        <script src="{{asset('js/modernizr-2.8.3.min.js')}}"></script>
    </head>
    <body>
        <div class="site" id="page">
            <!-- Options headline effects: .rotate | .slide | .zoom | .push | .clip -->
            <section class="hero-section hero-section--image clearfix clip">
                <div class="hero-section__wrap">
                    <div class="hero-section__option">
                        <img src="{{asset('images/manejo.jpg')}}" alt="Escuela de Manejo">
                    </div>
                    <!-- .hero-section__option -->

                    <div class="container">
                        <div class="row">
                            <div class="offset-lg-2 col-lg-8">
                                <div class="title-01 title-01--11 text-center">
                                    <img src="{{asset('images/Logo_ManejoDelSol.png')}}" alt="Escuela de Manejo" style="width:250px;">
                                    <h2 class="title__heading">
                                        <span>Nosotros somos</span><br>
                                        <strong class="hero-section__words">
                                            <span class="title__effect is-visible">Expertos</span>
                                            <span class="title__effect">Efectivos</span>
                                            <span class="title__effect">Amables</span>
                                            <span class="title__effect">Confiables</span>
                                        </strong>
                                    </h2>
                                    <div class="title__description">Tu licencia de manejo <strong>¡Garantizada!</strong></div>
                                </div>
                                <div class="button-group">
                                    <a href="https://manejodelsol.com.mx" class="btn btn-orange"><strong>Más Información</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- JS -->
        <script src="{{asset('js/animate-headline.js')}}"></script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
