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
      <div class="row bloque-texto">
        <div class="col-sm-8 offset-sm-4 align-self-center">
          <span v-html="respuestaNegativo.valor"></span>
        </div>
      </div>      
      <div v-if="respuestaNegativo.valor === ''">
        Recuperando la respuesta...      
        <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
      </div>
      <md-card-actions>
        <md-button class="md-raised md-primary ancho-completo" @click="informacion()">Información sobre Covid-19</md-button>
      </md-card-actions>
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
import { mapGetters } from 'vuex';
export default {
  name: 'resultadonegativo',
    data: () => ({
      intervalo: null
    }),
    methods: {
      informacion() {
        this.$router.push("/info_cartas");
      },
      continuar() {        
        this.$router.push("/menu");
      },
      loadVariables() {
        if (this.respuestaNegativo.valor === '') {
          // Vamos a lanzar el fetch de las variales cada X tiempo
          this.intervalo = setInterval(() => {
            if (this.respuestaNegativo.valor === '') {
              this.$store.dispatch('variables/loadVariables');
            }
          }, 25000);
        }
      }
    },
    computed: {
      ...mapGetters({
        respuestaNegativo: 'variables/getRespuestaNegativo'
      })
    },
    created() {
      this.loadVariables();
    },
    beforeDestroy() {
      clearInterval(this.intervalo);
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
</style>
