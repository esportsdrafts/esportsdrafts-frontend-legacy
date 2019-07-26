import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store/store';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// TODO: Move into a separate settings module that reads env variables
axios.defaults.baseURL = 'https://api.efantasy.dev';

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app');
