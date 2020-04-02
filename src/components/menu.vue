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
      <div class="centrado marginCovid" @click="informacion()">
        <font-awesome-icon class="iconoPrincipalCovid " :icon="['fa', 'virus']"/>
        <h3>Información sobre Covid-19</h3>
      </div>
      <div class="centrado" @click="triage()">
        <font-awesome-icon class="iconoPrincipalCovid" :icon="['fa', 'thermometer']"/>
        <h3>¿Tienes algún síntoma?</h3>
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
        this.$router.push("/info_cartas");
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

.md-content > .md-content {
  width: 100%;
  max-height: 23em;
  overflow: auto;
  vertical-align: top;
  justify-content: end !important;
}
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
.marginGlobal{
  margin:6px;
}
.centrado{
  text-align: center;
}
.iconoPrincipalCovid{
  color:#FFA500;
  font-size: 80px;
}
.marginCovid{
  margin:10px;
  margin-bottom: 50px;
}
</style>
