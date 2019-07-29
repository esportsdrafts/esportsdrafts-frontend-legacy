import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
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
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
  ],
});
