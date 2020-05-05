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

    .main-container .row:nth-child(1), .row:nth-child(5), .row:nth-child(8){
        margin-top: 5em;
    }

    .main-container .row:nth-child(2), .row:nth-child(3), .row:nth-child(6), .row:nth-child(9){
        margin-top: 2em;
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
                    <div class="row">
                        <div class="col-md-12" style="background-color: #EE1331; padding: 10px; color: white; display: flex;">
                            <p style="margin-left: 2.5%;">-></p>
                            <p style="margin-left: 2.5%;">Pagas a medida que te entregamos resultados</p>
                        </div>
                        <div class="col-md-12">
                            <ul>
                                <li style="margin-left: 5%; margin-top: 5%;">
                                    <p style="margin-left: 20px;">Lista 1</p>
                                </li>
                                <li style="margin-left: 5%; margin-top: 5%;">
                                    <p style="margin-left: 20px;">Lista 1</p>
                                </li>
                                <li style="margin-left: 5%; margin-top: 5%;">
                                    <p style="margin-left: 20px;">Lista 1</p>
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
        </section>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'

export default {
    name: 'Home',

    components: {
        Navbar,
        Footer,
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