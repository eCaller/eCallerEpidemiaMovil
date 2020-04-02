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
    <div class="marginGlobal">
      <div class="centrado" v-show='isHidden'>
        <img class="col-" src="../assets/padres_y_cuidadores/01-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden1'>
        <img class="col-" src="../assets/padres_y_cuidadores/03-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden2'>
        <img class="col-" src="../assets/padres_y_cuidadores/04-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden3'>
        <img class="col-" src="../assets/padres_y_cuidadores/06-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden4'>
        <img class="col-" src="../assets/padres_y_cuidadores/07-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden5'>
        <img class="col-" src="../assets/padres_y_cuidadores/09-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden6'>
        <img class="col-" src="../assets/padres_y_cuidadores/11-padres_y_cuidadores.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden7'>
        <img class="col-" src="../assets/padres_y_cuidadores/12-padres_y_cuidadores.jpg"><br>
      </div>
    </div>
  <div>
    <div class="centrado">
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden1}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden2}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden3}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden4}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden5}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden6}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin2">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden7}" :icon="['fa', 'circle']"/>
      </md-button>
    </div>
    <div class="marginGlobal">
      <md-button class="md-raised botonFull" @click="comprobarEstado()">Continuar</md-button>
    </div>
  </div>
  </md-content>
  </div>
</template>

<script>
export default {
  name: 'padrescuidadores',
    data: () => ({
      isHidden: true,
      isHidden1: false,
      isHidden2: false,
      isHidden3: false,
      isHidden4: false,
      isHidden5: false,
      isHidden6: false,
      isHidden7: false,
    }),
    methods: {
      continuar() {
        this.$router.push("/comportamiento_social");
      },
      comprobarEstado(){
        if(this.isHidden){
          this.isHidden=!this.isHidden
          this.isHidden1=!this.isHidden1
        }else if(this.isHidden1){
          this.isHidden1=!this.isHidden1
          this.isHidden2=!this.isHidden2
        }else if(this.isHidden2){
          this.isHidden2=!this.isHidden2
          this.isHidden3=!this.isHidden3
        }else if(this.isHidden3){
          this.isHidden3=!this.isHidden3
          this.isHidden4=!this.isHidden4
        }else if(this.isHidden4){
          this.isHidden4=!this.isHidden4
          this.isHidden5=!this.isHidden5
        }else if(this.isHidden5){
          this.isHidden5=!this.isHidden5
          this.isHidden6=!this.isHidden6
        }else if(this.isHidden6){
          this.isHidden6=!this.isHidden6
          this.isHidden7=!this.isHidden7
        }else if(this.isHidden7){
          this.isHidden7=!this.isHidden7
          this.isHidden=!this.isHidden
        }
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
.botonFull{
  width: 100%;
   margin: 0 auto;
  padding: 0px;
  background-color:#FCCA75 !important;
}
.centrado{
  text-align: center;
}
.iconoSize1{
  font-size: 8px !important;
}
.sinMargin2{
  margin:-10px;
}
.orange{
  color:#ffa500 !important;
}
.iconoFoto{
  font-size: 8px;
  color:gray;
}
</style>
