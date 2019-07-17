const UnsplashApiService = require('../lib/unsplash-api-service')

class PhotosController {
    constructor() {
        this.unsplashApiService = new UnsplashApiService()
    }

    async fetchPhotosFromUnsplashApi( request, response ) {
        const photos = await this.unsplashApiService.fetchPhotosFromUnsplashApi()

        response.send( photos )
    }
}

module.exports = new PhotosController()
