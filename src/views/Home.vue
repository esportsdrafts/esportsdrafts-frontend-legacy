<template>
  <v-container fill-height fluid class="pt-0 pb-0 pl-0 pr-0">
    <v-layout wrap>
      <f-p-animation />
      <div class="plus-divider text-center shine">+</div>
      <f-p-how-to />
      <div class="plus-divider text-center shine">+</div>
      <f-p-twitch-live />
      <div class="plus-divider text-center shine">+</div>
      <f-p-developer />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FPAnimation from "@/components/marketing/FPAnimation.vue";
import FPHowTo from "@/components/marketing/FPHowTo.vue";
import FPTwitchLive from "@/components/marketing/FPTwitchLive.vue";
import FPDeveloper from "@/components/marketing/FPDeveloper.vue";

export default Vue.extend({
  components: {
    FPAnimation,
    FPHowTo,
    FPTwitchLive,
    FPDeveloper
  }
});
</script>

<style scoped>
.plus-divider {
  width: 100%;
  font-size: 72px;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  animation: hue 10s infinite linear;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
