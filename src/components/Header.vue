<template>
  <v-app-bar app color="indigo" flat>
    <v-toolbar-title class="white--text display-1">NZETA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <template v-if="$store.getters.isAuthenticated">
        <v-btn to="/" text color="white">Home</v-btn>
        <v-btn to="/about" text color="white">About</v-btn>
        <v-btn to="/catalog" text color="white">Catalog</v-btn>
        <v-btn to="/manager" text color="white">Manager</v-btn>
        <v-btn to="/director" text color="white">Director</v-btn>
        <v-btn to="/search" text color="white">Search</v-btn>
      </template>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/login" text color="white" v-if="!$store.getters.isAuthenticated">Login</v-btn>
      <v-btn text color="white" v-else @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.test {
  padding-top: 10%;
}
</style>