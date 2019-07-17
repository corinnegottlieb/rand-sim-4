const express = require( 'express' )
const router = express.Router()
const photosController = require('../controllers/photos-controller')

router.get( '/', photosController.fetchPhotosFromUnsplashApi.bind( photosController ) )

module.exports = router
