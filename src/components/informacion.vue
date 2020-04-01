<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <!--<div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>Usuario</h3><p>Pantalla con Información.</p>
    </div></div>-->

    <md-divider></md-divider>
    <md-button class="md-raised md-default" @click="prevencion()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">Prevención</md-button>
    <br>
    <md-button class="md-raised md-default" @click="protocolos()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">Protocolos</md-button>
    <br>
    <md-button class="md-raised md-default" @click="ultimasNoticias()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">Últimas Noticias</md-button>
    <md-card-actions>
      <md-button class="md-raised md-primary" @click="continuar()">Volver</md-button>
    </md-card-actions>
  </md-content>
</template>

<script>
export default {
  name: 'informacion',
    data: () => ({
    }),
    methods: {
      continuar() {
        this.$router.push("/menu");
      },
      prevencion() {
        this.$router.push("/prevencion");
      },
      protocolos() {
        this.$router.push("/protocolos");
      },
      ultimasNoticias() {
        this.$router.push("/noticias");
      }
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
