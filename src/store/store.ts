
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from './modules/user';
import { VERSION } from '../settings';

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: VERSION,
  },
  modules: {
    user,
  },
};

export default new Vuex.Store<RootState>(store);
