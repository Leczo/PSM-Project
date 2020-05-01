import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const firebaseConfig = {
  apiKey: "AIzaSyAyCIX3bbIwypUkdThkqccWrqeduwJKyXA",
  authDomain: "cv-generator-84514.firebaseapp.com",
  databaseURL: "https://cv-generator-84514.firebaseio.com",
  projectId: "cv-generator-84514",
  storageBucket: "cv-generator-84514.appspot.com",
  messagingSenderId: "898280030452",
  appId: "1:898280030452:web:11494e99dfe03f87d31ea1",
  measurementId: "G-30L1YEZ7GD"
};

firebase.initializeApp(firebaseConfig);


const router = new VueRouter({
  mode: 'history',
  routes: Routes
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
