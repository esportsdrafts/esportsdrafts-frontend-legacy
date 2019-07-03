
import axios from 'axios'

export default {
    createAccount(username: string, email: string, password: string) {
        var payload = {
            "username": username,
            "email": email,
            "password": password,
        }
        return axios.post('/v1/auth/register', payload)
    },

    performAuth(username: string, password: string) {
        var payload = {
            "username": username,
            "password": password,
        }
        return axios.post('/v1/auth/auth', payload)
    },
}
