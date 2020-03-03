<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-row>
      <v-btn color="success" @click="increment">+</v-btn>
      <v-btn color="success" @click="decrement">-</v-btn>
      <span>{{count}}</span>
    </v-row>
    <v-row>
      <v-btn color="indigo" dark @click="logout">LOGOUT</v-btn>
    </v-row>
    <v-row justify="center">
      <v-card width="500">
        <v-card-title>Cвойства</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-simple-table dense v-if="item">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Наименоване</th>
                  <th class="text-left">Значение</th>
                </tr>
              </thead>
              <tbody>
                <v-card-subtitle>Личные свойства</v-card-subtitle>
                <tr v-for="(value, name, index) in item.features" :key="'A' + index">
                  <td>{{ name }}</td>
                  <td>{{ value }}</td>
                </tr>
                <v-card-subtitle>Родительские свойства</v-card-subtitle>
                <tr v-for="(value, name, index) in item.parentFeatures" :key="'B' + index">
                  <td>{{ name }}</td>
                  <td>{{ value }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Item from "../store/item.json";
export default {
  data: () => ({
    item: null
  }),

  computed: {
    count() {
      return this.$store.state.count;
    }
  },

  mounted() {
    this.item = Item;
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },

    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
