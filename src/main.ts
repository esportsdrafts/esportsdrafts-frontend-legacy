import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.use(VueAxios, axios);

// TODO: Move into a separate settings module that reads env variables
axios.defaults.baseURL = 'https://api.efantasy.dev';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
