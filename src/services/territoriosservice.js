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
import axios from "axios";
import endpoints from '../store/endpoints';

export default {
    getMunicipios() {
        return new Promise((resolve, reject) => {
            try {                    
                axios.get(endpoints.state.territorios.urlMunicipios)
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            reject([]);
                        }                    
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al recuperar los municipios: ', error);
                        reject([])
                    });                
            } catch (error) {
                console.log('Ha ocurrido un error antes de recuperar los municipios: ', error);
                reject([])
            }
        });
    }
}