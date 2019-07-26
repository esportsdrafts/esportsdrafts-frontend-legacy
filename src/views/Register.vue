<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label>
        <input v-model="username" placeholder="username" />
      </label>
      <label>
        <input v-model="email" placeholder="email" />
      </label>
      <label>
        <input v-model="pass" placeholder="password" type="password" />
      </label>
      <br />
      <button type="submit">submit</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: 'dotamaster11',
      email: 'joe@example.com',
      pass: '',
      error: false,
      loading: false,
    };
  },
  methods: {
    register() {
      this.loading = true;
      this.error = false;
      var credentials = {
        username: this.username,
        email: this.email,
        password: this.pass,
      };
      this.$store
        .dispatch('user/createAccount', credentials)
        .then(() => {
          this.$router.replace(this.$route.query.redirect || '/');
        })
        .catch((error => {
          console.log(error);
          this.error = true;
        }))
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
