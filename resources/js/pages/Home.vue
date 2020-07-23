<style scoped>
    .container{
        position: relative;
    }

    .main-container *{
        padding: 0;
        margin: 0;
    }

    .main-container h1{
        font-size: 3.5em;
    }

    .image-about{
        width: 9vw;
    }

    .container-image{
        width: 100%;
        padding-top: 160%; /* 1:1 Aspect Ratio */
        position: relative; /* If you want text inside of it */
        background-position: center;
        background-size: cover;
    }

    .container-image-2{
        width: 100%;
        padding-top: 100%; /* 1:1 Aspect Ratio */
        position: relative; /* If you want text inside of it */
        background-position: center;
        background-size: cover;
    }

    .container-image img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
        object-position: center;
    }

    .container-image-2 img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
        object-position: center;
    }

    .main-container .row:nth-child(1), .row:nth-child(5), .row:nth-child(8), .row:nth-child(11), .row:nth-child(13), .row:nth-child(15){
        margin-top: 5em;
    }

    .main-container .row:nth-child(2), .row:nth-child(3), .row:nth-child(6), .row:nth-child(9), .row:nth-child(12), .row:nth-child(16){
        margin-top: 2em;
    }

    .main-container .row:nth-child(10){
        position: relative;
        margin-top: 5em;
    }

    .main-container .row:nth-child(14){
        position: relative;
    }

    .carrousel{
        width: 100%;
        height: 200px;
        background-color: purple;
    }

    .horizontal-scroll-wrapper{
        width: 300px;
        height: 75vw;
        max-height: 1140px;
        overflow-y: auto;
        overflow-x: visible;
        transform: rotate(-90deg) translateY(-300px);
        transform-origin: right top;
        -ms-overflow-style: none; /*ocultar scrollbar en IE y Edge*/
    }

    .horizontal-scroll-wrapper > div {
        height: 100px;
        width: 400px;
        padding: 16px 0px;
        margin: 289px 0px;
        /*transform: rotate(90deg) translateY(200px) translateX(300px);*/
      	transform-origin: right top;
    }

    .horizontal-scroll-upper {
        transform: rotate(90deg) translateY(150px) translateX(115px);
        border-bottom-color: gray;
        border-bottom-width: 5px;
        border-bottom-style: solid;
    }

    .horizontal-scroll-upper > p {
        transform: translateY(-50px) translateX(80px);
    }

    .horizontal-scroll-lower {
        transform: rotate(90deg) translateY(245px) translateX(125px);
        border-top-color: grey;
        border-top-style: solid;
        border-top-width: 5px;
    }

    .horizontal-scroll-lower > img{
        transform: translateY(-45px) translateX(205px);
    }

    .horizontal-scroll-wrapper::-webkit-scrollbar {
        display: none; /*ocultar scrollbar en chrome, safari, y opera*/
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .image-about{
        width: 20vw;
    }

    .line{
        width: 100%;
        height: 80%;
        background-color: #EE1331;
        position: absolute;
        top: 12%;
        right: 0;
        margin-right: -20%;
        z-index: -100; /*para que este hasta el fondo*/
    }

    .main-container .row:nth-child(14) .line{
        width: 100%;
        height: 30%;
        background-color: #EAECED;
        opacity: 0.8;
        position: absolute;
        top: 70%;
        right: 0;
        margin-right: -20%;
    }

    .btn-ver-mas{
        display: inline-block;
        padding: 10px 35px;
        color: white;
        border: 1px solid white;
        font-size: 14px;
        border-radius: 0px;
    }

    .btn-ver-mas-2{
        display: inline-block;
        padding: 10px 35px;
        color: white;
        background-color: #EE1331;
        font-size: 14px;
        border-radius: 0px;
        margin-top: 20px;
    }

    .contacto{
        margin-top: 1em;
        box-shadow: 3px 3px 10px #BFBFBF;
        padding: 20px 10%;
    }

    .contacto input{
        width: 100%;
        margin-top: 10px;
        height: 35px;
        border: none;
        border: 1px solid black;
        padding: 10px;
    }

    .contacto textarea{
        width: 100%;
        margin-top: 10px;
        border: none;
        border: 1px solid black;
        padding: 10px;
    }

    .line-pointer{
        position: absolute;
        width: 1px;
        height: 158px;
        top: -30px;
        left: 0;
        background-color: #707070;
        margin-left: 15px;
        z-index: -1;
    }
    .main-container{
        margin-top: 9em;
    }
    #nuestros-expertos{
        margin: 20px 0;
    }
    @media only screen and (max-width: 767px){
        .main-container{
            margin-top: 11em;
        }
        #nuestros-expertos{
            left: 110px;
            width: 410px;
        }
    }

    .img-75w{
        width: auto;
        height: 75px;
    }

    @media screen and (max-width: 992px){
        #hacemos-nosotros{
            flex-wrap: wrap;
        }
        #nuestros-clientes{
            height: 180px;
            flex-direction: column;
            margin-top: 80px;
        }
        #nuestros-clientes img{
            margin-top: 40px;
        }

        .main-container .row:nth-child(11){
            margin-top: 10em;
        }

        .main-container .row:nth-child(13), .row:nth-child(11){
            margin-top: 12em;
        }
    }

    @media screen and (max-width: 767px){
        #proyectos{
            text-align: center;

        }

        .main-container .row:nth-child(10) .line{
            margin-right: 0;
            height: 100%;
        }
    }

    .que-hacemos-img{
        height: 80px;
        width: auto;
    }

    .img-con-texto {
        text-align: center;
        width: 200px;
        margin: 0 5px;
    }

    .img-con-texto img {
        display: block;
        margin: 20px auto;
    }
    @media only screen and (max-width: 600px){
        .main-container .row:nth-child(14) .line{
            margin-right: 0;
        }

        .line{
            margin-right: 0;
        }

        .projects img{
            width: 50%;
        }
        #proyectos{
            top: -84px;
            left: 10px;
        }
        #nuestros-expertos{
            left: 0;
            width: auto;
        }
    }

    @media only screen and (max-width: 449px){
        .img-con-texto {
            width: 150px;
        }
    }
    @media only screen and (max-width: 372px){
        #titulo-banner{
            text-align: justify;
        }
    }
    h1,h2,h3{
      font-weight: 800;
    }
    p{
      font-weight: 500;
    }
    .segundo-titulo{
        margin-left: 3%
    }
