<template>
  <div class="page-container">
    <div class="md-layout cabecera">
      <div class="md-layout-item">
        <div class="flecha-hacia-atras" @click="continuar()">
          <font-awesome-icon :icon="['fa', 'angle-left']"/>
        </div>
      </div>
      <div class="md-layout-item">
          <div class="logo-cabecera">
            <img src="../assets/logo.png" alt="SCF">
          </div>
      </div>
    </div>
    <md-content>
      <h2 class="md-primary">Test de detección</h2>
      <p>Para detectar si posee algún síntoma, responda a continuación a las siguientes preguntas</p>

      <md-card style="margin-left: 0x; margin-right: 0x" v-for="preg in triage" :key="preg.id">
        <md-card-header class="md-primary">
          <div class="md-subhead">{{preg.pregunta}}</div>
        </md-card-header>

        <md-card-content v-if="preg.tipo=='R'">
          <md-radio v-for="resp in preg.respuestas" :key="resp.id" v-model="preg.value" :value="resp.id" class="md-primary" >{{resp.respuesta}}</md-radio>
        </md-card-content>

        <md-card-content v-if="preg.tipo=='C'">
          <md-switch v-for="resp in preg.respuestas" :key="resp.id" v-model="resp.valor"  class="md-primary" >{{resp.respuesta}}</md-switch>
        </md-card-content>
      </md-card>

      <div v-if="triage.length === 0 || comprobando === true">          
        <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
      </div>
      <md-button class="md-raised md-primary ancho-completo" @click="enviar()" :disabled="triage.length === 0">Finalizar</md-button>
    </md-content>
  </div>
</template>

<script>
import Vuex, { mapGetters } from 'vuex';

export default {
  name: 'triage',
  data: () => ({
    radio: false,
    // Para controlar cuando se muestra la barra de carga
    comprobando: false,
    intervalo: null
  }),
  computed: {...mapGetters({
    triage: 'triage/getTriage'
    }),
  },
  created() {
    this.loadData();
  },
  beforeDestroy() {
    clearInterval(this.intervalo);
  },
  methods: {
    enviar() {
      this.comprobando = true;
      this.$store.dispatch('triage/comprobarTriage')
        .then((resultado) => {
          this.comprobando = false;
          if (resultado) {
            this.$router.push("/datosusuario");
          } else {            
            this.$router.push("/resultado");
          }
        })
        .catch((error) => {
          this.comprobando = false;
        })
    },
    continuar() {
      this.$router.push("/menu");
    },
    loadData() {      
      this.$store.dispatch('triage/loadTriage');
      this.intervalo = setInterval(() => {
        if (this.triage.length === 0) {
          this.$store.dispatch('triage/loadTriage');
        }
      }, 25000);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
  .md-switch {
    width: 100%;
  }
</style>
