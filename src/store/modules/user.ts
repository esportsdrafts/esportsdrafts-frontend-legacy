
import authAPI from '../../api/auth';
import { RootState } from '../store';
import { Module, ActionTree, MutationTree, GetterTree, Getter } from 'vuex';

type authStatus = "unauthorized" | "authorized" | "2fa";

export interface UserState {
    username: string,
    roles: Array<string>,
    userID: string,
    loginStatus: authStatus,
    error: boolean;
};

export const state: UserState = {
    username: "unknown",
    roles: [],
    userID: "",
    loginStatus: "unauthorized",
    error: false,
};

const getters: GetterTree<UserState, RootState> = {
    isAdminUser: (state, _getters) => {
        return state.roles.includes('admin')
    }
};

const actions: ActionTree<UserState, RootState> = {
    createAccount({ commit, state }, credentials) {
        return authAPI.createAccount(credentials)
            .then(() => {
                commit("setUsername", "Pelle");
                commit("setUserID", "abc123")
            })
            .catch(error: Any => console.log(error))
            .finally(() => {

            })
    },

    login({ commit, state }, credentials) {
    },
};

const mutations: MutationTree<UserState> = {
    setUsername(state, { name }) {
        state.username = name
    },

    setRoles(state, { roles }) {
        state.roles = roles
    },

    setUserID(state, { userID }) {
        state.userID = userID
    },

    setLoginStatus(state, { status }) {
        state.loginStatus = status
    }
};

export const profile: Module<UserState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
