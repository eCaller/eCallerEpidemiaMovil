import axios from "axios";
import Entorno from '../entorno';

export default {
    getTriage() {
        return new Promise((resolve, reject) => {
            try {                    
                axios.get('https://'+Entorno.WS_HOST+':8443/triage')
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            reject([]);
                        }                    
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al recuperar el triage: ', error);
                        reject([])
                    });                
            } catch (error) {
                console.log('Ha ocurrido un error antes de recuperar el triage: ', error);
                reject([])
            }
        });
    },
    comprobarTriage(triage) {
        return new Promise((resolve, reject) => {
            try {                
                axios.post('https://'+Entorno.WS_HOST+':8443/comprobarTriage', triage, {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            reject('No ha sido posible procesar el triage.')
                        }
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al realizar el test: ' + error);
                        reject('Ha ocurrido un error al realizar el test: ' + error);
                    })                
            } catch (error) {
                console.log('Ha ocurrido un error antes de lanzar el test: ', error);
                reject('Ha ocurrido un error antes de lanzar el test: ', error)
            }
        })
    }
}