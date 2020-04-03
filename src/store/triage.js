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
import createPersistedState from 'vuex-persistedstate';
import TriageService from '../services/triageservice';

export default {
  namespaced: true,
  state: {
    /////////////////////////////////////////////////////////////////////////////////// triage, preguntas y respuestas
    triage: [
    ]
  },
  getters: {
    getTriage: (state) => {
      return state.triage;
    }
  },
  mutations: {
    actualizarTriage: (state, payload) => {
      state.triage = payload.triage;
    }
  },
  actions: {
    loadTriage: ({commit}) => {
      TriageService.getTriage()
        .then((datos) => {
          commit('actualizarTriage', {triage: datos});
        })
        .catch((datos) => {
          // Si falla lo dejamos sin cambiar
        })
    },
    comprobarTriage: ({state}) => {
      return new Promise(async (resolve, reject) => {
        try {
          let resultado = await TriageService.comprobarTriage(state.triage);
          resolve(resultado);
        } catch (error) {
          console.log('Ha ocurrido un error al procesar el triage.')
          reject(error);
        }        
      })      
    }
  }

}
