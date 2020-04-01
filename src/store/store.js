import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {mapGetters} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import caso from './caso.js';
import triage from './triage.js';
import noticias from './noticias.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: true,
  state: {
  },
  modules: {
    caso: caso,
    triage: triage,
    noticias: noticias,
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  mutations: {

  },
  getters: {

  },
  computed: mapGetters(['caso', 'triage', 'noticias']),
  actions: {

  }

});
