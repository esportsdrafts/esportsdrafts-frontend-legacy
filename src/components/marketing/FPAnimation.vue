<template>
  <v-container fluid class="dota-bg">
    <v-container max-width="1200px" class="mt-12 pt-12">
      <v-layout wrap>
        <v-flex md12 class="mb-12 pb-12">
          <v-layout wrap align="baseline" class="pt-6 pb-12">
            <v-flex md2 xl3 align="baseline"></v-flex>
            <v-flex md8 xl6 align="baseline" class="mb-10">
              <h1 class="text-center font-weight-bold display-4">Daily E-Sports Fantasy Leagues</h1>
            </v-flex>
            <v-flex md2 xl3 align="baseline"></v-flex>
            <v-flex md2 xl3 align="baseline"></v-flex>
            <v-flex md8 xl6 align="baseline">
              <h2
                class="text-center mb-6 font-weight-regular grey--text display-1"
              >Lorem ipsum set dolor, dota2 is best game pepega random more text. More text buttons and links in this section.</h2>
            </v-flex>
            <v-flex md2 xl3 align="baseline"></v-flex>
            <v-flex sm2 md4 xl5 align="baseline"></v-flex>
            <v-flex sm8 md4 xl2 align="baseline" class="mb-2 mt-12 text-center">
              <v-btn depressed to="/register" color="red" x-large block>Join Now</v-btn>
            </v-flex>
            <v-flex md4 xl5 sm2 align="baseline"></v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 sm4 md4 class="pb-12 pt-0 ml-12 mt-0 mb-12">
          <v-layout wrap class="pt-12 pb-12">
            <v-card
              ref="u1"
              id="u1"
              color="white"
              class="mb-5 pr-3"
              light
              width="300px"
              elevation="8"
            >
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-5"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>bethero</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <span class="subheading">123</span>
                </v-row>
              </v-list-item>
            </v-card>
            <v-card id="u2" color="white" light width="300px" class="mb-5 pr-3" elevation="8">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-5"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>pepega13</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card>
            <v-card id="u3" color="white" light width="300px" elevation="8" class="pr-3">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-5"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>d0ta_m4ster</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <span class="subheading">12</span>
                </v-row>
              </v-list-item>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm8 md8></v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<style>
.dota-bg {
  background-image: linear-gradient(
      to bottom,
      rgba(21, 22, 23, 0.9),
      rgba(21, 22, 23, 0.93),
      rgba(21, 22, 23, 0.96),
      rgba(21, 22, 23, 1)
    ),
    url("../../../public/img/dota_bg.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
</style>

<script lang="ts">
import Vue from "vue";
import { TimelineLite, Back } from "gsap";

export default Vue.extend({
  data() {
    return {
      t1: new TimelineLite(),
      t2: new TimelineLite(),
      t3: new TimelineLite()
    };
  },
  mounted() {
    // TODO: Cleanup this copy-pasta
    this.t1 = new TimelineLite({
      onComplete: () => this.t1.restart()
    });
    this.t2 = new TimelineLite({
      onComplete: () => this.t2.restart()
    });
    this.t3 = new TimelineLite({
      onComplete: () => this.t3.restart()
    });

    this.t1.to("#u1", 1, { x: 0, y: 80, ease: Back.easeOut });
    this.t2.to("#u2", 1, { x: 0, y: -70, ease: Back.easeOut }, "0.1");

    this.t3.to("#u3", 1, { x: 0, y: -150, ease: Back.easeOut }, "5.0");
    this.t1.to("#u1", 1, { x: 0, y: 150, ease: Back.easeOut }, "5.1");
    this.t2.to("#u2", 1, { x: 0, y: 0, ease: Back.easeOut }, "5");

    this.t1.to("#u1", 1, { x: 0, y: 0, ease: Back.easeOut }, "11");
    this.t2.to("#u2", 1, { x: 0, y: 0, ease: Back.easeOut }, "11.1");
    this.t3.to("#u3", 1, { x: 0, y: 0, ease: Back.easeOut }, "11");
  }
});
</script>
