<template lang="html">
  <md-content>
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>
    <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
      <h3>¡Hola usuario!</h3><p>Si tienes síntomas de coronavirus SARS CoV-2 o has estado en contacto con una persona afectada deberías hacer un control y seguimiento diario de tus síntomas.</p>
      <p>Esta aplicación te permitirá hacer un seguimiento de la evolución de los síntomas y te dará las indicaciones y consejos a seguir en cada caso.</p>
      <p>El uso de este servicio supone la aceptación de los términos y la política de privacidad descritos a continuación.</p>
    </div></div>
    <md-content class="md-scrollbar" style="text-align: justify;">
      <span v-html="politica"></span>
    </md-content>
    <div v-if="politica == ''">
      <span>Cargando politica...</span>
      <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
    </div>
    <md-card-content>
      <md-switch v-model="aceptada" :disabled="politica == ''" class="md-primary switch-politica" >Acepto RGDP</md-switch>
    </md-card-content>
    <md-divider></md-divider>
    <md-card-actions>
      <md-button class="md-raised md-primary ancho-completo" :disabled="!aceptada" @click="aceptar()">Entrar</md-button>
    </md-card-actions>
  </md-content>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'politica',
    data: () => ({
      aceptada: false,
      intervalo: null
    }),
    computed: {
      ...mapGetters({
        politica: 'variables/getPoliticaPrivacidad'
      })
    },
    methods: {
      aceptar() {
        window.localStorage.setItem("privacidad", 'true');
        this.$router.push("/menu");
      },
      denegar() {
        this.$router.push("/denegar");
      },
      loadPolitica() {
        this.$store.dispatch('variables/loadVariables');
        this.intervalo = setInterval(() => {
          if (this.politica == '') {
            this.$store.dispatch('variables/loadVariables');
          }
        }, 25000);
      }
    },
    created() {      
      this.loadPolitica();
      let privacidad = window.localStorage.getItem('privacidad');
      if (privacidad === 'true') {
        this.$router.push('/menu');
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalo);
    },
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
  
  .switch-politica {
    justify-content: center;
    font-size: 18px;
    
  }
</style>
