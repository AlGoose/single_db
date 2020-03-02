import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    node: null
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setNode(state, newNode) {
      state.node = newNode;
    }
  },
  actions: {
  },
  modules: {
  }
})
