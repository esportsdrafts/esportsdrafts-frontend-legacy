
import {
  Module, ActionTree, MutationTree, GetterTree,
} from 'vuex';
import authAPI from '../../api/auth';
import {
  RootState,
} from '../store';

type authStatus = 'unauthorized' | 'authorized' | '2fa';

export interface UserState {
  username: string,
  roles: Array<string>,
  userID: string,
  loginStatus: authStatus,
  error: boolean;
}

export const state: UserState = {
  username: 'unknown',
  roles: [],
  userID: '',
  loginStatus: 'unauthorized',
  error: false,
};

const getters: GetterTree<UserState, RootState> = {
  isAdminUser: (state, _getters) => state.roles.includes('admin'),
};

const actions: ActionTree<UserState, RootState> = {
  createAccount({ commit, state }, credentials) {
    return authAPI.createAccount(credentials.username, credentials.email, credentials.password)
      .then(() => {
        // DO A REDIRECT TO LOGIN PAGE
      })
      .catch(Error => console.log(Error))
      .finally(() => {

      });
  },

  login({ commit, state }, credentials) {
  },
};

const mutations: MutationTree<UserState> = {
  setUsername(st, { name }) {
    state.username = name;
  },

  setRoles(st, { roles }) {
    // Make sure its a list, functions for adding / removing only one
    // entry?
    const roleSet: Set<string> = new Set(roles);
    state.roles = Array.from(roleSet);
  },

  setUserID(st, { userID }) {
    state.userID = userID;
  },

  setLoginStatus(st, { status }) {
  },
};

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
