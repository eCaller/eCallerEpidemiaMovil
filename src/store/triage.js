import createPersistedState from 'vuex-persistedstate';

export default {
  state: {
    /////////////////////////////////////////////////////////////////////////////////// triage, preguntas y respuestas
    triage: [
      {
        id: 1, codigo:"A", pregunta: "¿Tienes Fiebre?", orden: 1, tipo: 'R', value:null,
        respuestas: [
          {id:1, codigo:"1", respuesta: "Sí", orden: 1, valor:"false"},
          {id:2, codigo:"2", respuesta: "No", orden: 2, valor:"false"},
        ]
      },
      {
        id: 2, codigo:"B", pregunta: "¿Tienes tos continuada o persistente?", orden: 2, tipo: 'R', value:null,
        respuestas: [
          {id:3, codigo:"1", respuesta: "Sí", orden: 1, valor:"false"},
          {id:4, codigo:"2", respuesta: "No", orden: 2, valor:"false"},
        ]
      },
      {
        id: 3, codigo:"C", pregunta: "¿Tienes dificultad respiratoria?", orden: 3, tipo: 'R', value:null,
        respuestas: [
          {id:5, codigo:"1", respuesta: "Sí", orden: 1, valor:"false"},
          {id:6, codigo:"2", respuesta: "No", orden: 2, valor:"false"},
        ]
      },
      {
        id: 4, codigo:"D", pregunta: "¿Tienes malestar general?", orden: 4, tipo: 'R', value:null,
        respuestas: [
          {id:7, codigo:"1", respuesta: "Sí", orden: 1, valor:"false"},
          {id:8, codigo:"2", respuesta: "No", orden: 2, valor:"false"},
        ]
      },
      {
        id: 5, codigo:"E", pregunta: "Si estás sufriendo alguno de estos síntomas, márcalos", orden: 5, tipo: 'C', value:null,
        respuestas: [
          {id:9, codigo:"1", respuesta: "Disnea (ahogo)", orden: 1, valor:"false"},
          {id:10, codigo:"2", respuesta: "Hemoptisis (expectorar sangre)", orden: 2, valor:"false"},
          {id:11, codigo:"3", respuesta: "Dolor en el costado", orden: 3, valor:"false"},
        ]
      },
      {
        id: 6, codigo:"F", pregunta: "¿Sufres alguna de estas enfermedades? Si es el caso, márcalas", orden: 6, tipo: 'C', value:null,
        respuestas: [
          {id:11, codigo:"1", respuesta: "Diabetes", orden: 1, valor:"false"},
          {id:12, codigo:"2", respuesta: "Enfermedad cardiovascular (incluida la hipertensión)", orden: 2, valor:"false"},
          {id:13, codigo:"3", respuesta: "Enfermedad hepática crónica", orden: 3, valor:"false"},
          {id:14, codigo:"4", respuesta: "Enfermedad pulmonar crónica", orden: 4, valor:"false"},
          {id:15, codigo:"5", respuesta: "Enfermedad renal crónica", orden: 5, valor:"false"},
          {id:16, codigo:"6", respuesta: "Enfermedad neurológica o neuromuscular crónica", orden: 6, valor:"false"},
          {id:17, codigo:"7", respuesta: "Inmunodeficiencia congénita o adquirida (incluyendo el VIH)", orden: 7, valor:"false"},
          {id:18, codigo:"8", respuesta: "Cáncer", orden: 8, valor:"false"},
        ]
      },

    ]
  },
  getters: {
    triage (state) {
      return state;
    }

  },

}
