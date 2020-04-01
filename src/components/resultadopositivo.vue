<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>Resultado</h3>
      <p><strong>¡Presentas síntomas!</strong></p>
      <p>Para confirmar los síntomas es necesario realizar una prueba física. En breve un agente se podrá en contacto contigo para realizar un seguimiento más exaustivo.</p>
      <p><strong>¡Es muy importante que sigas las medidas de confinamiento y te quedes en casa!</strong></p>
      <p>Contener el virus es responsabilidad de todos.</p>
    </div></div>

    <md-divider></md-divider>
    <md-card-actions>
      <md-button class="md-raised md-default" @click="informacion()">Información</md-button>
      <md-button class="md-raised md-primary" @click="continuar()">Volver</md-button>
    </md-card-actions>
  </md-content>
</template>

<script>
export default {
  name: 'resultadopositivo',
    data: () => ({
    }),
    methods: {
      informacion() {
        this.$router.push("/informacion");
      },
      continuar() {
        this.$router.push("/menu");
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
