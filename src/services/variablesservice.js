import axios from "axios";
import Entorno from '../entorno';

export default {
    getVariables() {
        return new Promise((resolve, reject) => {
            try {                    
                axios.get('https://'+Entorno.WS_HOST+':8443/variables')
                    .then((respuesta) => {
                        if (respuesta.status === 200) {
                            resolve(respuesta.data);
                        } else {
                            resolve([]);
                        }                    
                    })
                    .catch((error) => {
                        console.log('Ha ocurrido un error al recuperar las variables: ', error);
                        reject([])
                    });                
            } catch (error) {
                console.log('Ha ocurrido un error antes de recuperar las variables: ', error);
                reject([])
            }
        });
    }
}