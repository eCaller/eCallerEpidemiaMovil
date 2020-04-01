import noticiaservice from '@/apis/noticiaservice'

export default {
  namespaced: true,
  state: {
    noticias: []
  },
  getters: {
    getNoticias: (state) => {
      return state.noticias;
    }
  },
  actions: {
    fetchNoticias ({commit}) {
      noticiaservice.getExample()
        .then((respuesta) => {
          commit('setNoticias', {noticias: respuesta.data})
        })
        .catch((error) => {
          commit('setNoticias', {noticias: error.data})
        })
    }
  },
  mutations: {
    setNoticias(state, payload) {
      console.log(payload)
      state.noticias.push(payload.noticias)
    }
  }
};
