
<template>
  <v-container>
    <v-layout wrap class="pt-0 pb-12 mb-6 pl-0" justify-center>
      <v-flex md12 sm12 xs12 fill-height class="pt-0 pb-0 mb-3">
        <h2 class="text-center display-3 font-weight-bold">Developer?</h2>
      </v-flex>
      <v-flex md12 sm12 xs12 fill-height align="baseline">
        <h2 class="text-center mb-6 font-weight-regular grey--text title">Check out our API</h2>
      </v-flex>
      <v-flex xs0 sm2 md4 xl5 align="baseline"></v-flex>
      <v-flex xs12 sm8 md4 xl2 align="baseline" class="mb-2 mt-4 text-center">
        <v-btn depressed to="/register" color="primary" x-large block>Read the docs</v-btn>
      </v-flex>
      <v-flex xs0 sm2 md4 xl5 align="baseline"></v-flex>
    </v-layout>
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
});
</script>

<style scoped>
</style>
