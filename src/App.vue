<template>
  <v-app style="
    background: #1b1b1b;
  ">
    <navigation v-if="!$route.meta.hideNavigation" />

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
import Navigation from '@/components/Navigation.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navigation,
  },
  data: () => ({
    //
  }),
});
</script>
