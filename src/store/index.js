/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import correctData from './functions/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    githubData: {},
  },
  actions: {
    getData: async ({commit}, username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`)
        .then(function(response) {
          console.log(response);
          commit('changeUserData', correctData(response.data));
        })
        .catch(function(e) {
          console.log(e.response.status);
        });
    },
  },
  mutations: {
    changeUserData: (state, newData) => {
      state.githubData = newData;
      console.log(state.githubData);
    },
  },
});
