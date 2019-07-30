<!--<template>
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
</template> -->

<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field label="Username" name="username" type="text"></v-text-field>
              <v-text-field id="email" label="Email" name="email" type="email"></v-text-field>
              <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" block>Register</v-btn>
          </v-card-actions>
          <a class="text-md-center">Forgot Username/Password?</a>
          <a class="text-md-center" href="/register">Create your Account</a>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      username: "dotamaster11",
      email: "joe@example.com",
      pass: "",
      error: false,
      loading: false
    };
  },
  methods: {
    register() {
      this.loading = true;
      this.error = false;
      var credentials = {
        username: this.username,
        email: this.email,
        password: this.pass
      };
      this.$store
        .dispatch("user/createAccount", credentials)
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
