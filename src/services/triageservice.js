import axios from "axios";
import Variables from '../variables';

export default {
    getTriage() {
        return new Promise((resolve, reject) => {
            try {                    
                axios.get('https://'+Variables.WS_HOST+':8443/triage')
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            resolve([]);
                        }                    
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al recuperar el triage: ', error);
                        resolve([])
                    });                
            } catch (error) {
                console.log('Ha ocurrido un error antes de recuperar el triage: ', error);
                resolve([])
            }
        });
    },
    realizarTest(triage) {
        return new Promise((resolve, reject) => {
            try {                
                axios.post('https://'+Variables.WS_HOST+':8443/triage', triage, {
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al realizar el test: ', error);
                        resolve(false);
                    })                
            } catch (error) {
                console.log('Ha ocurrido un error antes de lanzar el test: ', error);
                resolve(false)
            }
        })
    }
}