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
    <div>
      <h3 class="margenTitulo">INFORMACIÓN COVID-19</h3>
      <div class="caja">
        <md-button class="md-raised botonFull" @click="informacion()">Información Covid-19</md-button><br>
        <md-button class="md-raised botonFull" @click="mitos()">Mitos</md-button>
      </div>
    </div>

    <div>
      <h3 class="margenTitulo">PREVENCIÓN</h3>
      <div class="caja">
        
        <md-button class="md-raised botonFull" @click="cuidar_gente()">Cuida de la gente. Evita su contagio</md-button><br>
        <md-button class="md-raised botonFull" @click="viajar()">¿Cómo viajar con seguridad?</md-button><br>
        <md-button class="md-raised botonFull" @click="factores_riesgo()">Factores de riesgo</md-button><br>
        <md-button class="md-raised botonFull" @click="embarazo()">Embarazo</md-button>
      </div>
    </div>

    <div>
      <h3 class="margenTitulo">PROTOCOLOS</h3>
      <div class="caja">
        
        <md-button class="md-raised botonFull" @click="comportamiento_social()">Comportamiento social</md-button><br>
        <md-button class="md-raised botonFull" @click="lugar_trabajo()">Preparación del lugar de trabajo</md-button><br>
        <md-button class="md-raised botonFull" @click="mascarillas()">Uso de mascarillas</md-button>
      </div>
    </div>
  </md-content>
  </div>
</template>

<script>
export default {
  name: 'info_cartas',
    data: () => ({
    }),
    methods: {
      continuar() {
        this.$router.push("/menu");
      },
      informacion(){
        this.$router.push("/informacion");
      },
      cuidar_gente(){
        this.$router.push("/evitar_contagiar_otros");
      },
      viajar(){
        this.$router.push("/viajar_con_seguridad");
      },
      factores_riesgo(){
        this.$router.push("/factores_riesgo");
      },
      mascarillas(){
        this.$router.push("/mascarillas");
      },
      comportamiento_social(){
        this.$router.push("/comportamiento_social");
      },
      lugar_trabajo(){
        this.$router.push("/lugar_trabajo");
      },
      embarazo(){
        this.$router.push("/embarazo");
      },
      mitos(){
        this.$router.push("/mitos");
      }

    }
}
</script>

<style lang="css" scoped>

.md-content > .md-content {
  width: 100%;
  max-height: 23em;
  overflow: auto;
  vertical-align: top;
  justify-content: end !important;
}
.botonFull{
  width: 96%;
  margin: 6px;
  background-color:#FCCA75 !important;
  text-transform:none !important;
  justify-content: end !important;
}
.centrado{
  text-align: center;
}
.caja{
  border:1px solid;
  padding:3px;
  margin:7px;
}
.margenTitulo{
  margin-bottom: 3px;
  margin-left: 6px;
  margin-top: 25px;
}
.sinMargin{
  margin:0px;
}
</style>