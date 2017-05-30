// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui'
import VueResource from 'vue-resource'
import Element from 'element-ui'


import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'

Vue.use(VueResource)
Vue.use(MuseUI)
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
