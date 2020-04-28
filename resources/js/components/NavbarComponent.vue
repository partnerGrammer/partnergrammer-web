<style lang="sass" scoped>
    *
        margin: 0
        padding: 0
    .navbar
        width: 100%
        height: 3em
        display: flex
    .nav-section-1, .nav-section-2
        flex: 1
    .nav-section-1
        // background-color: blue
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
        <nav class="navbar">
            <div class="nav-section-1">
                <p>LOGO</p>
            </div>
            <div class="nav-section-2">
                <router-link to="/">inicio</router-link>
                <router-link to="/">portafolio</router-link>
                <router-link to="/">nosotros</router-link>
                <router-link to="/">servicio</router-link>
                <router-link to="/">partners</router-link>
                <router-link to="/">blog</router-link>
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
