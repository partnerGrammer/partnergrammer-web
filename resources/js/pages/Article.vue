<style scoped>
    h1,h2,h3{
      font-weight: 800;
    }
    p{
      font-weight: 500;
    }
    .main-box{
        padding: 0;
        margin: 0;
    }

    .container{
        position: relative;
    }

    .bg-1{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
    }

    .main-container *{
        padding: 0;
        margin: 0;
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .box-1{
        height: calc(100vh - 3em);
    }

    .container-image{
        width: 100%;
        padding-top: 75%; /* 1:1 Aspect Ratio */
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

    .line{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        height: 300px;
        background-color: #EE1331;
    }

    .main-container .row:nth-child(2) p{
        margin-top: 1em;
        color: #B5B5B5;
    }

    .main-container .row:nth-child(3), .row:nth-child(4), .row:nth-child(5), .row:nth-child(6), .row:nth-child(7){
        margin-top: 5em;
    }

    .form{
        background-color: white;
        box-shadow: 3px 3px 10px #949A9D;
        padding: 2em 4em;
    }

    form input, textarea{
        border: none;
        border: 1px solid #949A9D;
    }

    form input{
        width: 250px;
        height: 50px;
    }

    form textarea{
        margin-top: 10px;
        width: 100%;
    }

    form .btn-submit{
        display: inline-block;
        border: none;
        padding: 10px 35px;
        background-color: #EE1331;
        color: white;
        font-size: 0.9em;
        margin-top: -4em;
    }

    .line-2{
        width: 110%;
        height: 60%;
        background-color: #EE1331;
        position: absolute;
        bottom: -10%;
        right: 0;
        margin-right: -20%;

    }

    .segundo-titulo{
        margin-left: 3%
    }

</style>

<template>
    <div class="main-box">
        <div class="row bg-1" v-if="mainArticle != null">
            <div class="col-md-12 d-flex justify-content-center align-items-center" style="padding: 0; position: relative;">
                <div class="line" />
                <div class="col-md-7">
                    <div class="container-image">
                        <img :src="mainArticle.banner" width="100%" alt="">
                    </div>
                </div>
            </div>
        </div>

        <section class="container">
            <Navbar />

            <section class="main-container" v-if="mainArticle != null">
                <!-- seccion 1 -->
                <section class="row box-1">
                    <div class="col-md-12">

                    </div>
                </section>

                <!-- seccion 2 -->
                <section class="row">
                    <div class="col-md-12">
                        <h1>{{ mainArticle.title }}</h1>
                        <p>{{ mainArticle.created_at | formatDate }}</p>
                    </div>
                </section>

                <!-- seccion 3 -->
                <section class="row">
                    <div class="col-md-12" v-html="mainArticle.body">

                    </div>
                </section>

                <!-- seccion 4 -->
                <section class="row">
                    <div class="col-md-12">
                        <h2 style="color: #949A9D;">¿tienes un</h2>
                        <h2 class="segundo-titulo">comentario?</h2>
                    </div>
                </section>

                <!-- seccion 5 -->
                <!-- <section class="row d-flex justify-content-center align-items-center" style="position: relative;">
                    <div class="line-2" />
                    <div class="col-md-7 form">
                        <form action="">
                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-between align-items-center">
                                    <input type="text" placeholder="Tu nombre">
                                    <input type="email" placeholder="Tu email">
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <textarea name="" id="" cols="30" rows="5" placeholder="Tu comentario"></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-end">
                                    <button class="btn-submit" type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section> -->

                <!-- seccion 5 -->
                <section class="row">
                    <div class="col-md-12">
                        <vue-disqus shortname="partnergrammer-1"></vue-disqus>
                    </div>
                </section>

                <!-- seccion 6 -->
                <section class="row">
                    <div class="col-md-12">
                        <h2>ver más</h2>
                    </div>
                </section>

                <!-- seccion 7 -->
                <section class="row">
                    <div class="col-md-12">
                        <Articles />
                    </div>
                </section>
            </section>

            <Footer />
        </section>
    </div>
</template>

<script>
//Moment
var moment = require('moment')

//Componets
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'
import Articles from '../components/ArticlesComponent'

export default {
    name: 'Article',

    props: [
        'id'
    ],

    components: {
        Navbar,
        Footer,
        Articles,
    },

    data(){
        return{
            mainArticle: null
        }
    },

    mounted(){
        this.getArticle()
    },

    filters: {
        formatDate(args){
            let date = moment(args).startOf('hour').fromNow();
            return date
        }
    },

    methods: {
        async getArticle(){
            try {
                let URL = `/api/articles/${this.id}`

                let response = await axios.get(URL)

                if(response){
                    this.mainArticle = response.data
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>
