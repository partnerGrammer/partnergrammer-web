<style scoped>
    .main-container-articles *{
        padding: 0;
        margin: 0;
    }
    
    .btn-ver-mas-2{
        display: inline-block;
        padding: 10px 35px;
        color: white;
        background-color: #EE1331;
        font-size: 14px;
        border-radius: 0px;
        margin-top: 20px;
    }

    .contacto{
        margin-top: 1em;
        box-shadow: 3px 3px 10px #BFBFBF;
        padding: 20px 10%;
    }

    .contacto input{
        width: 100%;
        margin-top: 10px;
        height: 35px;
        border: none;
        border: 1px solid black;
        padding: 10px;
    }

    .contacto textarea{
        width: 100%;
        margin-top: 10px;
        border: none;
        border: 1px solid black;
        padding: 10px;
    }
</style>

<template>
    <section class="main-container-articles">
        <!-- seccion 17 -->
            <section class="row">
                <div class="col-md-2" />
                <div class="col-md-8 contacto">
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
                            <textarea name="" id="" cols="30" rows="10" v-model="form.message" @blur="$v.form.message.$touch()" placeholder="Cuentanos mas de tu proyecto"></textarea>
                        </div>
                        <div class="col-md-12 d-flex justify-content-end align-items-center">
                            <button type="submit" class="btn btn-ver-mas-2" href="#">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
    </section>
</template>

<script>
//Vuelidate
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Contact-form',

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

    mounted(){

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
        }
    }
}
</script>

