import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

const url = 'http://localhost:88/api/';

export default new Vuex.Store({
  state: {
    heroes: [],
    editedHero: null,
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
    setHero(state, payload) {
      state.editedHero = payload
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
        router.push({name: 'dashboard'});
      })
    },
    addHeroAction({ getters, dispatch }, payload) {
      const token = getters.getToken;
      if (!token) {
        return;
      }
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.post(url + 'heroes', payload, options).then( res => {
        dispatch('fetchHeroes');
      });
    },
    deleteHeroAction({ getters, dispatch}, payload) {
      const token = getters.getToken;
      if (!token) {
        return;
      }
      const params = {
        headers: {
          Authorization: token
        },
        data: payload
      }
      axios.delete(url + 'heroes', params).then( res => {
        dispatch('fetchHeroes');
      });
    },
    fetchHeroAction({ getters, commit }, payload) {
      const token = getters.getToken;
      if (!token) {
        return;
      }
      const options = {
        headers: {
          Authorization: token
        },
      }
      axios.get(url + 'heroes/show?id=' + payload, options).then( res => {
        commit('setHero', res.data);
      });
    },
    saveHeroAction({ getters, commit}, payload) {
      const token = getters.getToken;
      if (!token) {
        return;
      }
      const options = {
        headers: {
          Authorization: token
        },
      }
      axios.put(url + 'heroes', payload, options).then( res => {
        commit('setHero', {_id: 0, name: ''});
      });
    }
  },
});
