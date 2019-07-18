import express from 'express'
import photosRestController from '../controllers/photos.rest-controller'

const router = express.Router()

router.get( '/:term', photosRestController.searchPhotos.bind( photosRestController ) )

export default router
