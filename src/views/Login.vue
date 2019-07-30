<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="flat" width="340" color="#1b1b1b" outlined="false">
        <v-layout align-center justify-center class="mb-8">
          <v-btn tile color="white" icon to="/">
            <v-icon size="52">gamepad</v-icon>
          </v-btn>
        </v-layout>
        <p class="headline font-weight-bold text-uppercase text-center mb-6">Login</p>
        <v-card-text>
          <v-form>
            <v-text-field outlined="true" label="Username" name="username" type="text"></v-text-field>
            <v-text-field outlined="true" id="password" label="Password" name="password" type="password"></v-text-field>
            <v-checkbox color="primary" label="Remember me" class="mt-n3"></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions class="pl-4 pr-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" block>Login</v-btn>
        </v-card-actions>
        <v-layout align-center justify-center class="mb-8">
          <v-btn flat text color="gray" class="login-custom-link" to="/resetpassword">Forgot password?</v-btn>
        </v-layout>
        <v-layout align-center justify-center class="mb-8">
          <v-btn class="ma-2 login-custom-link" flat text to="/register">
            Register your account
            <v-icon right>arrow_forward</v-icon>
          </v-btn>
        </v-layout>
      </v-card>
  </v-layout>
  </v-container>
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
.login-custom-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75em;
  text-transform: none;
}
</style>
