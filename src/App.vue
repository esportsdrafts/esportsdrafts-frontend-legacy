<template>
  <v-app style="
    background: #151617;
  ">
    <navigation v-if="!$route.meta.hideNavigation" />

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer v-if="!$route.meta.hideNavigation" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    //
  }),
});
</script>
