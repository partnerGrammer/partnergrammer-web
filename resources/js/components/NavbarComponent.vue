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
                <router-link to="/">nosotros</router-link>
                <router-link to="/">servicio</router-link>
                <router-link to="/">partners</router-link>
                <router-link to="/blog">blog</router-link>
                <router-link to="/" class="nav-section-2-btn-contact">contacto</router-link>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'Navbar',

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
