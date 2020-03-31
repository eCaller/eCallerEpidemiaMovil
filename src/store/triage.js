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
      return state;
    }
  },
  mutations: {
    actualizarTriage: (state, payload) => {
      state.triage = payload.triage;
    }
  },
  actions: {
    loadTriage: ({commit}) => {
      TriageService.getTriage().then((datos) => {
        commit('actualizarTriage', {triage: datos});
      })
    },
    realizarTest: ({state}) => {
      return new Promise(async (resolve, reject) => {
        let resultado = await TriageService.realizarTest(state.triage);
        resolve(resultado);
      })      
    }
  }

}
