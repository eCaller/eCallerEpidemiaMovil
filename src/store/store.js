import Vue from 'vue';
import Vuex from 'vuex';
import {mapGetters} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import caso from './caso.js';
import triage from './triage.js';
import variables from './variables.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: true,
  state: {
  },
  modules: {
    caso: caso,
    triage: triage,
    variables: variables
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  mutations: {

  },
  getters: {

  },
  computed: mapGetters(['caso', 'triage', 'variables']),
  actions: {

  }

});
