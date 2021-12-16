import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Top from '../views/TopGame.vue'
import New from '../views/NewGame.vue'
import Open from '../views/OpenPlatform.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/top',
        name: 'TopGame',
        component: Top
    },
    {
        path: '/new-game',
        name: 'New',
        component: New
    },
    {
        path: '/open-platform',
        name: 'Open',
        component: Open
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router