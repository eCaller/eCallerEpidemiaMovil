v-show<template lang="html">
  <div class="page-container md-layout-column" v-if="servicio">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Servicio</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <menuLateral></menuLateral>
      </md-drawer>

      <md-content style="margin:0px;padding:0px; height:auto">
        <div class="viewport">
          <md-toolbar :md-elevation="1" style="display:block;">
            <span class="md-title" style="margin: 50px 0px;">{{servicio.descripcion}}</span><br>
            <span class="md-subhead">{{tipoLabel(servicio.tipo)}}</span>
          </md-toolbar>

          <div class="phone-viewport" :style="'height:' + windowHeight + 'px'">


            <div id="tab-home" v-show="activeVal==='s1'">

                <md-steppers md-alternative class="hidden-head pad">
                  <md-step v-for="parada in servicio.paradas" :key="parada.id" :id="'' + parada.id" :md-description="parada.tipo==='R'?'Recogida':'Entrega'" >
                    <md-list class="md-double-line pad">
                      <md-subheader :style="'color: ' + (parada.tipo==='R'?'green':'red')">{{parada.tipo==='R'?'Recogida':'Entrega'}}</md-subheader>

                      <md-list-item>
                        <md-icon class="md-primary">directions</md-icon>

                        <div class="md-list-item-text">
                          <span>{{parada.direccion.calle}}</span>
                          <span>Dirección</span>
                        </div>
                      </md-list-item>

                      <md-list-item>
                        <md-icon class="md-primary">access_time</md-icon>

                        <div class="md-list-item-text">
                          <span>{{parada.hora}}</span>
                          <span>Hora</span>
                        </div>

                      </md-list-item>

                      <md-list-item v-for="pasajero in parada.pasajeros" :key="pasajero.id">
                        <md-icon class="md-primary">person</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasajero.nombre + ' ' + pasajero.apellidos}}</span>
                          <span>Pasajero</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                          <md-icon class="md-primary">search</md-icon>
                        </md-button>
                      </md-list-item>

                    </md-list>

                    <md-button class="md-raised md-accent" style='width:100%;margin:0px;height:60px'>Realizado</md-button>

                    <md-field>
                      <label>Observaciones</label>
                      <md-textarea></md-textarea>
                      <md-icon>description</md-icon>
                    </md-field>

                  </md-step>

                </md-steppers>

                <md-list>
                  <md-divider></md-divider>

                  <md-list-item>
                    <md-button class="md-raised" style='width:100%;height:50px'>Cancelar servicio</md-button>
                  </md-list-item>
                  <md-list-item>
                    <md-button class="md-raised md-primary" style='width:100%;height:50px'>Finalizar servicio</md-button>
                  </md-list-item>
                </md-list>

                <div>&nbsp;</div>
              </div>







              <div id="tab-pages" v-show="activeVal==='s2'">
                <div style="padding: 8px;" >
                  <gmap-map ref="mapa"
                        :center="center"
                        :zoom="11"
                        style="width: 100%; height: 520px"
                        :options="mapOptions"
                    >
                    </gmap-map>
                  </div>
              </div>





              <div id="tab-posts" v-show="activeVal==='s3'">
                <md-steppers md-vertical md-alternative md-dynamic-height class="pad">

                  <md-step v-for="pasaj in servicio.pasajeros" :key="pasaj.id" :id="'' + pasaj.id" :md-label="pasaj.nombre + ' ' + pasaj.apellidos" exact  :md-description="pasaj.telefono" class="pad">
                    <md-list class="md-double-line pad">

                      <md-list-item class="mar">
                        <md-icon class="md-primary pad">person</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasaj.nombre + ' ' + pasaj.apellidos}}</span>
                          <span>Nombre</span>
                        </div>
                      </md-list-item>

                      <md-list-item class="md-inset pad">
                        <div class="md-list-item-text">
                          <span>{{pasaj.edad}}</span>
                          <span>Edad</span>
                        </div>
                      </md-list-item>

                      <md-list-item class="md-inset pad">
                        <div class="md-list-item-text">
                          <span>{{pasaj.observaciones}}</span>
                          <span>Observaciones</span>
                        </div>
                      </md-list-item>

                      <md-divider></md-divider>
                      <md-subheader class="pad">Teléfonos</md-subheader>

                      <md-list-item class="pad">
                        <md-icon class="md-primary">phone</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasaj.telefono}}</span>
                          <span>teléfono</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                          <md-icon>phone_forwarded</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item class="pad">
                        <md-icon class="md-primary">settings_phone</md-icon>
                        <div class="md-list-item-text">
                          <span>{{pasaj.telefonoalt}}</span>
                          <span>Teléfono alternativo</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                          <md-icon>phone_forwarded</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item class="pad">
                        <md-icon class="md-primary">import_contacts</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasaj.email}}</span>
                          <span>Otras formas de contacto</span>
                        </div>
                      </md-list-item>

                      <md-divider v-if="pasaj.anombre!==null"></md-divider>
                      <md-subheader class="pad" v-if="pasaj.anombre!==null">Acompañante</md-subheader>

                      <md-list-item class="pad" v-if="pasaj.anombre!==null">
                        <md-icon class="md-primary">supervisor_account</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasaj.anombre + ' ' + pasaj.aapellidos}}</span>
                          <span>Nombre</span>
                        </div>
                      </md-list-item>

                      <md-list-item class="pad" v-if="pasaj.anombre!==null">
                        <div class="md-list-item-text">
                          <span>{{getParentesco(pasaj.aperentesco)}}</span>
                          <span>Parentesco</span>
                        </div>
                      </md-list-item>

                      <md-list-item class="pad" v-if="pasaj.anombre!==null">
                        <md-icon class="md-primary">phone</md-icon>

                        <div class="md-list-item-text">
                          <span>{{pasaj.atelefono}}</span>
                          <span>teléfono</span>
                        </div>

                        <md-button class="md-icon-button md-list-action" v-if="pasaj.anombre!==null">
                          <md-icon>phone_forwarded</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item class="pad" v-if="pasaj.anombre!==null">
                        <md-icon class="md-primary">settings_phone</md-icon>
                        <div class="md-list-item-text">
                          <span>{{pasaj.atelefonoalt}}</span>
                          <span>Teléfono alternativo</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                          <md-icon>phone_forwarded</md-icon>
                        </md-button>
                      </md-list-item>

                    </md-list>
                  </md-step>

                </md-steppers>

              </div>


              <div id="tab-equ" v-show="activeVal==='s4'">
                <div style="padding: 8px;" >
                  <md-card style="margin-left: 0x; margin-right: 0x; margin-top: 19px" v-for="equip in servicio.equipamiento" :key="equip.id">
                    <md-list class="md-double-line">
                      <md-list-item>
                        <md-icon class="md-primary">build</md-icon>

                        <div class="md-list-item-text">
                          <span>{{equip.nombre}}</span>
                          <span class="md-subhead">{{equip.descripcion}}</span>
                        </div>
                      </md-list-item>
                    </md-list>
                  </md-card>
                </div>
              </div>

              <div id="tab-alert" v-show="activeVal==='s5'">
                <div style="padding: 8px;" >
                </div>
              </div>

              <div id="tab-mens" v-show="activeVal==='s6'">
                <div style="padding: 8px;" >
                </div>
              </div>


          </div>


          <md-bottom-bar md-type="shift" >
            <md-bottom-bar-item exact md-icon="directions" md-label="Paradas" id="s1" @click="activeVal='s1'"></md-bottom-bar-item>
            <md-bottom-bar-item md-icon="map"  md-label="Trayecto" id="s2" @click="activamapa()"></md-bottom-bar-item>
            <md-bottom-bar-item md-icon="person" md-label="Pasajeros" id="s3" @click="activeVal='s3'"></md-bottom-bar-item>
            <md-bottom-bar-item md-icon="work_outline" md-label="Equipo" id="s4" @click="activeVal='s4'"></md-bottom-bar-item>
            <md-bottom-bar-item md-icon="warning" md-label="Alertas" id="s5" @click="activeVal='s5'"></md-bottom-bar-item>
            <md-bottom-bar-item md-icon="message" md-label="Mensajes" id="s6" @click="activeVal='s6'"></md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </md-content>
    </div>



    <div class="page-container md-layout-column" v-else>
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Servicio</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <menuLateral></menuLateral>
      </md-drawer>

      <md-content style="margin:0px;padding:0px; height:auto">
        <div class="viewport">
            Servicio no encontrado
        </div>
      </md-content>
    </div>
  </template>

  <script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import menuLateral from './menuLateral.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'Servicio',
    components: {
      menuLateral
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    computed: {
      ...mapGetters(['servicio'])
    },
    data: () => ({
      showNavigation: false,
      activeVal: 's1',
      windowHeight: 0,

      mapOptions: {fullscreenControl: false},

      center: {lat: 36.724933, lng: -4.471145},
    }),
    methods: {
      //google maps API's direction service
      calculateAndDisplayRoute: function (directionsService, directionsDisplay, start, destination, waypts) {
        directionsService.route({
          origin: start,
          destination: destination,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            console.log(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      },

      getDirection: function() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.$refs.mapa.$mapObject);

        let waypts = [];
        let inicio = null;
        let fin = null;
        if (this.servicio.paradas) {
          let i=0;
          for (i=0;i<this.servicio.paradas.length;i++) {
            if (i===0) {
              inicio = new google.maps.LatLng(this.servicio.paradas[i].direccion.lat, this.servicio.paradas[i].direccion.lng);
            } else if (i===this.servicio.paradas.length-1) {
              fin = new google.maps.LatLng(this.servicio.paradas[i].direccion.lat, this.servicio.paradas[i].direccion.lng);
            }

            waypts.push({
              location: new google.maps.LatLng(this.servicio.paradas[i].direccion.lat, this.servicio.paradas[i].direccion.lng),
              stopover: false
            });
          };
        } else {
          inicio = new google.maps.LatLng(this.servicio.direccioninicio.lat, this.servicio.direccioninicio.lng);
          fin = new google.maps.LatLng(this.servicio.direccionfin.lat, this.servicio.direccionfin.lng);
        }

        if (inicio && fin) {
          this.calculateAndDisplayRoute(directionsService, directionsDisplay, inicio, fin, waypts);
        }
      },


      tipoLabel(value) {
        let ret = "";
        if (value) {
          if (value==="PT") {
            ret="Puntual";
          } else if (value==="PR") {
            ret="Programado";
          }
        }
        return ret;
      },


      getParentesco(value) {
        let ret = "";
        if (value) {
          if (value==="H") {
            ret="Hermano";
          } else if (value==="P") {
            ret="Padre";
          } else if (value==="M") {
            ret="Madre";
          }
        }
        return ret;
      },

      activamapa() {
        this.activeVal='s2';
        this.getDirection();
      },

      handleResize() {
        this.windowHeight = window.innerHeight-168;
      },
    },


  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
    .hidden-head /deep/ .md-steppers-navigation {
      box-shadow: none;
    }
    .pad {
      padding: 0px;
      padding-left: 0px;
    }
    .mad {
      margin-left: 3px;
    }

    .md-icon-label {
      font-size: 9px !important;
    }

    .phone-viewport {
      //width: 322px;
      //height: 99%;
      //display: inline;
      //align-items: flex-end;
      overflow: auto;
    }
  </style>
