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
        <img class="col-" src="../assets/viajar_con_seguridad/01-mantenerse_saludable.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden1'>
        <img class="col-" src="../assets/viajar_con_seguridad/02-mantenerse_saludable.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden2'>
        <img class="col-" src="../assets/viajar_con_seguridad/03-mantenerse_saludable.jpg"><br>
      </div>
      <div class="centrado" v-show='isHidden3'>
        <img class="col-" src="../assets/viajar_con_seguridad/04-mantenerse_saludable.jpg"><br>
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
        <md-button class="md-icon-button sinMargin">
          <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHidden3}" :icon="['fa', 'circle']"/>
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
/** 
 * Copyright 2020, Ingenia, S.A.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * @author jamartin@ingenia.es
 */
export default {
  name: 'viajar_con_seguridad',
    data: () => ({
      isHidden:true,
      isHidden1:false,
      isHidden2:false,
      isHidden3:false,
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
          this.isHidden3=!this.isHidden3
        }else if(this.isHidden3){
          this.isHidden3=!this.isHidden3
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
