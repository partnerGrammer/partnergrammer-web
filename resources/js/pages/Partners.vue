<style scoped>
    .container{
        position: relative;
    }

    h1{
        font-size: 4em;
    }
    h1,h2,h3{
      font-weight: 800;
    }
    p{
      font-weight: 500;
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
    #banner-texto{
        padding-top: 5em;
        margin-left: 20px;
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

    @media only screen and (max-width: 500px){
        #banner-texto{
            padding-top: 1em;
            font-size: 0.7rem;
        }
    }

</style>

<template>
    <div class="container">
        <Navbar />

        <section class="main-container" >
            <!-- seccion 1 -->
            <section class="row">
                <div class="col-12 col-md-6 wow animate__animated animate__fadeInLeft">
                    <img src="/gifs/PARTNERS.gif" style="width: 135%; margin-left: -18%" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-start align-items-center flex-column wow animate__animated animate__fadeInRight" id="banner-texto" style="padding-top: 5em;">
                    <h1>{{ $t('partners.sec_01') }}</h1>
                    <p class="mt-3" style="color: #949A9D; font-size: 0.9rem;">{{ $t('partners.sec_01_1') }}</p>
                </div>
            </section>

            <!-- seccion 2 -->
            <section class="row">
                <div class="col-md-6">
                    <p>{{ $t('partners.sec_02') }}</p>
                </div>
            </section>

            <!-- seccion 3 -->
            <section class="row">
                <div class="line" />
                <!-- formulario 1 -->
                <div class="col-md-12 partner" v-if="control == 1">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">{{ $t('partners.sec_03') }}</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">{{ $t('partners.sec_03_1') }}</h3>
                            <div class="row">
                                <div class="col-md-6" style="padding: 5px;">
                                    <input type="text" v-bind:placeholder="$t('partners.sec_03_2')" v-model="form.name">
                                </div>
                                <div class="col-md-6" style="padding: 5px;">
                                    <input type="text" v-bind:placeholder="$t('partners.sec_03_3')" v-model="form.lastName">
                                </div>
                                <div class="col-md-12" style="padding: 5px;">
                                    <input type="email" v-bind:placeholder="$t('partners.sec_03_4')" v-model="form.email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-next" @click="control++">{{ $t('partners.sec_03_5') }}</button>
                </div>

                <!-- formulario 2 -->
                <div class="col-md-12 partner" v-if="control == 2">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">{{ $t('partners.sec_04') }} {{ saludo }}</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">{{ $t('partners.sec_05') }}</h3>
                            <div class="row">
                                <div class="col-md-4"></div>
                                <div class="col-md-2" style="padding: 5px;">
                                    <input type="radio" name="control" :value="true" v-model="flag" id="input-1">
                                    <label for="input-1">{{ $t('partners.sec_05_1') }}</label>
                                </div>
                                <div class="col-md-2" style="padding: 5px;">
                                    <input type="radio" name="control" :value="false" v-model="flag" id="input-2">
                                    <label for="input-2">{{ $t('partners.sec_05_2') }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                </div>
                <!-- SI -->
                    <!-- formulario 3 -->
                    <div class="col-md-12 partner" v-if="control == 3 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_06') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_06_1') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" v-bind:placeholder="$t('partners.sec_06_2')" v-model="form.empresa">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                    </div>

                    <!-- formulario 4 -->
                    <div class="col-md-12 partner" v-if="control == 4 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_06') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_07') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" v-bind:placeholder="$t('partners.sec_07_1')" v-model="form.sector">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                    </div>

                    <!-- formulario 5 -->
                    <div class="col-md-12 partner" v-if="control == 5 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_06') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_08') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" v-bind:placeholder="$t('partners.sec_08_1')" v-model="form.emailComercial">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                    </div>

                    <!-- formulario 6 -->
                    <div class="col-md-12 partner" v-if="control == 6 && flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_06') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_09') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" v-bind:placeholder="$t('partners.sec_09_1')" v-model="form.telephone">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.sec_10') }}</button>
                    </div>

                <!-- NO -->
                    <!-- formulario 3 -->
                    <div class="col-md-12 partner" v-if="control == 3 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_11') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_11_1') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" placeholder="Tel. 000 000 0000" v-model="form.number">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                    </div>

                    <!-- formulario 4 -->
                    <div class="col-md-12 partner" v-if="control == 4 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_11') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_12') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <input type="text" v-bind:placeholder="$t('partners.sec_12_1')" v-model="form.city">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.siguiente') }}</button>
                    </div>

                    <!-- formulario 5 -->
                    <div class="col-md-12 partner" v-if="control == 5 && !flag">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 style="color: #949A9D;">{{ $t('partners.sec_13') }}</h2>
                            </div>
                            <div class="col-md-3" />
                            <div class="col-md-9 form">
                                <h3 class="text-center">{{ $t('partners.sec_13_1') }}</h3>
                                <div class="row">
                                    <div class="col-md-12" style="padding: 5px;">
                                        <textarea name="" id="" cols="30" rows="4" v-bind:placeholder="$t('partners.sec_13_2')" v-model="form.comments"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-next" @click="control++">{{ $t('partners.sec_10') }}</button>
                    </div>
                <!-- final -->
                <div class="col-md-12 partner" v-if="(control == 7) || (control == 6 && !flag)">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 style="color: #949A9D;">{{ $t('partners.sec_14') }}</h2>
                        </div>
                        <div class="col-md-3" />
                        <div class="col-md-9 form">
                            <h3 class="text-center">{{ $t('partners.sec_14_1') }}</h3>
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
