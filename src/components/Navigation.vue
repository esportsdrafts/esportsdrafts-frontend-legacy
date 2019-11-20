<template>
  <v-app-bar app color="#151617" flat>
    <v-toolbar color="#151617" flat class="centered-toolbar" max-width="2024">
      <v-toolbar-title>
        <v-btn tile x-large text>
          <v-icon large>gamepad</v-icon>
          <div class="ml-2 title text-none hidden-sm-and-down">esportsdrafts</div>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :to="item.link"
          :key="item.icon"
          depressed
          color="#151617"
          class="simple-hover"
          rounded
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-btn class="ml-4 mr-8" outlined color="primary" large href="/register">Sign Up</v-btn>
    </v-toolbar>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      flat
      absolute
      bottom
      color="primary"
    ></v-progress-linear>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    menuItems: [
      {
        title: 'Login',
        link: '/login',
        icon: 'warning',
      },
    ],
  }),

  watch: {
    loading(val) {
      if (!val) return;
      setTimeout(() => {
        this.loading = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.simple-hover:hover {
  color: #ffc857;
  background-color: none;
}

.centered-toolbar {
  margin: 0 auto;
}

.v-btn::before {
  background-color: transparent;
}

.simple-hover:hover:before .simple-hover:hover:after {
  background-color: transparent;
}
</style>
