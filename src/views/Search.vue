<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card width="1000">
        <v-card-text>
          <v-autocomplete outlined label="Search" hide-no-data></v-autocomplete>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-card width="1000">
        <!-- <v-img
          contain
          class="black--text align-end"
          height="200px"
          src="https://www.zkabel.ru/upload/iblock/eef/eeff4dec3c7f36154993f6899a8ce60c.jpg"
        ></v-img>-->
        <v-carousel hide-delimiters height="300px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" contain></v-carousel-item>
        </v-carousel>
        <v-card-title>Cвойства | Название продукта | Артикул продукта</v-card-title>
        <!-- <v-divider></v-divider> -->
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
    item: null,
    items: [
      {
        src: "https://www.zkabel.ru/upload/iblock/eef/eeff4dec3c7f36154993f6899a8ce60c.jpg"
      },
      {
        src: "https://www.zkabel.ru/upload/iblock/4e8/4e85781a4d17d2f76a147266bcfecafe.jpg"
      },
      {
        src: "https://www.zkabel.ru/upload/iblock/e43/e43a6073e01226972edf30f6e598f5c1.jpg"
      },
      {
        src: "https://www.zkabel.ru/upload/iblock/734/7343f40adff93d228646945c14dc5e55.png"
      },
      {
        src: "https://www.zkabel.ru/upload/iblock/7f6/7f6eac69c21dea2369254deea940b046.jpg"
      }
    ]
  }),

  mounted() {
    this.item = Item;
  }
};
</script>

<style scoped>
.row {
  margin: 1%;
}
</style>