<template>
  <div class="page-container md-layout-column">
    <md-card-media style="background-color: white">
      <img src="../assets/logo.png" alt="SCF" style="width: auto; margin-left:10px; margin-top:10px; margin-bottom:10px;">
    </md-card-media>

      <md-content>
        <h3>Datos usuario</h3>
        <p>Para realizar un seguimiento de su caso necesitamos que nos indique la siguiente información</p>

        <div>
          <md-field>
            <label>Nombre y apellidos</label>
            <md-input v-model="caso.nombre" required maxlength="100"></md-input>
          </md-field>
          <md-field>
            <label>D.N.I.</label>
            <md-input v-model="caso.dni" required maxlength="10"></md-input>
          </md-field>
          <md-field>
            <label>Teléfono</label>
            <md-input v-model="caso.telefono" required maxlength="9"></md-input>
          </md-field>
          <md-field>
            <label>Email</label>
            <md-input v-model="caso.email" type="email" maxlength="100"></md-input>
          </md-field>
          <md-field>
            <label>Edad</label>
            <md-input v-model="caso.edad" type="number" maxlength="3"></md-input>
          </md-field>
          <md-field>
            <label>Dirección</label>
            <md-textarea v-model="caso.direccion" md-autogrow required maxlength="500"></md-textarea>
            <span class="md-helper-text">nombre, número, localidad, provincia</span>
          </md-field>
        </div>
        <br>
        <md-divider></md-divider>
        <br>
        <md-card-actions>
          <md-button class="md-raised md-default" @click="continuar()">Volver</md-button>
          <md-button class="md-raised md-primary" @click="enviar()">Enviar</md-button>
        </md-card-actions>
      </md-content>
    </div>
</template>

<script>
import Vuex from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'datosusuario',
  data: () => ({
    radio: false
  }),
  computed: {...mapGetters(['caso']),
  },
  methods: {
    enviar() {
      this.caso.fecha = new Date();
      this.$router.push("/resultadopositivo"); //TODO enviar los datos al ws
    },
    continuar() {
      this.$router.push("/triage");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
