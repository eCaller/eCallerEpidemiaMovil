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
      <div class="centrado">
        <img class="col-" src="../assets/cuarentena/01-cuarentena.jpg"><br>
      </div>
    </div>
  </md-content>
</template>

<script>
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

<style lang="css">

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
