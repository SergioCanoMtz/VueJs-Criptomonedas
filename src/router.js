import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import Errorr from '@/views/error'
import Coindetail from '@/views/coindetail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '*',
            name: 'error',
            component: Errorr
        }, {
            path: '/coin/:id',
            name: 'coin-detail',
            component: Coindetail
        }
    ]
})