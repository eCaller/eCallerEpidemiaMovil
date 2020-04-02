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
      <div v-if="respuestaPositivo.valor === ''">
        Recuperando la respuesta...      
        <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
      </div>
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
      <md-card-actions v-if="faltanDatos" style="justify-content: center; font-size: 12px; color: red;">
          <span>* Falta información por rellenar</span>
      </md-card-actions>
      <md-card-actions v-if="respuestaFormulario.mensaje !== ''">
          <span v-html="respuestaFormulario.mensaje" style="text-align: justify;"></span>
      </md-card-actions>
      <md-card-actions>
        <md-button v-if="respuestaFormulario.tipo === ''" 
                  class="md-raised md-primary ancho-completo" :disabled="enviando" @click="enviar()">Enviar</md-button>
        <md-button v-if="respuestaFormulario.tipo === 'Correcto'" class="md-raised md-primary ancho-completo" @click="informacion()">Información</md-button>
      </md-card-actions>
      <md-card-actions v-if="respuestaFormulario.tipo !== ''" >
        <md-button v-if="respuestaFormulario.tipo === 'Error'" class="md-raised md-primary ancho-completo" @click="continuar()">Inicio</md-button>
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
    direccion: '',
    enviando: false,
    respuestaFormulario: {
      tipo: '',
      mensaje: ''
    },
    mostrarInformacion: true,
    mostrarInicio: true,
    faltanDatos: false,
    intervalo: null
  }),
  computed: {...mapGetters({
      caso: 'caso/getCaso',
      respuestaPositivo: 'variables/getRespuestaPositivo',
      preguntas: 'triage/getTriage'
    }),
  },
  created() {
    if (this.respuestaPositivo.valor === '') {
      this.loadVariables();
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalo);
  },
  mounted() {
    this.$store.dispatch('caso/casoNuevo');
  },
  methods: {
    comprobarCamposObligatorios() {
      let isOk = true;
      if (this.caso.nombre == null || this.caso.nombre == '') {
        isOk = false;
      } else if (this.caso.dni == null || this.caso.dni == '') {
        isOk = false;
      } else if (this.caso.telefono == null || this.caso.telefono == '') {
        isOk = false;
      } else if (this.caso.direccion == null || this.caso.direccion == '') {
        isOk = false;
      }
      return isOk;
    },
    enviar() {
      if (this.comprobarCamposObligatorios()) {
        this.faltanDatos = false;
        this.caso.fecha = new Date();
        this.enviando = true;
        this.$store.dispatch('caso/enviarCaso', this.preguntas)
        .then((response) => {
          this.respuestaFormulario.tipo = 'Correcto';
          this.respuestaFormulario.mensaje= 'Se ha enviado correctamente el formulario, en breve nos pondremos en contacto con usted. ' +
          'Si quiere leer información sobre el <strong>COVID-19</strong>, pulse en Información.'
          this.mostrarInformacion = true;
          console.log('Caso enviado con exito.')
        })
        .catch((error) => {
          this.enviando = false;        
          this.respuestaFormulario.tipo = 'Error';
          this.respuestaFormulario.mensaje= 'Se ha producido un error al procesar su formulario. Por favor, inténtelo de nuevo pasado un tiempo';
          this.mostrarInicio = true;
          console.log('Ha fallado el envío del caso')
        });       
      } else {
        this.faltanDatos = true;
      }
    },
    continuar() {
      this.$router.push("/menu");
    },
    informacion() {
      this.$router.push("/info_cartas")
    },
    getAddressData(direccion, direccionConMasDatos) {
      this.caso.direccion = direccionConMasDatos.formatted_address;
      this.caso.lat = direccion.latitude;
      this.caso.lng = direccion.longitude;
      this.direccion = direccion;
    },    
    loadVariables() {
      if (this.respuestaPositivo.valor === '') {
        // Vamos a lanzar el fetch de las variales cada X tiempo
        this.intervalo = setInterval(() => {
          if (this.respuestaPositivo.valor === '') {
            this.$store.dispatch('variables/loadVariables');
          }
        }, 25000);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .buscador-direccion {
    width: 100%;
    border: 0px;
    outline: none;
  }
</style>
