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
import evitar_contagiar_otros from '@/components/evitar_contagiar_otros'
import viajar_con_seguridad from '@/components/viajar_con_seguridad'
import factores_riesgo from '@/components/factores_riesgo'
import embarazo from '@/components/embarazo'
import comportamiento_social from '@/components/comportamiento_social'
import general from '@/components/general'
import saludtrabajador from '@/components/saludtrabajador'
import padrescuidadores from '@/components/padrescuidadores'
import lideres_equipo from '@/components/lideres_equipo'
import cuarentena from '@/components/cuarentena'
import info_cartas from '@/components/info_cartas'
import mitos from '@/components/mitos'
import mascarillas from '@/components/mascarillas'
import lugar_trabajo from '@/components/lugar_trabajo'

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
    {path: '/protocolos', protocolos: 'protocolos', component: protocolos},
    {path: '/evitar_contagiar_otros', evitar_contagiar_otros: 'evitar_contagiar_otros', component: evitar_contagiar_otros},
    {path: '/viajar_con_seguridad', viajar_con_seguridad: 'viajar_con_seguridad', component: viajar_con_seguridad},
    {path: '/factores_riesgo', factores_riesgo: 'factores_riesgo', component: factores_riesgo},
    {path: '/embarazo', embarazo: 'embarazo', component: embarazo},
    {path: '/comportamiento_social', comportamiento_social: 'comportamiento_social', component: comportamiento_social},
    {path: '/general', general: 'general', component: general},
    {path: '/saludtrabajador', saludtrabajador: 'saludtrabajador', component: saludtrabajador},
    {path: '/padrescuidadores', padrescuidadores: 'padrescuidadores', component: padrescuidadores},
    {path: '/lideres_equipo', lideres_equipo: 'lideres_equipo', component: lideres_equipo},
    {path: '/cuarentena', cuarentena: 'cuarentena', component: cuarentena},
    {path: '/info_cartas', info_cartas: 'info_cartas', component: info_cartas},
    {path: '/mitos', mitos: 'mitos', component: mitos},
    {path: '/mascarillas', mascarillas: 'mascarillas', component: mascarillas},
    {path: '/lugar_trabajo', lugar_trabajo: 'lugar_trabajo', component: lugar_trabajo},
    //{path: '/servicio/:id', name:'servicio', component:servicio},
  ]
})
