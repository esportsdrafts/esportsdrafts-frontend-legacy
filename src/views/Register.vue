<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card width="340" color="#1b1b1b" outlined="false">
        <v-layout align-center justify-center class="mb-8">
          <v-btn tile color="white" icon to="/">
            <v-icon size="52">gamepad</v-icon>
          </v-btn>
        </v-layout>
        <p class="headline font-weight-bold text-uppercase text-center mb-6">Register</p>
        <v-card-text>
          <v-form>
            <v-alert type="warning" v-if="password_warning !== null && password_warning != ''">
              <span class="font-weight-bold">Weak password:</span>
              {{password_warning}}
            </v-alert>
            <v-text-field
              outlined="true"
              label="Username"
              name="username"
              type="text"
              counter
              maxlength="30"
              :rules="[rules.required, rules.username_min, rules.username_val]"
              @click:append="show_username_hint = !show_username_hint"
            ></v-text-field>
            <v-text-field
              outlined="true"
              label="Email"
              name="email"
              type="text"
              :rules="[rules.required, rules.email_validation]"
            ></v-text-field>
            <v-text-field
              outlined="true"
              :append-icon="show_password ? 'visibility' : 'visibility_off'"
              :type="show_password ? 'text' : 'password'"
              id="password"
              label="Password"
              name="password"
              maxlength="120"
              :color="password_strength_color"
              v-model="password"
              :rules="[rules.required, rules.password_min]"
              counter
              @click:append="show_password = !show_password"
            ></v-text-field>
            <v-progress-linear
              class="mb-5"
              :value="password_score"
              :color="password_strength_color"
              rounded
            ></v-progress-linear>
            <password
              v-model="password"
              :strength-meter-only="true"
              @score="passwordScore"
              @feedback="passwordFeedback"
              :secure-length="12"
              v-show="false"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="pl-4 pr-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" block>Register</v-btn>
        </v-card-actions>
        <v-layout align-center justify-center class="mb-8">
          <v-btn class="ma-2 login-custom-link" flat text to="/login">
            <v-icon left>arrow_back</v-icon>Back to login
          </v-btn>
        </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Password from "vue-password-strength-meter";

export default {
  components: { Password },
  data() {
    return {
      username: "dotamaster11",
      email: "joe@example.com",
      password: null,
      error: false,
      loading: false,
      password_score: 0,
      password_warning: null,
      password_suggestion: null,
      password_strength_color: "primary",
      show_password_warning: true,
      show_username_hint: false,
      show_password_hint: false,
      show_password: false,
      rules: {
        required: value => !!value || "Required.",
        username_min: v => (v && v.length >= 5) || "Min 5 characters.",
        username_val: v =>
          (v && v.match(/^[\da-z_-]*$/g)) || "Only a-z, 0-9, - or _ allowed.",
        email_validation: v =>
          (v && v.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) ||
          "Not a valid email address.",
        password_min: v => (v && v.length >= 12) || "Min 12 characters."
      }
    };
  },
  methods: {
    passwordScore(score) {
      if (!score) {
        this.password_strength_color = "red darken-4";
        this.password_score = 0;
      }
      this.password_score = (1 + score) * 20;
      this.password_strength_color = [
        "red darken-4",
        "red darken-2",
        "yellow darken-3",
        "yellow darken-1",
        "light-green darken-1"
      ][score];
    },
    passwordFeedback({ suggestion, warning }) {
      this.password_warning = warning;
      this.password_suggestion = suggestion;

      if (!this.passwordFeedback) {
      }
    },
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
.login-custom-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75em;
  text-transform: none;
}
</style>
