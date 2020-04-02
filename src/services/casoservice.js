import axios from "axios";
import Entorno from '../entorno';

export default {
    enviarCaso(caso, preguntas) {
        return new Promise((resolve, reject) => {
            try {                    
                axios.post('https://'+Entorno.WS_HOST+':8443/caso', {
                    'caso':caso,
                    'preguntas': preguntas
                })
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            reject('');
                        }                    
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al crear el caso: ', error);
                        reject('')
                    });                
            } catch (error) {
                console.log('Ha ocurrido un error antes de crear el caso: ', error);
                reject('')
            }
        });
    }
}