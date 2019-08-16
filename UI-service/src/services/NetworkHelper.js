import axios from 'axios'
import config from '../config'

class NetworkHelper {
    static requestHttp = (uri) => {
        return new Promise((resolve, reject) => {
            let url = config.serverURI + uri
            axios.get(url)
                .then(response => {
                    resolve(response)
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
}

export default NetworkHelper