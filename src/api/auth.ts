
import axios from 'axios';

export default {
  createAccount(username: string, email: string, password: string) {
    return axios.post('/v1/auth/register', {
      username,
      email,
      password,
    });
  },

  performAuth(username: string, password: string) {
    const claim = 'username+password';
    return axios.post('/v1/auth/auth', {
      username,
      password,
      claim,
    });
  },
};
