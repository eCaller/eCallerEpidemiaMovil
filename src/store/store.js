/** 
 * Copyright 2020, Ingenia, S.A.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * @author jamartin@ingenia.es
 */
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
