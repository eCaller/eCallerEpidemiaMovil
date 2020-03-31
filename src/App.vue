<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
