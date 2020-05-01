import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: Routes
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
