<template>
  <div class="page-container md-layout-column">
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
      <span class="mensaje" v-html="respuestaPositivo.valor"></span>
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
          <label></label>
          <vue-google-autocomplete
            id="map"
            classname="buscador-direccion"
            placeholder="Dirección *"
            :enable-geolocation=true
            ref="direccion"
            v-on:placechanged="getAddressData">
          </vue-google-autocomplete>
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
    radio: false,
    direccion: ''
  }),
  computed: {...mapGetters({
      caso: 'caso/getCaso',
      respuestaPositivo: 'variables/getRespuestaPositivo',
      preguntas: 'triage/getTriage'
    }),
  },
  mounted() {
    this.$store.dispatch('caso/casoNuevo');
  },
  methods: {
    enviar() {
      this.caso.fecha = new Date();
      this.$store.dispatch('caso/enviarCaso', this.preguntas)
      .then((response) => {
        console.log('Caso enviado con exito.')
      })
      .catch((error) => {
        console.log('Ha fallado el envío del caso')
      });
      //this.$router.push("/resultadopositivo"); //TODO enviar los datos al ws
    },
    continuar() {
      this.$router.push("/menu");
    },
    getAddressData(direccion, direccionConMasDatos) {
      console.log(JSON.stringify(direccion));
      console.log(JSON.stringify(direccionConMasDatos));
      this.caso.direccion = direccionConMasDatos.formatted_address;
      this.caso.lat = direccion.latitude;
      this.caso.lng = direccion.longitude;
      this.direccion = direccion;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .md-layout-item {
    height: 80px;
  }
  .ancho-completo { 
    width: 100%;
    padding: 0px;
    margin: 10px 0px !important;
  }
  .cabecera {
    background-color: #ddd;
  }
  .flecha-hacia-atras {
    position: relative;
    padding-top: 20px;
    padding-left: 25px;
    font-size: 40px;
    color:orange;
  }
  .logo-cabecera {    
    position: relative;
    padding-top: 10px;
  }
  .buscador-direccion {
    width: 100%;
    border: 0px;
    outline: none;
  }
</style>
