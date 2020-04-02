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
