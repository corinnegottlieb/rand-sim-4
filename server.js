( async function () {
    require( 'dotenv' ).config()

    const express = require( 'express' )
    const bodyParser = require( 'body-parser' )
    const photosRouter = require( './routes/photos' )
    const app = express()
    const PORT = process.env.SERVER_PORT || 3000
    const mongoose = require( 'mongoose' )

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

    app.use( bodyParser.json() )
    app.use( bodyParser.urlencoded( { extended: false } ) )

    app.get( '/health', ( req, res ) => res.json( { UP: true } ) )

    app.use( '/photos', photosRouter )

    app.listen( PORT, () => console.log( `Server is running on port ${ PORT }` ) )

    module.exports = app
} )()


