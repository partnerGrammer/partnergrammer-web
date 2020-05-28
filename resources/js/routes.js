import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
//           Inicio
// Sobre-nosotros
// Nuestro-portafolio
// Programa-de-alianza
// Contacto

            path: '/',
            name: 'Index',
            component: require('./pages/Home').default,
            meta: {
              title: 'Inicio'
            }
            // component: () => import('./pages/Home.vue')
        },

        {
            path: '/projects',
            name: 'Projects',
            component: require('./pages/Projects').default,
            meta: {
              title: 'Nuestro Portafolio'
            }
            // component: () => import('./pages/Projects.vue')
        },

        {
            path: '/projects/:id',
            props: true,
            name: 'Project',
            component: require('./pages/Project').default,
            meta: {
              title: 'Nuestro Portafolio'
            }
            // component: () => import('./pages/Project.vue')
        },

        {
            path: '/blog',
            name: 'Blog',
            component: require('./pages/Blog').default,
            meta: {
              title: 'Blog'
            }
            // component: () => import('./pages/Blog.vue')
        },

        {
            path: '/blog/:slug',
            props: true,
            name: 'Article',
            component: require('./pages/Article').default,
            meta: {
              title: 'Blog'
            }
            // component: () => import('./pages/Article.vue')
        },

        {
            path: '/about',
            name: 'About',
            component: require('./pages/About').default,
            meta: {
              title: 'Sobre Nosotros'
            }
            // component: () => import('./pages/About.vue')
        },

        {
            path: '/partners',
            name: 'Partners',
            component: require('./pages/Partners').default,
            meta: {
              title: 'Programa de alianza'
            }
            // component: () => import('./pages/About.vue')
        },
        {
            path: '*',
            name: '404',
            component: require('./pages/404').default,
            meta: {
              title: '404'
            }
            // component: () => import('./pages/404.vue')
        }
    ],
});

const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});


export default router;
