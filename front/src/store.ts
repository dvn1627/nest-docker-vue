import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'http://localhost:88/api/';

export default new Vuex.Store({
  state: {
    heroes: [],
    editedHero: {
      id: '',
      name: '',
    },
    token: null,
  },
  getters: {
    getToken: (state) => state.token,
    getHeroes: (state) => state.heroes,
    getHero: (state) => state.editedHero,
  },
  mutations: {
    setHeroes(state, payload) {
      state.heroes = payload
    },
    setToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    fetchHeroes({ commit, getters }) {
      const token = getters.getToken;
      if (!token) {
        return;
      }
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.get(url + 'heroes', options).then(res => {
        commit('setHeroes', res.data.data || []);
      })
    },
    loginAction({ commit }, payload) {
      axios.post(url + 'login', payload).then(res => {
        commit('setToken', res.data.token);
      })
    }
  },
});
