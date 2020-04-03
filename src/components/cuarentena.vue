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
        <div class="centrado">
          <img class="col-" src="../assets/cuarentena/01-cuarentena.jpg"><br>
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
  name: 'cuarentena',
    data: () => ({
    }),
    methods: {
      continuar() {
        this.$router.push("/comportamiento_social");
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
