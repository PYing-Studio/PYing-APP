import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Movie/Main'
import Detail from '@/views/Movie/Detail'
import Date from '@/views/Date'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import About from '@/views/About/About'
import Order from '@/views/About/Order'
import Star from '@/views/About/Star'
import Setting from '@/views/About/Setting'

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
      path: '/movie/:id',
      name: 'Detail',
      component: Detail
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
