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
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import {store} from './store/store.js';
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGoogleAutocomplete from 'vue-google-autocomplete';

library.add(faAngleLeft);
library.add(faCircle);
library.add(faAngleRight);
library.add(faAngleDown);
library.add(faVirus);
library.add(faThermometer);

Vue.use(VueMaterial);
Vue.component('vue-google-autocomplete', VueGoogleAutocomplete);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})

/**
 * Aquí vamos a manejar la navegación del movil con el bóton. Cada vez que
 * se pulse el botón, simplemente subiremos un nivel en la jerarquía de rutas
 */
document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown(evento) {  
  // Path de la ruta
  let current_route = vue.$options.router.currentRoute.path;

  // Vamos a corregir ahora los niveles y si el path actual
  // tiene un padre que no sea exit, se cargará esa ruta. Cuando
  // sea exit, se cerrará la aplicación
  let padre = '';
  for (let nivel of niveles) {
    if (nivel.hijos.includes(current_route)) {
      padre = nivel.padre;
      break;
    }
  }
  
  if (padre === 'exit') {
    navigator.notification.confirm(
      '¿Está seguro de cerrar la aplicación?', 
      (respuesta) => {
        if (respuesta == 2) {        
          // Cerramos la app
          navigator.app.exitApp();
        }
      },
      'Saliendo de la aplicación',
      ['No', 'Si']);
  } else {        
    vue.$options.router.push(padre);
  }
}
// Hijos de comportamiento_social
const niveles = [
  {
    padre: '/comportamiento_social',
    hijos: [
      '/general', 
      '/saludtrabajador', 
      '/padrescuidadores', 
      '/lideres_equipo', 
      '/cuarentena'
    ]
  },
  {
    padre: '/info_cartas',
    hijos: [
      '/evitar_contagiar_otros',
      '/viajar_con_seguridad',
      '/factores_riesgo',
      '/embarazo',
      '/comportamiento_social',
      '/mitos',
      '/mascarillas',
      '/lugar_trabajo',
      '/informacion'
    ]
  },
  {
    padre: 'menu',
    hijos: [
      '/info_cartas',
      '/triage',
      '/resultado',
      '/datosusuario'
    ]
  },
  {
    padre: 'exit',
    hijos: [
      '/inicio',
      '/menu'
    ]
  }
]