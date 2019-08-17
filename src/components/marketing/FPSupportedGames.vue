
<template>
  <v-container>
    <v-layout wrap class="pt-12 pb-12 pl-0" justify-center>
      <v-flex md12 class="pt-12 pb-12 mb-10">
        <h2 class="text-center display-4 font-weight-bold">Supported Games</h2>
      </v-flex>
      <v-flex md2 xl3 align="baseline"></v-flex>
      <v-flex md8 xl6 align="baseline">
        <h2
          class="text-center mb-6 font-weight-regular grey--text display-1"
        >Draft players from your favorit games</h2>
      </v-flex>
      <v-flex md2 xl3 align="baseline"></v-flex>
      <v-flex md4 class="pa-12">
        <v-img :src="`${publicPath}img/dota-2-logo.svg`" aspect-ratio="1" fill-height></v-img>
      </v-flex>
      <v-flex md4 class="pa-12">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
              v-on="on"
              class="coming-soon-tm"
              :src="`${publicPath}img/fortnite-logo.svg`"
              aspect-ratio="1"
              fill-height
            ></v-img>
          </template>
          <span>Fortnite available soon&trade;</span>
        </v-tooltip>
      </v-flex>
      <v-flex md4 class="pa-12">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
              v-on="on"
              class="coming-soon-tm"
              :src="`${publicPath}img/league-logo.svg`"
              aspect-ratio="1"
              fill-height
            ></v-img>
          </template>
          <span>LoL available soon&trade;</span>
        </v-tooltip>
      </v-flex>
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
.coming-soon-tm {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
</style>

