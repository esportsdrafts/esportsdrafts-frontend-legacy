import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import ResetPassword from './views/ResetPassword.vue';
import EmailSent from './views/EmailSent.vue';
import { BASE_URL } from './settings';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { hideNavigation: true },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { hideNavigation: true },
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword,
      meta: { hideNavigation: true },
    },
    {
      path: '/emailsent',
      name: 'emailsent',
      component: EmailSent,
      meta: { hideNavigation: true },
    },
  ],
});
