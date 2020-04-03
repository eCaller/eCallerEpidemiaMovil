<template>
  <div id="app">
    <router-view/>
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
import Entorno from './entorno.js'

export default {
  name: 'App',
  mounted() {    
      let googleScript = document.createElement('script')
      googleScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key='+ Entorno.API_KEY +'&libraries=places')
      document.body.appendChild(googleScript)
  }
}
</script>

<style lang="scss">
@import '../static/css/app.css';
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(orange, 600),// The primary color of your application
  accent: md-get-palette-color(orange, 600),
  text-primary-on-primary:md-get-palette-color(white, 600)
));

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