</style>

<template>
    <div class="container">
        <Navbar />



        <section class="main-container" >
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                    <h1 id="titulo-banner">{{ $t('home.cover') }}</h1>
                    <p class="mt-3">{{ $t('home.subHeadline') }}</p>
                </div>
                <div class="col-md-6">
                    <img src="/gifs/HOME.gif" style="width: 135%; margin-left:-12%" alt="Desarrollo web y software a la medida">
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row" style="margin-top: 325px;">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">{{ $t('home.our_process_title') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.our_process_title2') }}</h2>
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>{{ $t('home.our_process_text') }}
                        <br>{{ $t('home.our_process_planning') }}</p>
                </div>
            </section>

            <!-- seccion 4 -->

            <section class="row" style="overflow: visible; height: 300px;">
                <div class="horizontal-scroll-wrapper">
                    <div class="horizontal-scroll-upper">
                        <img src="/images/component (1).png" class="img-75w" alt="Desarrollo web empresas">
                        <p>{{ $t('home.process_1') }}</p>
                    </div>
                    <div class="horizontal-scroll-lower">
                        <p>{{ $t('home.process_2') }}</p>
                        <img src="/images/component (2).png" class="img-75w" alt="Desarrollo web aplicaciones móviles">
                    </div>
                    <div class="horizontal-scroll-upper">
                        <img src="/images/component (3).png" class="img-75w" alt="Desarrollo web e-commerce">
                        <p>{{ $t('home.process_3') }}</p>
                    </div>
                    <div class="horizontal-scroll-lower">
                        <p>{{ $t('home.process_4') }}</p>
                        <img src="/images/component (4).png" class="img-75w" alt="software a la medida mexico">
                    </div>
                    <div class="horizontal-scroll-upper">
                        <img src="/images/component (5).png" class="img-75w" alt="desarrollo web html y css">
                        <p>{{ $t('home.process_5') }}</p>
                    </div>

                </div>
            </section>

            <!-- seccion 5 -->
            <section class="row" style="margin-top: 325px;">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">{{ $t('home.secc_5_1') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.secc_5_2') }}</h2>
                </div>
            </section>

            <!-- seccion 6 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>{{ $t('home.secc_6_1') }}</p>
                </div>
            </section>

            <!-- seccion 7 -->
            <section class="row">
                <div class="col-md-1" />
                <div class="col-md-10">
                    <div class="row" style="background-color: #EE1331;">
                        <div class="col-md-12" style="padding: 10px; color: white; display: flex;">
                            <p>
                                <i class="fas fa-arrow-down"></i>
                            </p>
                            <p style="margin-left: 55px; font-size: 1.2em;">{{ $t('home.secc_7_1') }}</p>
                        </div>
                    </div>

                    <div class="row" style="margin-top:0">
                        <div class="col-md-12" style="position: relative;">
                            <div class="line-pointer" />
                            <ul style="margin-left: 30px;">
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em; font-weight: bold;">{{ $t('home.secc_7_2') }}</p>
                                </li>
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em; font-weight: bold;">{{ $t('home.secc_7_3') }}</p>
                                </li>
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em; font-weight: bold;">{{ $t('home.secc_7_4') }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- seccion 8 -->
            <section class="row" style="margin-top: 325px;">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">{{ $t('home.secc_8_1') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.secc_8_2') }}</h2>
                </div>
            </section>

            <!-- seccion 9 -->
            <section class="row">
                <div id="hacemos-nosotros" class="col-md-12 text-center" style="display: flex; justify-content-center align-items-center">
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-1.png" alt="que-hacemos-1">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_1') }} <br> {{ $t('home.secc_9_1_1') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-2.png" alt="que-hacemos-2">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_2') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-3.png" alt="que-hacemos-3">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_3') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-4.png" alt="que-hacemos-4">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_4') }}<br>{{ $t('home.secc_9_4_1') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-5.png" alt="que-hacemos-5">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_5') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-6.png" alt="que-hacemos-6">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_6') }}<br>{{ $t('home.secc_9_6_1') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-7.png" alt="que-hacemos-7">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_7') }}</p>
                    </div>
                    <div class="img-con-texto">
                        <img class="que-hacemos-img" src="/images/que-hacemos-8.png" alt="que-hacemos-8">
                        <p class="que-hacemos-caption">{{ $t('home.secc_9_8') }}</p>
                    </div>
                </div>
            </section>

            <!-- seccion 10 -->
            <section class="row" style="margin-top: 325px;">
                <div class="line" />
                <div class="col-md-4">
                    <div class="container-image-2">
                        <img src="/images/grupo-disp.png" style="width:100%; height: auto;" alt="disp">
                    </div>
                </div>
                <div id="proyectos" class="col-md-8 d-flex justify-content-around align-items-start flex-column text-left pl-5" style="color: white;padding: 20px 0;">
                    <h2>{{ $t('home.secc_10') }}</h2>
                    <p>{{ $t('home.secc_10_1') }}</p>
                    <a class="btn btn-ver-mas" href="#/projects">{{ $t('home.secc_10_2') }}</a>
                </div>
            </section>

            <!-- seccion 11 -->
            <section class="row" style="margin-bottom: 50px; margin-top: 325px;">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">{{ $t('home.secc_11') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.secc_11_1') }}</h2>
                </div>
            </section>

            <!-- seccion 12 -->
            <section class="row">
                <div id="nuestros-clientes" class="col-md-12 d-flex justify-content-around align-items-center">
                    <img src="/images/checkout.png" style=" width: 150px; height: auto;" alt="">
                    <img src="/images/new-castle.png" style=" width: 150px; height: auto;" alt="">
                    <img src="/images/caledro.png" style=" width: 150px; height: auto;" alt="">
                    <img src="/images/ghm.png" style=" width: 150px; height: auto;" alt="">
                    <img src="/images/dix04.png" style=" width: 150px; height: auto;" alt="">
                </div>
            </section>

            <!-- seccion 13 -->
            <section class="row" style="margin-top: 325px;">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">{{ $t('home.secc_13') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.secc_13_1') }}</h2>
                </div>
            </section>

            <!-- seccion 14 -->
            <section class="row">
                <div class="line" />
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="/images/grupal-1.png" style=" width: 100%; height: auto;" alt="grupal 1">
                        </div>
                        <div class="col-md-12 mt-2">
                            <img src="/images/grupal-2.png" style=" width: 100%; height: auto;" alt="grupal 2">
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-12 ml-2">
                            <img src="/images/grupal-3.png" style=" width: 100%; height: auto;" alt="grupal 3">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex justify-content-center align-items-start flex-column pl-3" id="nuestros-expertos">
                    <p>{{ $t('home.secc_14') }}</p>
                    <a class="btn btn-ver-mas-2" href="#/about">{{ $t('home.secc_14_1') }}</a>
                </div>
            </section>

            <!-- seccion 15 -->
            <section class="row" style="margin-top: 325px;">
                <div class="col-md-12" style="left: 30px;">
                    <h2 style="color: #949A9D;">{{ $t('home.secc_15') }}</h2>
                    <h2 class="segundo-titulo">{{ $t('home.secc_15_1') }}</h2>
                </div>
            </section>

            <!-- seccion 16 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <h2>{{ $t('home.secc_15_2') }}</h2>
                </div>
            </section>

            <Contact />

        </section>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'
import Contact from '../components/ContactComponent'

export default {
    name: 'Home',

    components: {
        Navbar,
        Footer,
        Contact
    },

    data(){
        return{

        }
    },

    mounted(){

    },


    methods: {
        goToArticle(args){
            this.$router.push({ name: 'Article', params: { id: args } })
        },

        async getArticle(){
            try {
                let URL = '/api/article'
                let response = await axios.get(URL)

                if(response){
                    this.mainArticle = response.data
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getArticles(){
            try {
                this.articles = []
                let URL = `/api/articles?page=${this.count}`
                let response = await axios.get(URL)

                if (response) {
                    console.log(response.data)
                    this.lastPage = response.data.last_page
                    response.data.data.forEach(element => {
                        this.articles.push(element)
                    });
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
