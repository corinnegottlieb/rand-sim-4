import 'dotenv/config'
import createHttpService from './http.service'

class UnsplashApiService {
    constructor() {
        this.httpService = createHttpService( process.env.UNSPLASH_API_URL, { 'Authorization': 'Client-ID ' + process.env.UNSPLASH_API_CLIENT_ID } )
    }

    static convertResponseTagsIntoArray( tags ) {
        return tags.map( tag => tag.title )
    }

    static mapUnsplashSearchResponseToJson( unsplashSearchResponse ) {
        const items = unsplashSearchResponse.results

        return items.map( item => {
            return {
                id: item.id,
                width: item.width,
                height: item.height,
                color: item.color,
                description: item.description,
                url: item.urls.regular,
                likes: item.likes,
                tags: UnsplashApiService.convertResponseTagsIntoArray( item.tags )
            }
        } )
    }

    static mapUnsplashPhotoInfoResponse( unsplashPhotoInfoResponse ) {
        return unsplashPhotoInfoResponse
    }

    async fetchPhotosFromUnsplashApi( term ) {
        const photos = await this.httpService.get( '/search/photos?query=' + term )

        return UnsplashApiService.mapUnsplashSearchResponseToJson( photos.data )
    }

    async fetchPhotoInfo( photoId ) {
        const info = await this.httpService.get( '/photos/' + photoId )

        return UnsplashApiService.mapUnsplashPhotoInfoResponse( info )
    }
}

export default UnsplashApiService
