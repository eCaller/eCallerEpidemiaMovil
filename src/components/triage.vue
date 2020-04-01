<template>
  <div class="page-container md-layout-column">
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>

      <md-content>
        <h3>Test de detección</h3>
        <p>Para detectar si posee algún síntoma, responda a continuación a las siguientes preguntas</p>

        <md-card style="margin-left: 0x; margin-right: 0x" v-for="preg in triage.triage" :key="preg.id">
          <md-card-header class="md-primary">
            <div class="md-subhead">{{preg.pregunta}}</div>
          </md-card-header>

          <md-card-content v-if="preg.tipo=='R'">
            <md-radio v-for="resp in preg.respuestas" :key="resp.id" v-model="preg.value" :value="resp.id" class="md-primary" >{{resp.respuesta}}</md-radio>
          </md-card-content>

          <md-card-content v-if="preg.tipo=='C'">
            <md-switch v-model="resp.valor" v-for="resp in preg.respuestas" :key="resp.id" class="md-primary" >{{resp.respuesta}}</md-switch>
          </md-card-content>

        </md-card>

        <md-card-actions>
          <md-button class="md-raised md-default" @click="continuar()">Volver</md-button>
          <md-button class="md-raised md-primary" @click="enviar()">Enviar</md-button>
        </md-card-actions>
      </md-content>
    </div>
</template>

<script>
import Vuex from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'triage',
  data: () => ({
    radio: false
  }),
  computed: {...mapGetters(['triage']), //TODO Recuperar los datos de WS 
  },
  methods: {
    enviar() {
      let resultado = false;
      for (let p in this.triage.triage) { //TODO enviar datos a WS y con el resultado ir a una u otra pantalla
        let val = this.triage.triage[p];
        if (val && val.value) {
          resultado = true;
          break;
        }
      }
      if (resultado) {
        this.$router.push("/datosusuario");
      } else {
        this.$router.push("/resultado");
      }
    },
    continuar() {
      this.$router.push("/menu");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
