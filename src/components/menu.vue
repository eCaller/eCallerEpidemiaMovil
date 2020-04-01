<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>Seleccionar</h3><p>Indique qué acción desea realizar.</p>
    </div></div>

    <md-divider></md-divider>
    <md-button class="md-raised md-default" @click="informacion()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">Información</md-button>
    <br>
    <md-button class="md-raised md-default" @click="triage()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">¿tiene algún síntoma?</md-button>
  </md-content>
</template>

<script>
export default {
  name: 'menu',
    data: () => ({
    }),
    methods: {
      informacion() {
        this.$router.push("/informacion");
      },

      triage() {
        this.$router.push("/triage");
      },

    }
}
</script>

<style lang="css">

</style>
