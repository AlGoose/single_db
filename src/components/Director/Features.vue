<template>
  <v-row>
    <v-col cols="6">
      <v-card>
        <v-card-title>Текущие свойства</v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="node">{{node.id}}</v-card-text>
        <v-card-text v-else>Свойства...</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo" @click="dialog = true">Добавить свойство</v-btn>
        </v-card-actions>
      </v-card>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Добавить свойство</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="featureName" label="Название" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select v-model="featureType" :items="types" label="Тип" outlined></v-select>
                  </v-col>

                  <template v-if="featureType === 'Range'">
                    <v-col cols="12" md="6">
                      <v-text-field label="От" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="До" outlined></v-text-field>
                    </v-col>
                  </template>

                  <template v-else-if="featureType === 'Enum'">
                    <v-col cols="12" v-if="enumItemsArray.length > 0">
                      <v-list flat>
                        <v-list-item v-for="(item, i) in enumItemsArray" :key="i">
                          <v-list-item-title v-text="item"></v-list-item-title>
                          <v-btn color="indigo" icon>
                            <v-icon @click="removeEnumItem(i)">far fa-minus-square</v-icon>
                          </v-btn>
                        </v-list-item>
                      </v-list>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="enumItemName"
                        label="Название"
                        outlined
                        @keyup.enter="addEnumItem"
                      >
                        <template slot="append-outer">
                          <v-btn icon color="indigo">
                            <v-icon @click="addEnumItem">far fa-plus-square</v-icon>
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </template>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined color="red" @click="closeDialog">Отмена</v-btn>
              <v-btn outlined color="success" @click="closeDialog">Добавить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>

    <v-col cols="6">
      <v-card>
        <v-card-title>Родительские свойства</v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="node">{{node}}</v-card-text>
        <v-card-text v-else>Свойства...</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    featureName: null,
    featureType: null,
    enumItemName: null,
    enumItemsArray: [],
    types: ["String", "Number", "File", "Enum", "Range"]
  }),

  computed: {
    node() {
      return this.$store.state.node;
    }
  },

  methods: {
    addEnumItem() {
      if (this.enumItemName != null && this.enumItemName != "") {
        this.enumItemsArray.push(this.enumItemName);
        this.enumItemName = null;
      }
    },

    removeEnumItem(i) {
      this.enumItemsArray.splice(i, 1);
    },

    closeDialog() {
      this.featureName = null;
      this.featureType = null;
      this.enumItemName = null;
      this.enumItemsArray = [];
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>