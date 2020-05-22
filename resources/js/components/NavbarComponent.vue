<style lang="sass" scoped>
    .navbar
        position: fixed
        left: 0
        top: 0
        width: 100vw
        z-index: 200
        height: 8em
        padding: 0 25px
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

    .nav-showNavbar
        background-color: #FFFFFF
        height: 5em

    #logo-navbar
        width: auto
        height: 70px

    .navbar
        display: flex

    .navbar-movil
        display: none


    @media only screen and (max-width: 960px) and (min-width: 768px)
        .nav-section-2 > a
            padding: 0 10px

        .nav-section-1
            flex: 0 0 30%
            max-width: 30%

        .nav-section-2
            left:-100px
    @media only screen and (max-width: 767px)
        #logo-navbar
            height: 35px

    @media only screen and (max-width: 600px)
        .navbar
            display: none

        .navbar-movil
            display: flex

        .hamburger
            font-size: 14px
        .section-1
            height: 5.5em
            width: 100%
            background-color: #F8FAFC
            position: fixed
            top: 0
            z-index: 10000

        .section-2
            width: 100%
            height: calc(100vh - 3.5em)
            background-color: #F8FAFC
            position: fixed
            top: 3.5em
            z-index: 10000

        .section-2 a
            display: block
            color: black
            font-weight: bold

        .section-2-btn-contact
            color: white
            display: inline-block
            background-color: #EE1331
            padding: 5px 15px

        .section-2-nav
            padding-top: 7em
            padding-bottom: 7em
            background-color: #F8FAFC
            height: calc(100vh - 3em)
            display: flex
            justify-content: space-around
            align-items: flex-end
            flex-direction: column
            font-size: 19px

        .slide-fade-enter-active
            transition: all .3s ease

        .slide-fade-leave-active
            transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

        .slide-fade-enter, .slide-fade-leave-to
            transform: translateX(10px)
            opacity: 0
        .box-btn
            padding: 0
</style>

<template>
    <section>
        <nav class="row navbar" :class="{ 'nav-showNavbar': !showNavbar }" style="margin-left: 0px; margin-right: 0px;">
            <div class="col-md-6 nav-section-1">
                <router-link to="/"><img id="logo-navbar" src="/images/logos/logo.svg" alt="LOGO" ></router-link>
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

        <section class="row navbar-movil">
            <div class="col-md-12 section-1">
                <div class="row">
                    <div class="col-6">
                        <router-link to="/"><img src="/images/logos/logo.svg" alt="LOGO" style="width:auto; height: 70px;"></router-link>
                    </div>
                    <div class="col-6 d-flex justify-content-end" @click="menuMovil = !menuMovil">
                        <button class="hamburger hamburger--collapse" :class="[menuMovil ? 'is-active' : '']" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <transition name="slide-fade">
                <div v-if="menuMovil" class="col-md-12 section-2">
                    <div class="row">
                        <div class="col-6"></div>
                        <div class="col-6 section-2-nav">
                            <router-link to="/">inicio</router-link>
                            <router-link to="/projects">portafolio</router-link>
                            <router-link to="/about">nosotros</router-link>
                            <!-- <router-link to="/">servicio</router-link> -->
                            <router-link to="/partners">partners</router-link>
                            <router-link to="/blog">blog</router-link>
                            <button data-toggle="modal" data-target="#modalContacto" class="section-2-btn-contact">contacto</button>
                        </div>
                    </div>
                </div>
            </transition>
        </section>

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
                            <div class="col-md-12" style="background-color: #EE1331; height: 350px;">
                                <button type="button" class="close mr-2 mt-2" style="z-index: 1000; position: absolute; right: 0;" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
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
//Vuelidate
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Navbar',

    data(){
        return{
            form: {
                name: '',
                email: '',
                information: '',
                message: '',
            },

            showNavbar: true,

            menuMovil: false
        }
    },


    mounted(){
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    validations: {
        form: {
            name: {
                required,
            },
            email: {
                required,
                email
            },
            message: {
                required,
            },
        }
    },

    computed: {
        erroresName: function(){
            let errores = []
            if(!this.$v.form.name.$dirty){
                return errores
            }

            if(!this.$v.form.name.required){
                errores.push('Ingresa tu nombre')
            }

            return errores
        },

        erroresEmail: function(){
            let errores = []
            if(!this.$v.form.email.$dirty){
                return errores
            }

            if(!this.$v.form.email.required){
                errores.push('Ingresa tu email')
            }

            if(!this.$v.form.email.email){
                errores.push('Ingresa un email valido')
            }

            return errores
        },

        erroresMessage: function(){
            let errores = []
            if(!this.$v.form.message.$dirty){
                return errores
            }

            if(!this.$v.form.message.required){
                errores.push('Ingresa tu mensaje')
            }

            return errores
        },
    },

    methods: {
        async sendForm(){

            if(this.$v.form.$invalid){
                this.$v.form.$touch()
                let toast1 = this.$toasted.show(this.erroresName[0], {
                        theme: "bubble",
                        position: "bottom-center",
                        type: 'error',
                        duration : 5000,
                        icon : {
                            name : 'error'
                        },
                        action : {
                            text : 'OK',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    })
                let toast2 = this.$toasted.show(this.erroresEmail[0], {
                        theme: "bubble",
                        position: "bottom-center",
                        type: 'error',
                        duration : 5000,
                        icon : {
                            name : 'error'
                        },
                        action : {
                            text : 'OK',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    })
                let toast3 = this.$toasted.show(this.erroresMessage[0], {
                        theme: "bubble",
                        position: "bottom-center",
                        type: 'error',
                        duration : 5000,
                        icon : {
                            name : 'error'
                        },
                        action : {
                            text : 'OK',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    })
                console.log(this.erroresName)
                console.log(this.erroresEmail)
                console.log(this.erroresMessage)
                return
            }

            try {
                let URL = '/email/contact'
                let response = await axios.post(URL, this.form)

                if(response){
                    console.log('Mensaje enviado')
                    let toast = this.$toasted.show("Mensaje enviado!!", {
                        theme: "bubble",
                        position: "bottom-center",
                        type: 'success',
                        duration : 5000,
                        icon : {
                            name : 'check'
                        },
                        action : {
                            text : 'OK',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    })
                }
            } catch (error) {
                console.log(error)

            }
        },
        onScroll () {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition > 0) {
              this.showNavbar= false
            } else {
              this.showNavbar= true
            }
        }
    }
}
</script>
