import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import {store} from './store/store.js';
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGoogleAutocomplete from 'vue-google-autocomplete';

library.add(faAngleLeft);
Vue.use(VueMaterial);
Vue.component('vue-google-autocomplete', VueGoogleAutocomplete);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
