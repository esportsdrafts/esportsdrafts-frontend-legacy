<template>
  <v-footer color="black" padless absolute class="pt-6 pl-6 pr-6 pb-6" app height="auto">
    <v-container grid-list-md color="black">
      <v-flex color="black" py-4 text-center white--text xs12 class="mb-8">
        <v-btn class="ma-2" outlined text @click="scroll_to_top">
          <v-icon>arrow_upward</v-icon>Back to Top
        </v-btn>
      </v-flex>
      <v-layout wrap>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="black">
            <v-card-title primary class="title mb-2">
              <v-icon large class="mr-2">gamepad</v-icon>esportsdrafts
            </v-card-title>
            <v-card-text>Best e-Sports bla bla fantasy league.</v-card-text>
            <v-spacer></v-spacer>
            <v-card-text class="mt-8">
              &copy; {{ new Date().getFullYear() }} —
              <strong>esportsdrafts</strong>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="black">
            <v-card-title primary class="subtitle-1 font-weight-medium">Visit</v-card-title>
            <v-flex>
              <v-card-text class="pb-2">esportsdrafts</v-card-text>
              <v-card-text class="pb-2 pt-0 ma-0">Best street 23, 2 flr</v-card-text>
              <v-card-text class="pb-2 pt-0 ma-0">San Franciso, CA, USA 94100</v-card-text>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="black" width="120">
            <v-card-title primary class="subtitle-1 font-weight-medium">Links</v-card-title>
            <v-flex>
              <v-btn
                v-for="link in links"
                :key="link"
                small
                color="grey"
                text
                class="my-2 text-none pb-0 pt-0 mb-n1"
              >{{ link }}</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="black" width="120">
            <v-card-title primary class="subtitle-1 font-weight-medium">Social</v-card-title>
            <v-flex>
              <v-btn
                v-for="link in follow"
                :key="link"
                small
                color="grey"
                text
                class="my-2 text-none pb-0 pt-0 mb-n1"
              >{{ link }}</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="black" width="120">
            <v-card-title primary class="subtitle-1 font-weight-medium">Legal</v-card-title>
            <v-flex>
              <v-btn
                v-for="link in legal"
                :key="link"
                small
                color="grey"
                text
                class="my-2 text-none pb-0 pt-0 mb-n1"
              >{{ link }}</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
  methods: {
    scroll_to_top() {
      window.scrollTo(0, 0);
    },
  },
  data: () => ({
    legal: ['Terms', 'Privacy', 'Cookies'],
    follow: ['Twitter', 'Reddit', 'Discord', 'Twitch'],
    links: ['Support', 'About', 'Developer', 'Blog', 'Contact'],
  }),
};
</script>

<style scoped>
.footer-btn {
  font-size: 5px;
}
</style>
