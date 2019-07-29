import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store/store';
import vuetify from './plugins/vuetify';
import { BASE_URL } from './settings';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = BASE_URL;
Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
