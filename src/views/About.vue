<template>
  <v-container fluid>
    <h1 align="center">This is an about page</h1>
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
  </v-container>
</template>

<script>
import Item from "../store/item.json";
export default {
  data: () => ({
    item: null
  }),

  mounted() {
    this.item = Item;
  }
};
</script>
