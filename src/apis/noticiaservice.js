import axios from "axios";

export default {
    getExample() {
        return new Promise((resolve, reject) => {
            axios.get('https://192.168.1.6:8443/noticias')
                .then((respuesta) => {
                    resolve(respuesta);
                })
                .catch((error) => {
                    reject({data: []})
                });
        });
    }
}