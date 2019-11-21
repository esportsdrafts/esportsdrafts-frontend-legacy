import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import ResetPassword from './views/ResetPassword.vue';
import EmailSent from './views/EmailSent.vue';
import { BASE_URL } from './settings';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content: 'esportsdrafts fantasy league games',
        },
        {
          property: 'og:description',
          content: 'esportsdrafts fantasy league games.',
        },
      ],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hideNavigation: true,
      title: 'Login',
      metaTags: [
        {
          name: 'description',
          content: 'Login to esportsdrafts',
        },
        {
          property: 'og:description',
          content: 'Login to esportsdrafts.',
        },
      ],
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      hideNavigation: true,
      title: 'Register',
      metaTags: [
        {
          name: 'description',
          content: 'Register an account',
        },
        {
          property: 'og:description',
          content: 'Register an account.',
        },
      ],
    },
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPassword,
    meta: {
      hideNavigation: true,
      title: 'Reset Password',
      metaTags: [
        {
          name: 'description',
          content: 'Reset your account password',
        },
        {
          property: 'og:description',
          content: 'Reset your account password.',
        },
      ],
    },
  },
  {
    path: '/emailsent',
    name: 'emailsent',
    component: EmailSent,
    meta: {
      hideNavigation: true,
      title: 'Check Your Inbox',
      metaTags: [
        {
          name: 'description',
          content: 'We sent you an email',
        },
        {
          property: 'og:description',
          content: 'We sent you an email.',
        },
      ],
    },
  },
];

const router = new Router({
  mode: 'history',
  base: BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
// Adds Title and Metadata tags to each page based on router settings
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title} | esportsdrafts`;

  // @ts-ignore
  // eslint-disable-next-line
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).filter(Boolean).map(
    el => el.parentNode.removeChild(el),
  );
  if (!nearestWithMeta) return next();

  // @ts-ignore
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;

    // @ts-ignore
  }).forEach(tag => document.head.appendChild(tag));

  return next();
});

export default router;
