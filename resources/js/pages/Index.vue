<style lang="scss" scoped>
    h1,h2,h3{
      font-weight: 800;
    }
    p{
      font-weight: 500;
    }
    .main-box{
        margin: 0;
        padding: 0;
    }
    .container{
        position: relative;
    }

    .box-1{
        height: calc(100vh - 3em);
    }

    .box-1 h1{
        font-weight: bolder;
        font-size: 4em;
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

    .bg-2{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 100vh;
        left: 0;
        height: 100vh;
        width: 100%;
    }

    .box-2{
        height: calc(100vh);
        width: 100%;
    }

    .wrapper-carrusel{
        width: 100%;
        height: 700px;
        background-color: blue;
        transform: rotate(-90deg) translateY(210px);
        position: absolute;
        top: 0;
        left: 0;
    }

</style>

<template>
    <section class="main-box">
        <div class="row bg-1">
            <div class="col-md-6 d-flex justify-content-start align-items-end">
                <img src="/images/bg-2.png" width="70%" alt="" style="margin-left: -20%; margin-bottom: -10%;">
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-end">

                <img src="/images/computer-bg-1.png" width="100%" alt="">
            </div>
        </div>

        <div class="row bg-2">
            <div class="col-md-6 d-flex justify-content-start align-items-end">
                <img src="/images/bg-2.png" width="70%" alt="" style="margin-left: -20%; margin-bottom: -20%;">
            </div>
        </div>

        <div class="container">
            <Navbar />

            <!-- seccion 1 -->
            <section class="row box-1">
                <div class="col-md-7 d-flex justify-content-center align-items-around">
                    <div class="row justify-content-center align-items-end">
                        <div class="col-md-12">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                        </div>
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">nuestros</h2>
                            <h2 style="margin-left: 2em; line-height: 1px;">procesos</h2>
                        </div>
                    </div>
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row box-2" style="position: relative;">
                <div class="col-md-12 info-1 mt-3" style="background-color: ;">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptates, ipsum corrupti provident corporis, molestiae velit maxime quidem eaque reprehenderit aut laborum repellat quo ex praesentium quas hic dolore ut!</p>
                </div>
                <div class="col-md-12 info-2" style="background-color: ;">
                    <h2 style="color: #949A9D;">tu tranquilidad</h2>
                    <h2 style="margin-left: 2em; line-height: 1px;">nuestra prioridad</h2>
                    <div class="row">
                        <div class="col-md-6 offset-md-3 mt-4">
                            <p class="text-left" style="font-size: 13px; line-height: 12px;">Contamos con garantías que se te dan a conocer antes de la realización del proyecto, las cuales consisten en las siguientes:</p>
                        </div>
                        <div class="col-md-10 offset-md-1 mt-4 d-flex justify-content-start align-items-center p-2" style="background-color: #EE1331;">
                            <a class="text-left" style="font-size: 13px; color: white; margin-left: 3em; font-weight: bold;">Pagas a medida que te entregamos resultados</a>
                        </div>
                        <div class="col-md-10 offset-md-1 mt-4 d-flex justify-content-start align-items-center p-2" style="background-color: ;">
                            <ul style="padding: 0; margin-left: 20px;">
                                <li style="margin-top: 30px;">Penalización por tiempos</li>
                                <li style="margin-top: 30px;">Garantía de 90 días</li>
                                <li style="margin-top: 30px;">Todo se especifica en un contrato</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/NavbarComponent'

export default {
    name: 'Index',

    components: {
        Navbar
    },

    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
