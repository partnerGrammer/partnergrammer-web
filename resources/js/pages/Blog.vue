<style scoped>
    .container{
        position: relative;
    }

    .main-container *{
        padding: 0;
        margin: 0;
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

    .btn-leer-mas{
        display: inline-block;
        padding: 10px 35px;
        background-color: #EE1331;
        color: white;
    }

    .main-container .row:nth-child(1), .row:nth-child(2), .row:nth-child(3), .row:nth-child(4){
        margin-top: 5em;
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .entrada-principal div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 2em;
    }

    .entrada-principal div:nth-child(2) p{
        font-size: 0.9em;
    }

</style>

<template>
    <div class="container">
        <Navbar />

        <section class="main-container" style="margin-top: 9em">
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">tendencias</h2>
                    <h2>blog</h2>
                </div>
            </section>

            <!-- seccion 2 -->
            <article class="row entrada-principal" v-if="mainArticle != null">
                <div class="col-md-5">
                    <div class="container-image">
                        <img :src="mainArticle.banner" width="100%" alt="">
                    </div>
                </div>
                <div class="col-md-7">
                    <h3>{{ mainArticle.title }}</h3>

                    <p>{{ mainArticle.excerpt }}</p>

                    <a class="btn-leer-mas" href="#" @click="goToArticle(mainArticle.id)">leer más</a>
                </div>
            </article>

            <!-- seccion 3 -->
            <section class="row">
                <div class="col-md-12">
                    <h2>ver más</h2>
                </div>
            </section>

            <!-- seccion 4 -->
            <section class="row">
                <div class="col-md-12">
                    <Articles />
                </div>
            </section>
        </section>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'
import Articles from '../components/ArticlesComponent'

export default {
    name: 'Blog',

    components: {
        Navbar,
        Footer,
        Articles,
    },

    data(){
        return{
            mainArticle: null,
            articles: [],
            count: 1,
            lastPage: null
        }
    },

    mounted(){
        this.getArticle()
        this.getArticles()
    },

    watch:{
        count(){
            this.getArticles()
        }
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
