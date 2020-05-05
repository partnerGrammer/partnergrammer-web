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

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .image-about{
        width: 20vw;
    }

    .line{
        width: 100%;
        height: 110%;
        background-color: #EE1331;
        position: absolute;
        top: -5%;
        right: 0;
        margin-right: -20%;
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

</style>

<template>
    <div class="container">
        <Navbar />
        
        <section class="main-container">
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore.</p>
                </div>
                <div class="col-md-6">
                    <img src="/images/computer-bg-1.png" width="100%" alt="">
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">nuestros</h2>
                    <h2>procesos</h2>
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore.</p>
                </div>
            </section>

            <!-- seccion 4 -->
            <section class="row">
                <div class="col-md-12 carrousel">
                    
                </div>
            </section>

            <!-- seccion 5 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">tu tranquilidad</h2>
                    <h2>nuestra prioridad</h2>
                </div>
            </section>

            <!-- seccion 6 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore.</p>
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
                            <p style="margin-left: 55px;">Pagas a medida que te entregamos resultados</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12"> 
                            <ul style="margin-left: 30px;">
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em;">Lista 1</p>
                                </li>
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em;">Lista 1</p>
                                </li>
                                <li>
                                    <p style="margin-left: 50px; font-size: 1.2em; margin-top: 1.2em;">Lista 1</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- seccion 8 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">¿que</h2>
                    <h2>hacemos?</h2>
                </div>
            </section>

            <!-- seccion 9 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore.</p>
                </div>
            </section>

            <!-- seccion 10 -->
            <section class="row">
                <div class="line" />
                <div class="col-md-4">
                    <div class="container-image-2">
                        <img src="https://vignette.wikia.nocookie.net/kpop/images/2/27/ELRIS_Bella_Jackpot_concept_photo_%283%29.png/revision/latest?cb=20200227233639" width="100%" alt="">
                    </div>
                </div>
                <div class="col-md-8 d-flex justify-content-around align-items-start flex-column text-left pl-5" style="color: white;padding: 20px 0;">
                    <h2>Proyectos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis voluptatem. Dolor voluptate quis, repellendus perspiciatis officiis voluptatibus illo magnam laboriosam ex in qui nesciunt facilis consectetur molestiae pariatur iusto.</p>
                    <a class="btn btn-ver-mas" href="#">Ver mas</a>
                </div>
            </section>

            <!-- seccion 11 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">nuestros</h2>
                    <h2>clientes</h2>
                </div>
            </section>

            <!-- seccion 12 -->
            <section class="row">
                <div class="col-md-12 d-flex justify-content-around align-items-center flex-wrap">
                    <img src="https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg" width="200px" alt="">
                    <img src="https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg" width="200px" alt="">
                    <img src="https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg" width="200px" alt="">
                    <img src="https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg" width="200px" alt="">
                    <img src="https://www.websmultimedia.com/style/img/trabajos/logotipo-areco.jpg" width="200px" alt="">
                </div>
            </section>

            <!-- seccion 13 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">nuestros</h2>
                    <h2>expertos</h2>
                </div>
            </section>

            <!-- seccion 14 -->
            <section class="row">
                <div class="line" />
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="https://img1.kpopmap.com/2017/05/ELRS-Jackpot-Concept-Photo-profile.jpg" width="100%" alt="">
                        </div>
                        <div class="col-md-12 mt-2">
                            <img src="https://thebiaslistcom.files.wordpress.com/2017/06/elris-we-first.jpg" width="100%" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-12 ml-2">
                            <img src="https://vignette.wikia.nocookie.net/kpop/images/2/27/ELRIS_Bella_Jackpot_concept_photo_%283%29.png/revision/latest?cb=20200227233639" width="100%" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex justify-content-center align-items-start flex-column pl-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga libero amet illo suscipit iste, error accusamus dolore dolorem debitis. Nemo, porro numquam! Aliquid ut porro harum officia quae? Cumque!</p>
                    <a class="btn btn-ver-mas-2" href="#">ver mas</a>
                </div>
            </section>

            <!-- seccion 15 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">¿que tienes en mente?</h2>
                    <h2>contactanos</h2>
                </div>
            </section>

            <!-- seccion 16 -->
            <section class="row">
                <div class="col-md-12 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro reprehenderit inventore.</p>
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