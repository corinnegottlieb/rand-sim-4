const axios = require( 'axios' )

class HttpService {
    constructor( baseURL, headers = {} ) {
        this.axiosInstance = axios.default.create( {
            baseURL,
            timeout: 5000,
            headers
        } )
    }
}

module.exports = function ( baseURL, headers = {} ) {
    const service = new HttpService( baseURL, headers )

    return service.axiosInstance
}
