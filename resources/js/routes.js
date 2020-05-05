import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: require('./pages/Home').default,
        },

        {
            path: '/projects',
            name: 'Projects',
            component: require('./pages/Projects').default,
        },

        {
            path: '/blog',
            name: 'Blog',
            component: require('./pages/Blog').default,
        },

        {
            path: '/blog/:id',
            props: true,
            name: 'Article',
            component: require('./pages/Article').default,
        },

        {
            path: '/about',
            name: 'About',
            component: require('./pages/About').default,
        },
    ],
});

export default router;