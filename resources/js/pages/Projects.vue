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

    .line{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 90%;
        margin-left: 10%;
        height: 300px;
        background-color: #EE1331;
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