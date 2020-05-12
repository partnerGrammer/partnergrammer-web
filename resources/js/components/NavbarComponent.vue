<style lang="sass" scoped>
    *
        padding: 0
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
    .nav-showNavbar
        background-color: #FFFFFF
</style>

<template>
    <section>
        <nav class="row navbar" :class="{ 'nav-showNavbar': !showNavbar }">
            <div class="col-md-6 nav-section-1">
                <router-link to="/"><img src="/images/logos/logo.svg" alt="LOGO" style="width:auto; height: 100px;"></router-link>
            </div>
            <div class="col-md-6 nav-section-2">
                <router-link to="/">inicio</router-link>
                <router-link to="/projects">portafolio</router-link>
                <router-link to="/about">nosotros</router-link>
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

    data(){
        return{
            showNavbar: true,
        }
    },

    mounted() {
        console.log('Component mounted.')
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
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
