<style scoped>
    .container{
        position: relative;
    }

    h1{
        font-size: 4em;
    }

    .main-container *{
        padding: 0;
        margin: 0;

    }

    .image-about{
        width: 9vw;
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

    .main-container > .row:nth-child(1), .row:nth-child(2){
        margin-top: 5em;
    }

    .main-container > .row:nth-child(3){
        position: relative;
        margin-top: 10em;
    }

    .line{
        width: 140%;
        height: 250px;
        background-color: #EE1331;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -10%;
        margin-right: -20%;
    }

    .main-container h2{
        font-size: 3em;
        font-weight: bold;
    }

    .partner{
        background-color: white;
        box-shadow: 3px 3px 10px #BFBFBF;
        position: relative;
        height: auto;
        padding-left: 20%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 50px;
        margin-left: -20%;
    }

    .btn-next{
        display: inline-block;
        background-color: #EE1331;
        color: white;
        padding: 5px 30px;
        position: absolute;
        bottom: -20px;
        right: -25px;
        border-radius: 0px;
        width: 150px;
        height: 40px;
    }

    .form{
        margin-top: 3em;
    }

    .form input{
        width: 100%;
        margin-top: 10px;
        height: 35px;
        border: none;
        border: 1px solid #949A9D;
        padding: 10px;
    }

    .form textarea{
        width: 100%;
        margin-top: 10px;
        border: none;
        border: 1px solid #949A9D;
        padding: 10px;
    }

    .main-container{
        margin-top: 9em;
    }
    @media only screen and (max-width: 767px){
        .main-container{
            margin-top: 11em;
        }
    }

    @media only screen and (max-width: 600px){

        .line{
            width: 100%;
            margin:0;
        }

        .partner{
            margin-left: 0;
        }

        .btn-next{
            bottom: 0;
            right: 0;
        }
    }

</style>

<template>
    <div class="container">
        <Navbar />

        <section class="main-container" >
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-12 col-md-6">
                    <img src="/images/partner.png" width="100%" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-start align-items-center flex-column" style="padding-top: 5em;">
                    <h1>¡Conviértete en un Agency Partner!</h1>
                    <p class="mt-3" style="color: #949A9D;">Trabaja como uno de nuestros socios y ofrece una variedad de servicios de calidad a más personas. Nuestro modelo de agency partner te permite desarrollar tu negocio a tu manera, todo de acuerdo a tus propios tiempos. Nuestro programa está creado para cualquier persona que quiera expandir su negocio y obtener mayores ganancias sin contratar más personal. Puedes trabajar bajo nuestro esquema o incluso tener tu propia agencia y nosotros te ofrecemos el soporte.</p>
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row">
                <div class="col-md-6">
                    <p>Si te interesa conocer más y estás listo para hacer crecer tu negocio, llena el siguiente formulario y nosotros nos comunicamos contigo:</p>
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="line" />
                <!-- formulario 1 -->
                <div class="col-md-12 partner" v-if="control == 1">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">¿Estás listo para comenzar?</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">Empecemos con tu nombre y correo electrónico</h3>
                            <div class="row">
                                <div class="col-md-6" style="padding: 5px;">
                                    <input type="text" placeholder="Tu nombre" v-model="form.name">
                                </div>
                                <div class="col-md-6" style="padding: 5px;">
                                    <input type="text" placeholder="Tu apellido" v-model="form.lastName">
                                </div>
                                <div class="col-md-12" style="padding: 5px;">
                                    <input type="email" placeholder="Tu correo electronico" v-model="form.email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-next" @click="control++">¡listo!</button>
                </div>

                <!-- formulario 2 -->
                <div class="col-md-12 partner" v-if="control == 2">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">{{ saludo }}</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">¿Ya cuentas con tu propio negocio?</h3>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-2" style="padding: 5px;">
                                    <input type="radio" name="control" :value="true" v-model="flag" id="input-1">
                                    <label for="input-1">Si</label>
                                </div>
                                <div class="col-md-2" style="padding: 5px;">
                                    <input type="radio" name="control" :value="false" v-model="flag" id="input-2">
                                    <label for="input-2">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-next" @click="control++">siguiente</button>
                </div>
                <!-- SI -->
                    <!-- formulario 3 -->
                    <div class="col-md-12 partner" v-if="control == 3 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Cuéntanos sobre tu negocio</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿Cómo se llama?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Nombre de tu empresa" v-model="form.empresa">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">siguiente</button>
                    </div>

                    <!-- formulario 4 -->
                    <div class="col-md-12 partner" v-if="control == 4 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Cuéntanos sobre tu negocio</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿A cuál sector pertenece?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Sector" v-model="form.sector">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">siguiente</button>
                    </div>

                    <!-- formulario 5 -->
                    <div class="col-md-12 partner" v-if="control == 5 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Cuéntanos sobre tu negocio</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿Tienes un correo electrónico comercial?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Sector" v-model="form.emailComercial">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">siguiente</button>
                    </div>

                    <!-- formulario 6 -->
                    <div class="col-md-12 partner" v-if="control == 6 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Cuéntanos sobre tu negocio</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿Cuál es el teléfono de la empresa?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Sector" v-model="form.telephone">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">enviar</button>
                    </div>

                <!-- NO -->
                    <!-- formulario 3 -->
                    <div class="col-md-12 partner" v-if="control == 3 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Ahora cuéntanos un poco sobre ti</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿Cuál es tu teléfono celular?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Tel. 000 000 0000" v-model="form.number">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">siguiente</button>
                    </div>

                    <!-- formulario 4 -->
                    <div class="col-md-12 partner" v-if="control == 4 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Ahora cuéntanos un poco sobre ti</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿En dónde resides actualmente?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Tu respuesta" v-model="form.city">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">siguiente</button>
                    </div>

                    <!-- formulario 5 -->
                    <div class="col-md-12 partner" v-if="control == 5 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">Y para terminar,</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">¿Tienes alguna pregunta o comentario?</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <textarea name="" id="" cols="30" rows="4" placeholder="Tus comentarios" v-model="form.comments"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">enviar</button>
                    </div>
                <!-- final -->
                <div class="col-md-12 partner" v-if="(control == 7) || (control == 6 && !flag)">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">¡Muchas gracias!</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">Muy pronto estaremos en contacto contigo.</h3>
                            <div class="row">
                                <div class="col-md-12" style="padding: 5px;">
                                </div>
                            </div>
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
            control: 1,
            flag: true,
            form: {
                name: '',
                lastName: '',
                email: '',
                empresa: '',
                sector: '',
                emailComercial: '',
                telephone: '',
                number: '',
                city: '',
                comments: '',
            },
        }
    },

    mounted(){

    },

    watch: {
        control(){
            if ((this.control == 7) || (this.control == 6 && !this.flag)) {
                this.sendForm()
            }
        }
    },

    computed: {
        saludo(){

            let nombreCompleto = '¡Mucho gusto, ' + this.form.name.charAt(0).toUpperCase() + this.form.name.slice(1) + ' ' + this.form.lastName.charAt(0).toUpperCase() + this.form.lastName.slice(1) + '!'
            return nombreCompleto
        }
    },


    methods: {
        goToArticle(args){
            this.$router.push({ name: 'Article', params: { id: args } })
        },

        async sendForm(){

            try {
                let URL = '/email/partner'
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
        }
    }
}
</script>
