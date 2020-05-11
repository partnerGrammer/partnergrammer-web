<style lang="sass" scoped>
    *
        padding: 0
    .navbar
        height: 3em
    .nav-section-1
        display: flex
        justify-content: flex-start
        align-items: center
    .nav-section-1 > a
        color: black
        display: inline-block
    .nav-section-2
        display: flex
        justify-content: space-between
        align-items: center
    .nav-section-2 > a
        color: black
        text-decoration: none
        
    .nav-section-2 > .nav-section-2-btn-contact
        color: white
        display: inline-block
        background-color: #EE1331
        padding: 5px 15px

    .btn-ver-mas-2
        display: inline-block
        padding: 10px 35px
        color: white
        background-color: #EE1331
        font-size: 14px
        border-radius: 0px
        margin-top: 20px
    
    .main-box
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin: auto
        padding: 50px 50px


    .contacto
        margin-top: 1em
        box-shadow: 3px 3px 10px #BFBFBF
        padding: 20px 10%
        background-color: white
    

    .contacto input
        width: 100%
        margin-top: 10px
        height: 35px
        border: none
        border: 1px solid black
        padding: 10px
    

    .contacto textarea
        width: 100%
        margin-top: 10px
        border: none
        border: 1px solid black
        padding: 10px
    
</style>

<template>
    <section>
        <nav class="row navbar">
            <div class="col-md-6 nav-section-1">
                <router-link to="/">LOGO</router-link>
            </div>
            <div class="col-md-6 nav-section-2">
                <router-link to="/">inicio</router-link>
                <router-link to="/projects">portafolio</router-link>
                <router-link to="/about">nosotros</router-link>
                <!-- <router-link to="/">servicio</router-link> -->
                <router-link to="/partners">partners</router-link>
                <router-link to="/blog">blog</router-link>
                <button data-toggle="modal" data-target="#modalContacto" class="nav-section-2-btn-contact">contacto</button>
            </div>
        </nav>

        <!-- modal contacto -->
        <div class="modal fade" id="modalContacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div> -->
                    <div class="modal-body">
                        <div class="row" style="position: relative;">
                            <div class="col-md-12" style="background-color: #EE1331; height: 350px;"></div>
                            <div class="col-md-12" style="background-color: white; height: 350px;"></div>

                            <div class="col-md-11 main-box">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color: white;">¿qué tienes en mente?</h2>
                                        <h2 style="color: white;">¡contáctanos!</h2>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3" />
                                    <div class="col-md-8">
                                        <p style="color: white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>

                                <section class="row">
                                    <div class="col-md-1" />
                                    <div class="col-md-10 contacto">
                                        <form action="#" @submit.prevent="sendForm">
                                            <div class="col-md-12">
                                                <input type="text" placeholder="Tu nombre" v-model="form.name" @blur="$v.form.name.$touch()">
                                            </div>
                                            <div class="col-md-12">
                                                <input type="email" placeholder="Tu correo" v-model="form.email" @blur="$v.form.email.$touch()">
                                            </div>
                                            <div class="col-md-12">
                                                <input type="text" placeholder="¿Que quieres hacer?" v-model="form.information">
                                            </div>
                                            <div class="col-md-12">
                                                <textarea name="" id="" cols="30" rows="4" v-model="form.message" @blur="$v.form.message.$touch()" placeholder="Cuentanos mas de tu proyecto"></textarea>
                                            </div>
                                            <div class="col-md-12 d-flex justify-content-end align-items-center">
                                                <button type="submit" class="btn btn-ver-mas-2" href="#">Enviar</button>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Navbar',

    data(){
        return{
            form: {
                name: '',
                email: '',
                information: '',
                message: '',
            }
        }
    },

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
