require( 'dotenv' ).config()

const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const photosRouter = require( './routes/photos' )
const app = express()
const port = process.env.SERVER_PORT

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( '/photos', photosRouter )

app.listen( port, () => console.log( `Running server on port ${ port }` ) )

module.exports = app
