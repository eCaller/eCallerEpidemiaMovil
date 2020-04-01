<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>Noticias</h3>
      {{getNews}}
    </div></div>
    <md-divider></md-divider>
    <md-card-actions>
      <md-button class="md-raised md-primary" @click="continuar()">Volver</md-button>
    </md-card-actions>
  </md-content>
</template>

<script>
import Vuex, { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'noticias',
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      getNews: 'noticias/getNoticias'
    })
  },
  methods: {
    continuar() {
      this.$router.push("/informacion");
    },
    ...mapActions({
      fetchNoticias: 'noticias/fetchNoticias'
    })
  },
  mounted() {
    this.fetchNoticias();
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
