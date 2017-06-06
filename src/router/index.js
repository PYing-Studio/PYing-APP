import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Movie/Main'
import Detail from '@/views/Movie/Detail'
import NewOrder from '@/views/Movie/Order'
import Date from '@/views/Dating'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import About from '@/views/About/About'
import Order from '@/views/About/Order'
import Setting from '@/views/About/Setting'
import DatingRecorder from '@/views/About/Dating'
import DatingRecorderDetail from '@/views/About/DatingDetail'
import OrderDetail from '@/views/About/OrderDetail'

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
      path: '/movie/:id/new',
      name: 'NewOrder',
      component: NewOrder
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
      path: '/about/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/about/dating',
      name: 'datingRecorder',
      component: DatingRecorder
    },
    {
      path: '/about/dating/:id',
      name: 'datingRecorderDetail',
      component: DatingRecorderDetail
    },
    {
      path: '/about/order/:id',
      name: 'orderDetail',
      component: OrderDetail
    }
  ]
})
