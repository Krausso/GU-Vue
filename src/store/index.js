import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
  },
  getters: {
    userData: (state) => state.userData,
  },
  mutations: {
    changeUserData: (state, newData) => {
      state.userData = newData;
    },
  },
});
