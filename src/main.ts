import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'https://api.esportsdrafts.localhost';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
