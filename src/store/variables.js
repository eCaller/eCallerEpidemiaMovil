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
              valor: '<p></p>'
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
            valor: '<p></p>'
        }
        let filtrado = state.variables.find((variable) => {
            return variable.nombre.toUpperCase() === 'RESPUESTA_POSITIVO'
        });

        if (filtrado != undefined ) {
            respuesta = filtrado;
        }
        return respuesta;

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
  