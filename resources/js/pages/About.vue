<style scoped>
    .container{
        position: relative;
    }

    .main-container *{
        padding: 0;
        margin: 0;

    }

    .image-about{
        width: 9vw;
        margin: 0 10px;
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

    .main-container .row:nth-child(1), .row:nth-child(4){
        margin-top: 5em;
    }

    .main-container .row:nth-child(2), .row:nth-child(5), .row:nth-child(6){
        margin-top: 2em;
    }

    .main-container .row:nth-child(3){
        position: relative;
        margin-top: 10em;
    }

    .main-container .row:nth-child(3) div{
        display: flex;
        justify-content: space-between;
    }

    .main-container .row:nth-child(6) .container-image{
        padding-top: 100%;
    }

    .main-container .row:nth-child(7) .container-image{
        padding-top: 40%;
    }

    .line{
        width: 100%;
        height: 200px;
        background-color: #EE1331;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -5%;
        margin-right: -20%;
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
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">your</h2>
                    <h2>partners</h2>
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row">
                <div class="col-md-3" />
                <div class="col-md-7 offset-4 text-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit facilis nam quasi libero vitae maxime, inventore incidunt, ipsum magni necessitatibus repudiandae sapiente sequi animi iste veritatis a! Recusandae, ab.</p>
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="line" />
                <div class="col-md-12">
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/luis.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/judith.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/lalo.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/gera.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/meny.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/talita.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">
                            <img src="/images/monica.png" width="100%" alt="">
                        </div>
                    </div>
                    <div class="image-about">
                        <div class="container-image">

                        </div>
                    </div>
                </div>
            </section>

            <!-- seccion 4 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">tu historia y la nuestra</h2>
                    <h2>son muy similares</h2>
                </div>
            </section>

            <!-- seccion 5 -->
            <section class="row">
                <div class="col-md-3" />
                <div class="col-md-7 offset-4 text-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit facilis nam quasi libero vitae maxime, inventore incidunt, ipsum magni necessitatibus repudiandae sapiente sequi animi iste veritatis a! Recusandae, ab.</p>
                </div>
            </section>

            <!-- seccion 6 -->
            <section class="row">
                <div class="col-md-3" />
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-4 col-md-4">
                            <div class="container-image">
                                <img src="/images/SCRUM-CSD+.png" width="100%" alt="">
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="container-image">
                                <img src="/images/SCRUM-CSPO.png" width="100%" alt="">
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="container-image">
                                <img src="/images/SCRUM-CSPSM.png" width="100%" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- seccion 7 -->
            <section class="row">
                <div class="col-md-4" />
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="/images/SCRUM.png" width="100%" alt="">
                        </div>
                    </div>
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
    name: 'About',

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
