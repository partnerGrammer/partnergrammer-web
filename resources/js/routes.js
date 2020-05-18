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
            // component: () => import('./pages/Home.vue')
        },

        {
            path: '/projects',
            name: 'Projects',
            component: require('./pages/Projects').default,
            // component: () => import('./pages/Projects.vue')
        },

        {
            path: '/projects/:id',
            props: true,
            name: 'Project',
            component: require('./pages/Project').default,
            // component: () => import('./pages/Project.vue')
        },

        {
            path: '/blog',
            name: 'Blog',
            component: require('./pages/Blog').default,
            // component: () => import('./pages/Blog.vue')
        },

        {
            path: '/blog/:id',
            props: true,
            name: 'Article',
            component: require('./pages/Article').default,
            // component: () => import('./pages/Article.vue')
        },

        {
            path: '/about',
            name: 'About',
            component: require('./pages/About').default,
            // component: () => import('./pages/About.vue')
        },

        {
            path: '/partners',
            name: 'Partners',
            component: require('./pages/Partners').default,
            // component: () => import('./pages/About.vue')
        },
        {
            path: '*',
            name: '404',
            component: require('./pages/404').default,
            // component: () => import('./pages/404.vue')
        }
    ],
});

export default router;
