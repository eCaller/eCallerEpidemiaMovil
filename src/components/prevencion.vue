<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>Medidas de prevención</h3>
    </div></div>

    <md-divider></md-divider>
    <md-card-actions>
      <md-button class="md-raised md-primary" @click="continuar()">Volver</md-button>
    </md-card-actions>
  </md-content>
</template>

<script>
export default {
  name: 'prevencion',
    data: () => ({
    }),
    methods: {
      continuar() {
        this.$router.push("/informacion");
      },
    }
}
</script>

<style lang="css">
body {

}
.md-content > .md-content {
    width: 100%;
    max-height: 23em;
    overflow: auto;
    vertical-align: top;
  }
</style>
