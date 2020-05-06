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
        margin-right: -15%;
        padding-right: 15%;
    }
    .img-right{
        position: absolute;
        left: 0;
        height: 300px;
    }
    .line-left{
        margin: auto;
        width: 100%;
        padding: 20px;
        padding-right: 250px;
        height: 200px;
        background-color: gray;
        color: white;
        margin-left: -15%;
        padding-left: 15%;
    }
    .img-left{
        position: absolute;
        right: 0;
        height: 300px
    }

    .line-button{
        background-color: transparent;
        margin-top: 10px;
        padding: 10px 35px;
        border-radius: 0px;
        border: 1px solid white;
        color: white;
    }

    .left{
        float: left;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
    }

    .right{
        float: right;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
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

                <!-- seccion 2 -->
                <section class="row">
                    <div class="col-md-12 d-flex justify-content-center align-items-center" v-for="(item, index) in projects" :key="index" style="margin-bottom: 150px;">
                        <img :src="item.image" alt="image" :class="[item.control ? 'img-left': 'img-right']">
                        <div :class="[item.control ? 'line-left ': 'line-right']" class="d-flex justify-content-center">
                            <div :class="[item.control ? 'left': 'right']">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.excerpt }}</p>
                                <button class="line-button" @click="goToProject(item.id)">ver mas</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Best Western -->
                <!-- <section class="row">
                    <img src="/images/think.jpg" alt="image" class="img-left">
                    <div class="line-left">
                        <div style="float: right">
                            <h2>Best Western</h2>
                            <p>Cadena hotelera</p>
                            <a href="#"><button class="line-button">ver mas</button></a>
                        </div>
                    </div>
                </section> -->

            </section>

            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/NavbarComponent'
import Footer from '../components/FooterComponent'

export default {
    name: 'Projects',

    components: {
        Navbar,
        Footer,
    },

    data(){
        return{
            projects: [],
        }
    },

    mounted(){
        this.getProjects()
    },

    methods: {
        goToProject(args){
            this.$router.push({ name: 'Project', params: { id: args } })
        },

        async getProjects(){
            try {
                this.projects = []
                let URL = '/api/projects/all'
                let response = await axios.get(URL)

                if (response) {
                    console.log(response.data)
                    response.data.forEach(element => {
                        this.projects.push(element)
                    });
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
