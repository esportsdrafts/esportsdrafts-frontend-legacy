<template>
  <v-footer
    color="primary lighten-1"
    padless
    absolute
  >
    <v-layout
      justify-center
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-4
        text-center
        white--text
        xs12
      >
        {{ new Date().getFullYear() }} — <strong>eFantasy</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>

<style scoped>

</style>


