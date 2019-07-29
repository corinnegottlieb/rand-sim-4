// import express from 'express'
import photosRestController from '../controllers/photos.rest-controller'

const router = express.Router()

router.get( '/search/:term', photosRestController.searchPhotos )
router.get( '/:photo_id', photosRestController.fetchPhotoInfo.bind( photosRestController ) )

export default router
