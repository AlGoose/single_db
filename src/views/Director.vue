<template>
  <v-row>
    <v-col class="col_one" cols="4">
      <Tree />
    </v-col>
    <v-col class="col_two" cols="8">
      <Features />
    </v-col>
  </v-row>
</template>

<script>
import Tree from "@/components/Director/Tree";
import Features from "@/components/Director/Features";

export default {
  components: {
    Tree,
    Features
  },
  data: () => ({})
};
</script>
