
<template>
  <v-container>
    <v-layout class="pt-0 pb-12 pl-0 mb-12" column="12" justify-center>
      <v-flex md12 sm12 xs12 fill-height class="pt-6 pb-0 mb-3">
        <h2 class="text-center display-3 font-weight-bold">How it works</h2>
      </v-flex>
      <v-flex md12 sm12 xs12 fill-height align="baseline">
        <h2
          class="text-center mb-6 font-weight-regular grey--text title"
        >Draft players from your favorite games</h2>
      </v-flex>

      <v-layout class="pt-12 pb-12 pl-4 pr-4 mt-4 mb-2" justify-center>
        <v-flex md3 sm3 xs12>
          <v-card height="200" elevation="0">
            <v-card-title>Dota2</v-card-title>
          </v-card>
        </v-flex>

        <v-spacer></v-spacer>

        <v-flex md3 sm3 xs12>
          <v-card height="200" elevation="0">
            <v-card-title>Dota2</v-card-title>
          </v-card>
        </v-flex>

        <v-spacer></v-spacer>

        <v-flex md3 sm3 xs12>
          <v-card height="200" elevation="0">
            <v-card-title>Dota2</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-flex md12>
        <span class="faded-line mt-4"></span>
      </v-flex>

      <v-flex md12>
        <v-layout wrap class="pt-6 pb-3 pl-6 pr-6" fill-height>
          <v-flex md2>
            <v-card elevation="0" color="rgb(255, 0, 0, 0)" class="justify-center">
              <v-img
                :src="`${publicPath}img/dota-2-logo.svg`"
                aspect-ratio="1"
                width="100"
                height="100"
                class="pa-2 text-center centered"
              ></v-img>
            </v-card>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex md2>
            <v-card elevation="0" color="rgb(255, 0, 0, 0)">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    class="coming-soon-tm pa-2 centered"
                    :src="`${publicPath}img/csgo-logo.svg`"
                    aspect-ratio="1"
                    width="100"
                    height="100"
                  ></v-img>
                </template>
                <span>CSGO available soon&trade;</span>
              </v-tooltip>
            </v-card>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex md2>
            <v-card elevation="0" color="rgb(255, 0, 0, 0)">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    class="coming-soon-tm pa-2 centered"
                    :src="`${publicPath}img/league-logo.svg`"
                    aspect-ratio="1"
                    height="100"
                    width="100"
                  ></v-img>
                </template>
                <span>LoL available soon&trade;</span>
              </v-tooltip>
            </v-card>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex md2>
            <v-card elevation="0" color="rgb(255, 0, 0, 0)">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    class="coming-soon-tm pa-2 centered"
                    :src="`${publicPath}img/overwatch-logo.svg`"
                    aspect-ratio="1"
                    width="94"
                    height="94"
                  ></v-img>
                </template>
                <span>Overwatch&trade; available soon&trade;</span>
              </v-tooltip>
            </v-card>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex md2>
            <v-card elevation="0" color="rgb(255, 0, 0, 0)">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    class="coming-soon-tm pa-2 centered"
                    :src="`${publicPath}img/fortnite-logo.svg`"
                    aspect-ratio="1"
                    width="100"
                    height="100"
                  ></v-img>
                </template>
                <span>Fortnite&trade; available soon&trade;</span>
              </v-tooltip>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex md12>
        <span class="faded-line mt-4"></span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

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

.faded-line {
  display: block;
  border: 0;
  color: #feab3a;
  background: #feab3a;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
}

.centered {
  margin: 0 auto;
}
</style>
