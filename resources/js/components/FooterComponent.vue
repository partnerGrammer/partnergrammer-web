<style>
    footer{
        padding: 10em 5em 0 5em;
    }

    .footer-section-1 p{
        font-size: 0.9em;
    }

    .footer-section-1 .icons{
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 50%;
    }

    .footer-section-1 .icons i{
        font-size: 0.9em;
    }

    .footer-section-2 div:nth-child(1){
        display: flex;
        justify-content: space-around;
    }

    .footer-section-2 .footer-navigation{
        display: flex;
        flex-direction: column;
    }

    .footer-section-2 .footer-navigation a{
        font-size: 0.9em;
        color: #C9C9C9;
    }

    .footer-section-2 .footer-navigation a:nth-child(1){
        color: black;
    }
</style>

<template>
    <section class="">
        <footer>
            <div class="row">
                <div class="col-md-6 footer-section-1">
                    <p>Av. Heroico Colegio Militar 3700, Bodegas del Estado, 31300 Chihuahua, Chih.</p>
                    <p>(614) 303-8662</p>
                    <div class="d-flex">
                        <div class="icons d-flex justify-content-center align-items-center">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div class="icons d-flex justify-content-center align-items-center ml-3">
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 footer-section-2">
                    <div class="">
                        <div class="footer-navigation">
                            <router-link class="main-link" to="/">portafolio</router-link>
                            <router-link to="/">Web / móvil</router-link>
                            <router-link to="/">Software a la medida</router-link>
                        </div>
                        <div class="footer-navigation">
                            <router-link class="main-link" to="/">nosotros</router-link>
                            <router-link to="/">Nosotros</router-link>
                            <router-link to="/">Equipo</router-link>
                        </div>
                        <div class="footer-navigation">
                            <router-link class="main-link" to="/">servicio</router-link>
                            <router-link to="/">Web / móvil</router-link>
                            <router-link to="/">Software a la medida</router-link>
                        </div>
                        <div class="footer-navigation">
                            <router-link class="main-link" to="/blog">blog</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center align-items-center">
                    <p>LOGO</p>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    name: 'Footer'
}
</script>