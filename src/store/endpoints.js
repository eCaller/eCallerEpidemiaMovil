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
import VariablesService from '../services/variablesservice';
import Entorno from '../entorno';
const base = Entorno.WS_HOST + ':' + Entorno.WS_PORT + '/movil';

export default {
    namespaced: true,
    state: {
      caso: {
        url: base + '/caso'
      },
      triage: {
        url: base + '/triage',
        urlComprobarTriage: base + '/comprobarTriage',
      },
      variables: {
        url: base + '/variables',
      },
      territorios: {
        urlMunicipios: base + '/municipios'
      }
    }  
  }
  