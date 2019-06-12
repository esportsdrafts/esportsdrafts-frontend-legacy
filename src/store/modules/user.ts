
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
    login({ commit, state }, )
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
