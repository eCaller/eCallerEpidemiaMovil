<template>
  <div class="page-container">
    <div class="md-layout">
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

        <md-card style="margin-left: 0x; margin-right: 0x" v-for="preg in triage.triage" :key="preg.id">
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

        <md-button class="md-raised md-primary ancho-completo" @click="enviar()">Enviar</md-button>
      </md-content>
    </div>
</template>

<script>
import Vuex, { mapGetters } from 'vuex';

export default {
  name: 'triage',
  data: () => ({
    radio: false
  }),
  computed: {...mapGetters({
    triage: 'triage/getTriage'
    }),
  },
  created() {
    this.$store.dispatch('triage/loadTriage')
  },
  methods: {
    enviar() {
      this.$store.dispatch('triage/realizarTest')
        .then((resultado) => {
          console.log(resultado);
        })
      /*
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
      }*/
    },
    continuar() {
      this.$router.push("/menu");
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-layout-item {
    height: 80px;
  }
  .ancho-completo { 
    width: 100%;
    padding: 0px;
    margin: 10px 0px !important;
  }
  .flecha-hacia-atras {
    position: relative;
    padding-top: 20px;
    padding-left: 25px;
    font-size: 40px;
    color:orange;
  }
  .logo-cabecera {    
    position: relative;
    padding-top: 10px;
  }
</style>
