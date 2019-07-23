import 'dotenv/config'
import express from 'express'
import photosRouter from './routes/photos'
import mongoose from 'mongoose'

( async () => {
    const app = express()
    const PORT = process.env.SERVER_PORT || 3000

    const MONGO_URL = process.env.MONGO_DB_HOST + ':' + process.env.MONGO_DB_PORT + '/' + process.env.MONDO_DB_NAME

    const connection = await mongoose
        .connect( MONGO_URL, { useNewUrlParser: true } )
        .catch( err => console.error( 'Error connecting db:', err.message ) )

    if ( !connection ) {
        app.use( ( req, res ) => {
            res.status( 500 )
            res.json( { error: 'Server is unavailable at the moment' } )
        } )
    }

    app.get( '/health', ( req, res ) => res.json( { UP: true } ) )

    // app.use( express.static( path( __dirname, 'public' ) ) )

    app.use( ( req, res, next ) => {
        res.header( 'Access-Control-Allow-Origin', '*' )
        res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS' )
        res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With' )

        next()
    } )

    app.use( '/api/photos', photosRouter )

    app.listen( PORT, () => console.log( `Server is running on port ${ PORT }` ) )
} )()
