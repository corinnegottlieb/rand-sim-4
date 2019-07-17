const express = require( 'express' )
const router = express.Router()
const photosRestController = require('../controllers/photos-rest-controller')

router.get( '/:term', photosRestController.searchPhotos.bind( photosRestController ) )

module.exports = router
