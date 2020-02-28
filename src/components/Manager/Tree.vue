<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Дерево</v-card-title>
      <v-divider></v-divider>
      <v-treeview
        hoverable
        activatable
        :items="items"
        :active.sync="active"
        :open.sync="open"
        expand-icon="fas fa-chevron-down"
      >
        <template slot="append" slot-scope="{ item }" v-if="item.children">
          <v-btn icon>
            <v-icon @click="openDialog(item)">far fa-plus-square</v-icon>
          </v-btn>
        </template>
      </v-treeview>
      {{active}}
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Добавить узел</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="nodeName" label="Название" outlined></v-text-field>
                  <v-switch v-model="isNodeParent" label="Родительский узел"></v-switch>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="red" @click="closeDialog">Отмена</v-btn>
            <v-btn outlined color="success" @click="addNode">Добавить</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    isNodeParent: false,
    nodeName: null,
    currentNode: null,
    active: [],
    open: [],
    items: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" }
            ]
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" }
        ]
      }
    ]
  }),

  methods: {
    openDialog(item) {
      this.currentNode = item;
      this.dialog = true;
    },

    closeDialog() {
      this.currentNode = null;
      this.nodeName = null;
      this.isNodeParent = false;
      this.dialog = false;
    },

    addNode() {
      let obj = {
        id: Date.now(),
        name: this.nodeName
      };

      if (this.isNodeParent) {
        obj.children = [];
      }
      
      this.currentNode.children.push(obj);
      this.closeDialog();
    }
  }
};
</script>