import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import { getStoreBuilder, BareActionContext } from "vuex-typex"
import { RootState } from './store/store'

Vue.use(VueAxios, axios);

// TODO: Move into a separate settings module that reads env variables
axios.defaults.baseURL = 'https://api.efantasy.dev';

Vue.config.productionTip = false;

const storeBuilder = getStoreBuilder<RootState>()
new Vue({
  router,
  store: storeBuilder.vuexStore(),
  render: h => h(App),
}).$mount('#app');
