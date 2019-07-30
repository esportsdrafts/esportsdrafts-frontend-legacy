<template>
  <v-app-bar app dark fixed color="#1b1b1b" flat>
    <v-btn class="ma-5" tile large color="white" icon>
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
  name: 'Navigation',
};
</script>

<style scoped>
.simple-hover:hover {
  color: #ffc857;
}

.simple-hover:hover:before {
  background-color: transparent;
}
</style>
