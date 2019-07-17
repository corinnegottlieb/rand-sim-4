require( 'dotenv' ).config()
const createHttpService = require( '../lib/http-service' )

class UnsplashApiService {
    constructor() {
        this.httpService = createHttpService( process.env.UNSPLASH_API_URL, { 'Authorization': 'Client-ID ' + process.env.UNSPLASH_API_CLIENT_ID } )
    }

    static convertResponseTagsIntoArray( tags ) {
        return tags.map( tag => tag.title )
    }

    mapUnsplashResponseToJson( unsplashResponse ) {
        const items = unsplashResponse.results

        return items.map( item => {
            return {
                id: item.id,
                width: item.width,
                height: item.height,
                color: item.color,
                description: item.description,
                url: item.urls.regular,
                tags: UnsplashApiService.convertResponseTagsIntoArray( item.tags )
            }
        } )
    }

    async fetchPhotosFromUnsplashApi( request, response ) {
        const photos = await this.httpService.get( '/search/photos?query=sunset' )

        return this.mapUnsplashResponseToJson( photos.data )
    }
}

module.exports = UnsplashApiService
