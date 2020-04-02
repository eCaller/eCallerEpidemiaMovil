<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
