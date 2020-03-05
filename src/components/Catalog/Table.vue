<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <template v-if="node">{{node.name}}</template>
        <template v-else>Nutrition</template>
        <v-spacer></v-spacer>
        <v-text-field
          outlined
          v-model="search"
          append-icon="fas fa-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers || []" :items="items || []" :search="search"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import Leaf from "@/store/leaf.json";
export default {
  data: () => ({
    leaf: null,
    search: ""
  }),

  mounted() {
    this.leaf = Leaf;
  },

  computed: {
    node() {
      return this.$store.state.node;
    },

    items() {
      let node = this.node;
      let leaves = [];
      if (node) {
        if (node.children) {
          node.children.map(function callback(currentNode) {
            if (currentNode.children) {
              currentNode.children.map(callback);
            } else {
              leaves.push({
                name: currentNode.name
              });
            }
          });
        } else {
          return this.leaf.items;
        }
      }
      return leaves;
    },

    headers() {
      if (this.node) {
        if (this.node.children) {
          return [
            {
              text: "Название",
              align: "left",
              sortable: false,
              value: "name"
            }
          ];
        } else {
          return this.leaf.headers;
        }
      } else {
        return [];
      }
    }
  }
};
</script>