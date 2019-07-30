<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="flat" width="340" color="#1b1b1b" outlined="false">
        <v-layout align-center justify-center class="mb-10">
          <v-btn color="white" icon x-small>
            <v-icon size="52">email</v-icon>
          </v-btn>
        </v-layout>
        <p class="headline font-weight-bold text-uppercase text-center mb-6">Check your Inbox</p>
        <p
          class="headline font-weight-regular text-center mb-6"
        >We just sent you and email with further instructions.</p>
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
  name: "EmailSent"
};
</script>

<style scoped>
.login-custom-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75em;
  text-transform: none;
}
</style>
