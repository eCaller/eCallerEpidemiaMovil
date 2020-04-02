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
      <div class="row bloque-texto"><div class="col-sm-8 offset-sm-4 align-self-center">
        <h3>Seleccionar</h3><p>Indique qué acción desea realizar.</p>
      </div></div>

      <md-divider></md-divider>
      <md-button class="md-raised md-default" @click="informacion()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">Información</md-button>
      <br>
      <md-button class="md-raised md-default" @click="triage()" style="width: 100%; height: 10em; color:orange; margin-left: 0;">¿tiene algún síntoma?</md-button>
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
    },
    created() {
      this.$store.dispatch('variables/loadVariables');
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

</style>
