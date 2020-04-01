export default {
  state: {
        id: null,
        fecha: null,
        codigo: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
        edad: null,
        dni: null,
        observaciones:null
  },
  getters: {
    caso (state) {
      return state;
    }
  }
};
