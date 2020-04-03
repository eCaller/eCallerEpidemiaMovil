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
import VariablesService from '../services/variablesservice';

export default {
    namespaced: true,
    state: {
      /////////////////////////////////////////////////////////////////////////////////// triage, preguntas y respuestas
      variables: []
    },
    getters: {
      getVariables: (state) => {
        return state.variables;
      },
      getRespuestaNegativo: (state) => {
          let respuesta = {
              valor: ''
          }
          let filtrado = state.variables.find((variable) => {
              return variable.nombre.toUpperCase() === 'RESPUESTA_NEGATIVO'
          });

          if (filtrado != undefined) {
              respuesta = filtrado;
          }
          return respuesta;
      },
      getRespuestaPositivo: (state) => {
        let respuesta = {
            valor: ''
        }
        let filtrado = state.variables.find((variable) => {
            return variable.nombre.toUpperCase() === 'RESPUESTA_POSITIVO'
        });

        if (filtrado != undefined ) {
            respuesta = filtrado;
        }
        return respuesta;

      },      
      getPoliticaPrivacidad: (state) => {
        let politica = '';
        let variablePolitica = state.variables.find((variable) => {
          return variable.nombre.toUpperCase() === 'PRIVACIDAD'
        })
        if (variablePolitica != undefined) {
          politica = variablePolitica.valor;
        }
        return politica;
      }
    },
    mutations: {
      actualizarVariables: (state, payload) => {
        state.variables = payload.variables;
      }
    },
    actions: {
      loadVariables: ({commit}) => {
        VariablesService.getVariables()
            .then((datos) => {
                commit('actualizarVariables', {variables: datos});
            })
            .catch((error) => {
                commit('actualizarVariables', {variables: error});
            })
      },
    }
  
  }
  