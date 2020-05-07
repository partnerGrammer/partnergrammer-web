<style scoped>

    .main-container-articles *{
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

    .entradas{
        padding: 10px;
        min-height: 400px;
        cursor: pointer;
    }

    .entradas article{
        background-color: white;
        box-shadow: 3px 3px 10px #BFBFBF;
        min-height: 400px;
    }

    .entradas article div:nth-child(2){
        padding: 10px;
    }

    .entradas article div:nth-child(2) div{
        margin-top: 4em;
        font-size: 0.8em;
    }

    .entradas article div:nth-child(2) div p:nth-child(2){
        margin-top: 1em;
    }

    .entradas article .container-image{
        width: 100%;
        padding-top: 40%; /* 1:1 Aspect Ratio */
        position: relative; /* If you want text inside of it */
        background-position: center;
        background-size: cover;
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

    .controls{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
    }

    .controls .control:nth-child(1){
        margin-right: 10px;
    }

    .control{
        background-color: #EE1331;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .control:hover{
        background-color: #B9051D;
    }

    .control i{
        color: white;
    }
</style>

<template>
    <section class="main-container-articles">
        <!-- seccion 4 -->
        <section class="row">
            <div class="col-md-4 entradas" v-for="(item, index) in articles" :key="index" @click="goToArticle(item.id)">
                <article>
                    <div class="col-md-12">
                        <div class="container-image">
                            <img :src="item.banner" width="100%" alt="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h5>{{ item.title }}</h5>
                        
                        <div>
                            <p style="color: #B5B5B5;">{{ item.created_at | formatDate }}</p>
                            <p>{{ item.excerpt }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <!-- seccion 5 -->
        <section class="row">
            <div class="col-md-12 controls">
                <div v-show="count != 1" class="control" @click="count--">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div v-show="count != lastPage" class="control" @click="count++">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
//Moment
var moment = require('moment')

export default {
    name: 'Blog',

    components: {
        
    },

    data(){
        return{
            articles: [],
            count: 1,
            lastPage: null
        }
    },

    mounted(){
        this.getArticles()

    },

    filters: {
        formatDate(args){
            let date = moment(args).startOf('hour').fromNow();
            return date
        }
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

