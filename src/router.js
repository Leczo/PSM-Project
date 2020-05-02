import Vue from "vue";
import VueRouter from "vue-router";

import WelcomePage from "./components/WelcomePage.vue";
import EducationForm from "./components/EducationForm.vue";
import Home from "./components/Home.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      component: WelcomePage,
    },
    {
      path: "/ed",
      component: EducationForm,
    },

    {
      path: "/home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/");
  else if (!requiresAuth && currentUser) next("/home");
  else next();
});

export default router;
