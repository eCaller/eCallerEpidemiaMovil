<template lang="html">
  <div class="page-container">
    <div class="md-layout cabecera">
      <div class="md-layout-item">
        <div class="flecha-hacia-atras" >
        </div>
      </div>
      <div class="md-layout-item">
          <div class="logo-cabecera">
            <img src="../assets/logo.png" alt="SCF">
          </div>
      </div>
    </div>
      
    <md-content>
      <div v-on:click="informacion()">
        <md-card class="tarjeta">
          <md-card-media>
            <img src="../assets/covid.png" alt="covid-19">
          </md-card-media>
          <md-card-content class="pie-de-tarjeta">
            Información sobre Covid-19
          </md-card-content>
        </md-card>
      </div>
      
      <div v-on:click="triage()">
        <md-card class="tarjeta">
          <md-card-media>
            <img src="../assets/test.png" alt="test">
          </md-card-media>
          <md-card-content class="pie-de-tarjeta">
            ¿Tienes algún síntoma?
          </md-card-content>
        </md-card>
      </div>
    </md-content>
  </div>
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

  .ancho-completo { 
    width: 100%;
    padding: 0px;
    margin: 10px 0px !important;
  }
  .cabecera {
    background-color: #ddd;
    height: 80px;
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
  .tarjeta {    
    box-shadow: none !important;
    text-align: center;    
    margin: 15% auto;
  }
  .pie-de-tarjeta {    
    font-size: 20px !important;
    font-weight: bold;
  }
  .tarjeta img {
    width: 40% !important;
  }
</style>
