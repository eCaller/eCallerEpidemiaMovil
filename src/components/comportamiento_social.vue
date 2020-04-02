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
    <div class="caja">
      <md-button class="md-raised botonFull" @click="general()">Generales</md-button><br>
      <md-button class="md-raised botonFull" @click="saludtrabajador()">Salud del trabajador</md-button><br>
      <md-button class="md-raised botonFull" @click="padres()">Padres y cuidadores</md-button><br>
      <md-button class="md-raised botonFull" @click="lideres()">Lideres y equipos</md-button>
      <md-button class="md-raised botonFull" @click="cuarentena()">Cuarentena</md-button>
    </div>
  </md-content>
  </div>
</template>

<script>
export default {
  name: 'comportamiento_social',
    data: () => ({
    }),
    methods: {
      continuar() {
        this.$router.push("/info_cartas");
      },
      general() {
        this.$router.push("/general");
      },
      saludtrabajador() {
        this.$router.push("/saludtrabajador");
      },
      padres() {
        this.$router.push("/padrescuidadores");
      },
      lideres() {
        this.$router.push("/lideres_equipo");
      },
      cuarentena() {
        this.$router.push("/cuarentena");
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
}

.menu{
  background-color: #F0F0F0;
  position: relative;
  margin:-20px;
  margin-bottom: 5px;
}
.left{
    float: left;
}

.right{
    float: right;
    margin-right: 20px;
    margin-top:10px;
    margin-bottom: 5px;
}

.clearfix{
    clear: both;
}
.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.elevation-demo {
  display: flex;
  flex-wrap: wrap;
  align-self:stretch;
}
.general{
  width: 46%;
  text-align:center;
  margin:3px;
  align-self:auto;
  height: auto;
  word-wrap: break-word;
}
.primero{
  word-wrap: break-word;
  width: 93%;
  margin:3px;
  text-align:center;
}
.colorOrange{
  background-color: #FCCA75;
}
.orange{
  color:orange;
  font-size: 40px;
  margin-left: 30px;
}
.caja{
  padding:3px;
  margin:7px;
}
.botonFull{
  width: 100%;
  margin: 5px 0px;
  background-color:#FCCA75 !important;
  text-transform:none !important;
  justify-content: end !important;
}
.iconoSize1{
  font-size: 10px !important;
}
</style>
