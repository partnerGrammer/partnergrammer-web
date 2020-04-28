<style lang="sass" scoped>
    .main-content
        padding: 0px 5em
    .box-1
        width: 100%
        height: 100vh
        background-color: red
</style>

<template>
    <section class="main-content">
        <Navbar />

        <div class="box-1">
            div
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