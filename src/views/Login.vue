<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card width="600">
        <v-card-title>Login</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field v-model="login" label="Login" outlined></v-text-field>
          <v-text-field v-model="password" label="Password" outlined></v-text-field>
          <v-btn color="indigo" class="white--text" block>Accept</v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    login: null,
    password: null
  })
};
</script>