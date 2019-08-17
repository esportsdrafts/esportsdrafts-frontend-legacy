<template>
  <v-container fill-height fluid class="pt-12 pb-0 pl-0 pr-0">
    <v-layout wrap>
      <f-p-animation />
      <f-p-twitch-live />
      <f-p-supported-games />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FPAnimation from "@/components/marketing/FPAnimation.vue";
import FPTwitchLive from "@/components/marketing/FPTwitchLive.vue";
import FPSupportedGames from "@/components/marketing/FPSupportedGames.vue";

export default Vue.extend({
  components: {
    FPAnimation,
    FPTwitchLive,
    FPSupportedGames
  }
});
</script>

<style scoped>
.shine {
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
}
</style>
