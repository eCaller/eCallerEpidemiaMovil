import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store/store.js';
import inicio from '@/components/inicio'
import denegar from '@/components/denegar'
import menu from '@/components/menu'
import informacion from '@/components/informacion'
import triage from '@/components/triage'
import resultado from '@/components/resultado'
import datosusuario from '@/components/datosusuario'
import resultadopositivo from '@/components/resultadopositivo'
import prevencion from '@/components/prevencion'
import protocolos from '@/components/protocolos'
import noticias from '@/components/noticias'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'inicio', component: inicio},
    {path: '/denegar', name: 'denegar', component: denegar},
    {path: '/menu', name: 'menu', component: menu},
    {path: '/informacion', name: 'informacion', component: informacion},
    {path: '/triage', name: 'triage', component: triage},
    {path: '/resultado', resultado: 'resultado', component: resultado},
    {path: '/datosusuario', datosusuario: 'datosusuario', component: datosusuario},
    {path: '/resultadopositivo', resultadopositivo: 'resultadopositivo', component: resultadopositivo},
    {path: '/prevencion', name: 'prevencion', component: prevencion},
    {path: '/protocolos', name: 'protocolos', component: protocolos},
    {path: '/noticias', name: 'noticias', component: noticias},
    //{path: '/servicio/:id', name:'servicio', component:servicio},
  ]
})
