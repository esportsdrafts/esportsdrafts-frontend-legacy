<template>
  <v-app-bar app color="#1b1b1b" flat>
    <v-progress-linear :active="loading" :indeterminate="loading" flat absolute top color="primary"></v-progress-linear>
    <v-toolbar color="#1b1b1b" flat>
      <v-toolbar-title>
        <v-btn tile x-large text>
          <v-icon large>gamepad</v-icon>
          <div class="ml-2 title text-none">eFantasy</div>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menuItems"
          :to="item.link"
          :key="item.icon"
          depressed
          color="#1b1b1b"
          class="simple-hover"
          rounded
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon color="white" v-slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menuItems" :to="item.link" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    menuItems: [
      {
        title: "Lobby",
        link: "/",
        icon: "home"
      },
      {
        title: "My Leagues",
        link: "/register",
        icon: "list"
      },
      {
        title: "My Account",
        link: "/register",
        icon: "person"
      },
      {
        title: "Log in",
        link: "/login",
        icon: "warning"
      }
    ]
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
  background-color: none;
}

.v-btn::before {
  background-color: transparent;
}

.simple-hover:hover:before .simple-hover:hover:after {
  background-color: transparent;
}
</style>
