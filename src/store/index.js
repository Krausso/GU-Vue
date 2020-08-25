/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import correctData from './functions/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    username: '',
  },
  getters: {
    userData: (state) => state.userData,
  },
  actions: {
    getData: async ({state, commit}) => {
      const response = await axios.get(`https://api.github.com/users/${state.username}`)
        .then(function(response) {
          console.log(response);
          commit('changeUserData', correctData(response.data));
        });
    },
  },
  mutations: {
    changeUserData: (state, newData) => {
      state.userData = newData;
      console.log(state.userData);
    },
    changeAuthData: (state, newData) => {
      state.username = newData;
    },
  },
});
