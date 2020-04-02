import CasoService from '../services/casoservice';
export default {
  namespaced: true,
  state: {
        id: null,
        fecha: null,
        nombre: null,
        codigo: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
        edad: null,
        dni: null,
        observaciones: null,
        lat: null,
        lng: null
  },
  getters: {
    getCaso (state) {
      return state;
    }
  },
  mutations: {
    crearCasoNuevo: (state) => {
      state.id = null;
      state.fecha = null;
      state.nombre = null,
      state.codigo = null,
      state.nombre = null,
      state.direccion = null,
      state.telefono = null,
      state.email = null,
      state.edad = null,
      state.dni = null,
      state.observaciones = null,
      state.lat = null,
      state.lng = null
    }
  },
  actions: {
    casoNuevo: ({commit}) => {
      commit('crearCasoNuevo');
    },
    enviarCaso: ({commit, state}, preguntas) => {
      return new Promise((resolve, reject) => {
        CasoService.enviarCaso(state, preguntas)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error);
          })
      })
    }
  }
};
