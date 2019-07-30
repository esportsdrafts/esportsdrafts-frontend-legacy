<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">You need to login first.</p>
    <form @submit.prevent="login">
      <label>
        <input v-model="username" placeholder="username" />
      </label>
      <label>
        <input v-model="pass" placeholder="password" type="password" />
      </label> (hint: password1)
      <br />
      <button type="submit">login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      username: "dotamaster11",
      pass: "",
      error: false,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.error = false;
      this.$store
        .dispatch("user/login")
        .then(() => {
          this.$router.replace(this.$route.query.redirect || "/");
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
