import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            keepAlive: false, //此组件不需要被缓存
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue")
    },
    {
        path: '/top',
        name: 'TopGame',
        component: () => import("../views/TopGame.vue")
    },
    {
        path: '/new-game',
        name: 'New',
        component: () => import("../views/NewGame.vue")
    },
    {
        path: '/open-platform',
        name: 'Open',
        component: () => import("../views/OpenPlatform.vue")
    },
    {
        path: '/details',
        name: 'Details',
        component: () => import("../views/Details.vue")
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router