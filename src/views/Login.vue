<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="flat" width="340" color="#151617" elevation="0">
        <v-layout align-center justify-center class="mb-8">
          <v-btn tile color="white" icon to="/">
            <v-icon size="52">gamepad</v-icon>
          </v-btn>
        </v-layout>
        <p class="headline font-weight-bold text-uppercase text-center mb-6">Login</p>
        <v-card-text>
          <v-form @submit.prevent="login" id="login-form">
            <v-alert type="error" v-if="error_msg !== null && error_msg != ''">{{error_msg}}</v-alert>
            <v-text-field
              outlined
              v-model="username"
              label="Username"
              name="username"
              type="text"
              @input="touch_form"
            ></v-text-field>
            <v-text-field
              outlined
              label="Password"
              name="password"
              v-model="password"
              :append-icon="show_password ? 'visibility' : 'visibility_off'"
              :type="show_password ? 'text' : 'password'"
              @click:append="show_password = !show_password"
              @input="touch_form"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pl-4 pr-4">
          <v-spacer></v-spacer>
          <v-btn form="login-form" color="primary" @click="login" :loading="loading" block>Login</v-btn>
        </v-card-actions>
        <v-layout align-center justify-center class="mb-8">
          <v-btn text color="gray" class="login-custom-link" to="/resetpassword">Forgot password?</v-btn>
        </v-layout>
        <v-layout align-center justify-center class="mb-8">
          <v-btn class="ma-2 login-custom-link" text to="/register">
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
import { PERFORM_AUTH } from "@/store/modules/user";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: false,
      error_msg: "",
      loading: false,
      show_password: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.error = false;
      this.error_msg = "";
      const credentials = {
        username: this.username,
        password: this.password
      };
      this.$store
        .dispatch(PERFORM_AUTH, credentials)
        .catch(error => {
          this.error = true;
          this.error_msg = error.response.data.message;
        })
        .finally(() => {
          if (!this.error) {
            console.log("Cookies: " + document.cookie);
            this.$router.replace(this.$route.query.redirect || "/");
          }
          this.loading = false;
        });
    },
    touch_form() {
      this.error_msg = "";
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
