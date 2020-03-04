import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    node: null,
    token: localStorage.getItem('user-token') || '',
    status: ''
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token
    },
    authStatus(state) {
      return state.status;
    }
  },

  mutations: {
    setNode(state, newNode) {
      state.node = newNode;
    },
    AUTH_REQUEST(state) {
      state.status = 'Loading'
    },
    AUTH_SUCCESS(state, token) {
      state.status = 'Success'
      state.token = token
    },
    AUTH_ERROR(state) {
      state.status = 'Error'
    },
    AUTH_LOGOUT(state) {
      state.token = "";
    }
  },

  actions: {
    AUTH_REQUEST: ({ commit }, user) => {
      return new Promise((resolve) => { // The Promise used for router redirect in login
        console.log(user);
        commit('AUTH_REQUEST');
        const token = "test_token";
        localStorage.setItem('user-token', token); // store the token in localstorage
        commit('AUTH_SUCCESS', token);
        resolve();

        // axios({ url: 'auth', data: user, method: 'POST' })
        //   .then(resp => {
        //     const token = resp.data.token
        //     localStorage.setItem('user-token', token) // store the token in localstorage
        //     commit(AUTH_SUCCESS, token)
        //     // you have your token, now log in your user :)
        //     // dispatch(USER_REQUEST)
        //     resolve(resp)
        //   })
        //   .catch(err => {
        //     commit(AUTH_ERROR, err)
        //     localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
        //     reject(err)
        //   })
      })
    },
    AUTH_LOGOUT: ({ commit }) => {
      return new Promise((resolve) => {
        commit("AUTH_LOGOUT")
        localStorage.removeItem('user-token') // clear your user's token from localstorage
        resolve();
      })
    }
  },

  modules: {
  }
})
