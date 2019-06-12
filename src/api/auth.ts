
import axios from 'axios'

export default {
    createAccount(payload) {
        return axios.post('/v1/auth/register', payload)
    },

    performAuth(payload) {
        return axios.post('/v1/auth/auth', payload)
    },
}
