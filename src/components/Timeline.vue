<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1" class="test" @click="toTop">
        <a id="back-top">&#9650; Наверх</a>
      </v-col>
      <v-col cols="11">
        <v-timeline dense>
          <v-timeline-item v-for="n in count" :key="n" small>
            <v-card style="width: 98%">
              <v-card-title class="headline">Lorem ipsum</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-subtitle>09:41 | 01.01.1980</v-card-subtitle>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-btn color="indigo" block text @click="addNews">More</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    count: 5,
    settings: {
      maxScrollbarLength: 60
    }
  }),

  methods: {
    addNews() {
      this.count += 5;
    },

    toTop() {
      console.log("top");
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
.test:hover {
  background: rgba(225, 231, 237, 0.8);
}

#back-top {
  position: fixed;
}
</style>