<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="flat" width="340" color="#1b1b1b" outlined="false">
        <v-layout align-center justify-center class="mb-8">
          <v-btn tile color="white" icon to="/">
            <v-icon size="52">gamepad</v-icon>
          </v-btn>
        </v-layout>
        <p class="headline font-weight-bold text-uppercase text-center mb-6">Reset Password</p>
        <v-card-text>
          <v-form>
            <v-text-field outlined="true" label="Username" name="username" type="text"></v-text-field>
            <v-text-field outlined="true" id="email" label="Email" name="email" type="text"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pl-4 pr-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" block>Submit</v-btn>
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

<script lang="ts">
export default {
  name: "ResetPassword"
};
</script>

<style scoped>
.login-custom-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75em;
  text-transform: none;
}
</style>
