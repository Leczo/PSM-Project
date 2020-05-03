import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pl'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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

let app = ''

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router: router
    }).$mount('#app')
  }
})


