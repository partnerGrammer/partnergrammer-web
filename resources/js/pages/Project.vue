<style scoped>
    h1,h2,h3{
      font-weight: 800;
    }
    p{
      font-weight: 500;
    }
    .container{
        position: relative;
    }

    .main-container *{
        padding: 0;
        margin: 0;

    }
    .main-container{
        margin-top: 9em;
    }

    .image-about{
        width: 9vw;
    }

    .container-image{
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

    .main-container .row:nth-child(1), .row:nth-child(2), .row:nth-child(3), .row:nth-child(4), .row:nth-child(5){
        margin-top: 5em;
    }

    .main-container .row:nth-child(16){
        margin-top: 2em;
    }

    .main-container .row:nth-child(2){
        position: relative;
    }

    .line{
        width: 100%;
        height: 300px;
        background-color: #EE1331;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        margin-right: -20%;
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .segundo-titulo{
        margin-left: 3%
    }

    @media only screen and (max-width: 767px){
        .main-container{
            margin-top: 11em;
        }
        #img-proyecto{
            max-width: 40%;
        }

    }

</style>

<template>
    <div class="container">
        <Navbar />

        <section class="main-container" v-if="mainProject != null">
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">¿que</h2>
                    <h2 class="segundo-titulo">hacemos?</h2>
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row">
                <div class="line">
                    <div class="col-md-12 d-flex justify-content-around align-items-start flex-column" style="color: white; padding: 20px 25%; height: 300px;">
                        <div class="col-md-4">
                            <img id="img-proyecto" :src="mainProject.logo" alt="">
                        </div>
                        <p>{{ mainProject.body }}</p>
                    </div>
                </div>
                <div class="col-md-5">
                    <img :src="mainProject.image" width="100%" alt="">
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">conoce más</h2>
                    <h2 class="segundo-titulo">de nuestros proyectos</h2>
                </div>
            </section>

            <!-- seccion 4 -->
            <section class="row">
                <div class="col-md-12">
                    <Projects />
                </div>
            </section>

            <!-- seccion 5 -->
            <section class="row">
                <div class="col-md-12">
                    <h2 style="color: #949A9D;">¿que tienes en mente?</h2>
                    <h2 class="segundo-titulo">contactanos</h2>
                </div>
            </section>

            <!-- seccion 6 -->
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
import Projects from '../components/ProjectsComponent'
import Contact from '../components/ContactComponent'

export default {
    name: 'Project',

    components: {
        Navbar,
        Footer,
        Projects,
        Contact
    },

    props: [
        'id'
    ],

    data(){
        return{
            mainProject: null
        }
    },

    mounted(){
        this.getArticle()
    },

    methods: {
        async getArticle(){
            try {
                let URL = `/api/projects/${this.id}`

                let response = await axios.get(URL)

                if(response){
                    this.mainProject = response.data
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>
