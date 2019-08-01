<template>
  <v-app-bar app color="#1b1b1b" flat>
    <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="primary"></v-progress-linear>
    <v-container grid-list-md>
      <v-layout row align-center justify-space-between wrap>
        <v-flex xl1 lg1 md1 xs12 sm12>
          <v-btn class="ma-5" tile x-large color="white" icon>
            <v-icon>gamepad</v-icon>
          </v-btn>
        </v-flex>
        <v-flex md8 xl4 lg6 s12 offset-md3 offset-lg5>
          <v-btn to="/" class="simple-hover" color="#1b1b1b" depressed>Lobby</v-btn>
          <v-btn to="/register" class="simple-hover" color="#1b1b1b" depressed>My Leagues</v-btn>
          <v-btn to="/register" class="simple-hover" color="#1b1b1b" depressed>My Account</v-btn>
          <v-btn to="/login" class="simple-hover" color="#1b1b1b" depressed>Login</v-btn>
          <v-btn to="/register" class="ml-5" color="primary" large rounded>REGISTER</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),

  watch: {
    loading(val) {
      if (!val) return;
      setTimeout(() => (this.loading = false), 4000);
    }
  }
};
</script>

<style scoped>
.simple-hover:hover {
  color: #ffc857;
}

.simple-hover:hover:before .simple-hover:hover:after {
  background-color: transparent;
}
</style>
