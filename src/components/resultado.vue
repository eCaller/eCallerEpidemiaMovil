<template lang="html">
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
      <div class="row bloque-texto">
        <div class="col-sm-8 offset-sm-4 align-self-center">
        <h3>Resultado</h3>
          <span v-html="respuestaNegativo.valor"></span>
        </div>
      </div>
      <md-card-actions>
        <md-button class="md-raised md-primary ancho-completo" @click="informacion()">Información sobre Covid-19</md-button>
      </md-card-actions>
    </md-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'resultadonegativo',
    data: () => ({
    }),
    methods: {
      informacion() {
        this.$router.push("/informacion");
      },
      continuar() {        
        this.$router.push("/menu");
      }
    },
    computed: {
      ...mapGetters({
        respuestaNegativo: 'variables/getRespuestaNegativo'
      })
    }
}
</script>

<style lang="css" scoped>
  .md-content > .md-content {
    width: 100%;
    max-height: 23em;
    overflow: auto;
    vertical-align: top;
  }
</style>
