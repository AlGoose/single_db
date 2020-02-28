<template>
  <v-app-bar app color="indigo" flat outlined>
    <v-toolbar-title class="white--text display-1">NZETA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" text color="white">Home</v-btn>
      <v-btn to="/about" text color="white">About</v-btn>
      <v-btn to="/manager" text color="white">Manager</v-btn>
      <v-btn to="/director" text color="white">Director</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon color="white">
      <v-icon>fas fa-search</v-icon>
    </v-btn>
    <v-btn icon color="white">
      <v-icon>fab fa-battle-net</v-icon>
    </v-btn>
    <v-btn icon color="white">
      <v-icon>fab fa-steam</v-icon>
    </v-btn>
  </v-app-bar>
</template>