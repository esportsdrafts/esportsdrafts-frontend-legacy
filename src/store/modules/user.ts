
import authAPI from '../../api/auth'

type authStatus = "unauthorized" | "authorized" | "2fa"

const state = {
    username: "unknown",
    roles: [],
    userID: "",
    loginStatus: "unauthorized"
}

const getters = {
    isAdminUser: (state, _getters) => {
        return state.roles.includes('admin')
    }
}

const actions = {
    createAccount({ commit, state }, credentials) {
        return authAPI.createAccount(credentials)
            .then(() => {
                commit("setUsername", "Pelle");
                commit("setUserID", "abc123")
            })
            .catch(error => console.log(error))
            .finally(() => {

            })
    },

    login({ commit, state }, credentials) {
    },
}

const mutations = {
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
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
