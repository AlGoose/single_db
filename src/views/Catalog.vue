<template>
  <v-row>
    <v-col class="col_one" cols="4">
      <Tree />
    </v-col>
    <v-col class="col_two" cols="8">
      <Table />
    </v-col>
  </v-row>
</template>

<script>
import Tree from "@/components/Catalog/Tree";
import Table from "@/components/Catalog/Table";

export default {
  components: {
    Tree,
    Table
  }
};
</script>
