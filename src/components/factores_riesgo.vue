<template lang="html">
  <md-content>
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
    <div class="marginGlobal">
      <div class="centrado" v-show='isHidden'>
        <img class="col-" src="../assets/factores_riesgo/01-consumo_tabaco.png"><br>
      </div>
      <div class="centrado" v-show='isHidden1'>
        <img class="col-" src="../assets/factores_riesgo/02-consumo_tabaco.png"><br>
      </div>
      <div class="centrado" v-show='isHidden2'>
        <img class="col-" src="../assets/factores_riesgo/03-consumo_tabaco.png"><br>
      </div>
    </div>
    <div>
      <div class="centrado">
        <md-button class="md-icon-button sinMargin">
          <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden}" :icon="['fa', 'circle']"/>
        </md-button>
        <md-button class="md-icon-button sinMargin">
          <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden1}" :icon="['fa', 'circle']"/>
        </md-button>
        <md-button class="md-icon-button sinMargin">
          <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden2}" :icon="['fa', 'circle']"/>
        </md-button>
      </div>

      <div class="marginGlobal">
        <md-button class="md-raised botonFull" @click="comprobarEstado()">Continuar</md-button>
      </div>
    </div>
  </md-content>
</template>

<script>
export default {
  name: 'factores_riesgo',
    data: () => ({
      isHidden:true,
      isHidden1:false,
      isHidden2:false,
    }),
    methods: {
      continuar() {
        this.$router.push("/info_cartas");
      },comprobarEstado(){
        if(this.isHidden){
          this.isHidden=!this.isHidden
          this.isHidden1=!this.isHidden1
        }else if(this.isHidden1){
          this.isHidden1=!this.isHidden1
          this.isHidden2=!this.isHidden2
        }else if(this.isHidden2){
          this.isHidden2=!this.isHidden2
          this.isHidden=!this.isHidden
        }
      }

    }
}
</script>

<style lang="css">

.botonFull{
  width: 100%;
   margin: 0 auto;
  padding: 0px;
  background-color:#FCCA75 !important;
}
.centrado{
  text-align: center;
}
.iconoSize{
  font-size: 10px !important;
}
.sinMargin{
  margin:0px;
}
.orange{
  color:#ffa500 !important;
}
.iconoFoto{
  font-size: 8px;
  color:gray;
}
</style>
