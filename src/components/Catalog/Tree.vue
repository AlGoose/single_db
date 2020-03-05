<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Дерево</v-card-title>
      <v-divider></v-divider>
      <v-treeview
        hoverable
        activatable
        :items="items"
        @update:active="selectNode"
        expand-icon="fas fa-chevron-down"
        return-object
      ></v-treeview>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Наконечники",
        children: [
          {
            id: 2,
            name: "Наконечники и соединители под опрессовку",
            children: [
              {
                id: 4,
                name: "Медные наконечники",
                children: [
                  {
                    id: 5,
                    name: "Т (медные) ГОСТ"
                  },
                  {
                    id: 6,
                    name: "ТМЛ (медно-луженые) ГОСТ"
                  },
                  {
                    id: 7,
                    name: "JG"
                  }
                ]
              },
              {
                id: 8,
                name: "Медные гильзы",
                children: [
                  {
                    id: 9,
                    name: "ГМ (медные)"
                  },
                  {
                    id: 10,
                    name: "ГМЛ (медные луженые)"
                  }
                ]
              },
              {
                id: 11,
                name: "Алюминиевые гильзы ГА"
              },
              {
                id: 12,
                name: "Алюминиевые наконечники ТА"
              },
              {
                id: 13,
                name: "Медно-алюминиевые наконечники ТАМ"
              }
            ]
          },
          { id: 14, name: "Наконечники медные под пайку П" }
        ]
      },
      {
        id: 15,
        name: "Болтовые",
        children: [
          {
            id: 16,
            name: "Наконечники",
            children: [
              {
                id: 17,
                name: "Наконечники с рядным расположением болтов до 10кВ"
              },
              {
                id: 18,
                name: "Наконечники с V-образным расположением болтов до 10кВ"
              },
              {
                id: 19,
                name:
                  "Наконечники с V-образным расположением болтов до 35кВ (гальваника)"
              }
            ]
          },
          {
            id: 20,
            name: "Соединители",
            children: [
              {
                id: 21,
                name: "Соединители с рядным расположением болтов до 10кВ"
              },
              {
                id: 22,
                name: "Соединители с V-образным расположением болтов до 10кВ"
              },
              {
                id: 23,
                name:
                  "Соединители с V-образным расположением болтов до 35кВ (гальваника)"
              }
            ]
          }
        ]
      }
    ]
  }),

  destroyed() {
    this.$store.commit("setNode", null);
  },

  methods: {
    selectNode(node) {
      this.$store.commit("setNode", node.pop());
    }
  }
};
</script>