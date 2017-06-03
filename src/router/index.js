import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Movie/Main'
import Detail from '@/views/Movie/Detail'
import Pay from '@/views/Movie/Pay'
import Date from '@/views/Date'
//import Login from '@/views/Login'
import Signup from '@/views/Signup'
import About from '@/views/About/About'
import Order from '@/views/About/Order'
import Star from '@/views/About/Star'
import Setting from '@/views/About/Setting'
import Recorder from '@/views/About/Recorder'

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
      path: '/movie/:id/pay',
      name: 'Pay',
      component: Pay
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
   /* {
      path: '/login',
      name: 'login',
      component: Login
    },*/
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
    },
    {
      path: '/about/recorder',
      name: 'setting',
      component: Recorder
    }
  ]
})
