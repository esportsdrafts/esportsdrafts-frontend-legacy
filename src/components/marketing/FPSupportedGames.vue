
<template>
  <v-container>
    <v-layout wrap class="pt-0 pb-12 pl-0" justify-center>
      <v-flex md12 sm12 xs12 fill-height class="pt-6 pb-0 mb-10">
        <h2 class="text-center display-4 font-weight-bold">Supported Games</h2>
      </v-flex>
      <v-flex md12 sm12 xs12 fill-height align="baseline">
        <h2
          class="text-center mb-6 font-weight-regular grey--text display-1"
        >Draft players from your favorite games</h2>
      </v-flex>
      <v-flex md4 fill-height class="pa-12 text-center">
        <v-img :src="`${publicPath}img/dota-2-logo.svg`" aspect-ratio="1" fill-height class="pa-12"></v-img>
      </v-flex>
      <v-flex md4 class="pa-12 text-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
              v-on="on"
              class="coming-soon-tm pa-12"
              :src="`${publicPath}img/fortnite-logo.svg`"
              aspect-ratio="1"
              fill-height
            ></v-img>
          </template>
          <span>Fortnite available soon&trade;</span>
        </v-tooltip>
      </v-flex>
      <v-flex md4 class="pa-12 text-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
              v-on="on"
              class="coming-soon-tm pa-12"
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

