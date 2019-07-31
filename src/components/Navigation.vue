<template>
  <v-app-bar app fixed color="#1b1b1b" flat>
    <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="primary"></v-progress-linear>
    <v-btn class="ma-5" tile x-large color="white" icon>
      <v-icon>gamepad</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/" class="simple-hover" color="#1b1b1b" small depressed>Lobby</v-btn>
    <v-btn to="/" class="simple-hover" color="#1b1b1b" small depressed>My Leagues</v-btn>
    <v-btn to="/register" class="simple-hover" color="#1b1b1b" small depressed>My Account</v-btn>
    <v-btn to="/login" class="mr-5 simple-hover" color="#1b1b1b" small depressed>SIGN IN</v-btn>
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
  },
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
