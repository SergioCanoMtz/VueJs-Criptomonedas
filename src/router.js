import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import Errorr from '@/views/error'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            name: 'error',
            component: Errorr
        }

    ]
})