<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card width="600">
        <v-card-title>Login</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="login"
              label="Login"
              outlined
              required
              :rules="[v => !!v || 'Login is required']"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              required
              outlined
              :append-icon="show ? 'far fa-eye' : 'far fa-eye-slash'"
              :rules="[v => !!v || 'Password is required']"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
            <v-btn color="indigo" class="white--text" block @click="signIn">Accept</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    valid: true,
    login: null,
    password: null
  }),

  methods: {
    signIn() {
      if (this.validate()) {
        const { login, password } = this;
        this.$store.dispatch("AUTH_REQUEST", { login, password }).then(() => {
          this.$router.push("/");
        });
      }
    },

    validate() {
      return this.$refs.form.validate();
    }
  }
};
</script>