import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Date from '@/components/Date'
import About from '@/components/About'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Order from '@/components/about-order'
import Star from '@/components/about-star'
import Setting from '@/components/about-setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/date',
      name: 'date',
      component: Date
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about/order',
      name: 'order',
      component: Order
    },
    {
      path: '/about/star',
      name: 'star',
      component: Star
    },
    {
      path: '/about/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
