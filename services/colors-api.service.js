require( 'dotenv' ).config()
const createHttpService = require( './http-service' )

class ColorsApiService {
    constructor() {
        this.httpService = createHttpService( process.env.COLORS_API_URL )
    }

    static mapColorsResponseToJson( colorsResponse ) {
        return {
            name: colorsResponse.name.value,
            hex: colorsResponse.hex.clean,
            rgb: {
                r: colorsResponse.rgb.r,
                g: colorsResponse.rgb.g,
                b: colorsResponse.rgb.b
            }
        }
    }

    async fetchColorInfo( color ) {
        const response = await this.httpService.get( 'id?hex=' + color )

        return ColorsApiService.mapColorsResponseToJson( response.data )
    }
}

module.exports = ColorsApiService
