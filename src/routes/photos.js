import express from 'express'
import photosRestController from '../controllers/photos.rest-controller'

const router = express.Router()

router.get( '/search/:term', photosRestController.searchPhotos.bind( photosRestController ) )
router.get( '/:photo_id', photosRestController.fetchPhotoInfo.bind( photosRestController ) )
router.get( '/random', photosRestController.fetchRandomPhoto.bind( photosRestController ) )

export default router
