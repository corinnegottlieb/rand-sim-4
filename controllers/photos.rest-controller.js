const UnsplashApiService = require( '../services/unsplash-api-service' )
const ColorsApiService = require( '../services/colors-api-service' )

class PhotosRestController {
    constructor() {
        this.unsplashApiService = new UnsplashApiService()
        this.colorsApiService = new ColorsApiService()
    }

    async searchPhotos( request, response ) {
        const photos = await this.fetchPhotosFromUnsplashApi( request.params.term )

        const canOrderBy = [ 'likes', 'resolution' ]

        if ( request.query.orderBy ) {
            const orderBy = request.query.orderBy

            if ( !canOrderBy.includes( orderBy ) ) {
                response.status( 422 )
                response.json( { error: 'Can not order by ' + orderBy } )

                return
            }

            if ( orderBy === 'likes' ) {
                photos.sort( ( a, b ) => a.likes > b.likes )
            } else if ( orderBy === 'resolution' ) {
                photos.sort( ( a, b ) => a.width * a.height > b.width * b.height )
            }
        }

        response.send( photos.reverse() )
    }

    /*
     * Make the function make all the calls to the Colors API in parallel
     */
    async fetchPhotosFromUnsplashApi( term ) {
        const photos = await this.unsplashApiService.fetchPhotosFromUnsplashApi( term )

        const promises = []

        for ( const photoItem of photos ) {
            promises.push( this.fetchColor( photoItem.color ) )
        }

        const results = await Promise.all( promises )

        for ( let i = 0; i < photos.length; i++ ) {
            photos[ i ].color = results[ i ]
        }

        return photos
    }

    async fetchColor( color ) {
        const hex = PhotosRestController.removeHashFromHexCode( color )

        return await this.colorsApiService.fetchColorInfo( hex )
    }

    static removeHashFromHexCode( color ) {
        return color.replace( '#', '' )
    }
}

module.exports = new PhotosRestController()
