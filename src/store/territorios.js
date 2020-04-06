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
import territoriosService from '../services/territoriosservice';

export default {
  namespaced: true,
  state: {
    municipios: []
  },
  getters: {
    getMunicipios: (state) => {
      return state.municipios;
    }
  },
  mutations: {
    actualizarMunicipios: (state, payload) => {
      state.municipios = payload.municipios;
    }
  },
  actions: {
    loadMunicipios: ({commit}) => {
      territoriosService.getMunicipios()
        .then((datos) => {
          commit('actualizarMunicipios', {municipios: datos});
        })
        .catch((datos) => {
          // Si falla lo dejamos sin cambiar
        })
    }
  }

}
