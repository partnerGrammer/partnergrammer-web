/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueDisqus from 'vue-disqus'
import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted';
import VueInternationalization from 'vue-i18n';
import Locale from './vue-i18n-locales.generated';
import store from "./store"

Vue.use(Toasted, {
    iconPack : 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
});
Vue.use(VueDisqus)
Vue.use(Vuelidate)
Vue.use(VueInternationalization)

const lang = localStorage.getItem('locale') || 'en';

const i18n = new VueInternationalization({
    locale: lang,
    messages: Locale
 });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Web Component
Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './routes'

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
});
