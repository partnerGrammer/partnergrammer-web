<style scoped>
    .main-box{
        padding: 0;
        margin: 0;
    }

    .projects-container{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        background-color: white;
    }

    .container{
        position: relative;
    }

    .main-container *{
        padding: 0;
        margin: 0;
    }

    .container-image{
        width: 100%;
        padding-top: 90%; /* 1:1 Aspect Ratio */
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

    .main-container .row:nth-child(1), .row:nth-child(2), .row:nth-child(3), .row:nth-child(4){
        margin-top: 5em;
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .line-right{
        margin: auto;
        width: 100%;
        padding: 20px;
        padding-left: 250px;
        height: 200px;
        background-color: #EE1331;
        color: white;
    }
    .img-right{
        position: absolute;
        left: 0;
        height: 200px;
    }
    .line-left{
        margin: auto;
        width: 100%;
        padding: 20px;
        padding-right: 250px;
        height: 200px;
        background-color: gray;
        color: white;
    }
    .img-left{
        position: absolute;
        right: 0;
        height: 200px
    }

    .line-button{
        background-color: transparent;
        border-color: black;
        border-style: solid;
        border-radius: 20px;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 20px;
    }

</style>

<template>
    <div class="main-box">
        <div class="container">
            <Navbar />

            <section class="main-container">
                <!-- seccion 1 -->
                <section class="row">
                    <div class="col-md-12">
                        <h2 style="color: #949A9D;">todo empieza con una plática</h2>
                        <h2>nosotros ponemos el café</h2>
                    </div>
                </section>

                <!-- seccion 2 -->
                <section class="row">
                    <div class="col-md-12 text-center">
                        <h2 style="color: #949A9D;">¿qué</h2>
                        <h2>hacemos?</h2>
                    </div>
                </section>

                <!-- Mega Mundo Decor -->
                <section class="row">
                    <img src="/images/think.jpg" alt="image" class="img-right">
                    <div class="line-right">
                        <div style="float: left">
                            <h2>Mega Mundo Decor</h2>
                            <p>Organizadores de eventos de excelente calidad y venta de mobiliario.</p>
                            <a href="#"><button class="line-button">ver mas</button></a>
                        </div>
                    </div>
                </section>

                <!-- Best Western -->
                <section class="row">
                    <img src="/images/think.jpg" alt="image" class="img-left">
                    <div class="line-left">
                        <div style="float: right">
                            <h2>Best Western</h2>
                            <p>Cadena hotelera</p>
                            <a href="#"><button class="line-button">ver mas</button></a>
                        </div>
                    </div>
                </section>

            </section>

            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'

export default {
    name: 'Blog',

    components: {
        Navbar,
        Footer,
    },

    data(){
        return{
            mainProject: null,
            projects: [],
            count: 1,
            lastPage: null
        }
    },
    created(){
        window.instgrm.Embeds.process()
    },

    mounted(){
        this.getProject()
        this.getProjects()
    },

    watch:{
        count(){
            this.getArticles()
        }
    },

    methods: {
        goToProject(args){
            this.$router.push({ name: 'Project', params: { id: args } })
        },

        async getProject(){
            try {
                let URL = '/api/project'
                let response = await axios.get(URL)

                if(response){
                    this.mainArticle = response.data
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getProjects(){
            try {
                this.articles = []
                let URL = `/api/projects?page=${this.count}`
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
