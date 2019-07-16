require( 'dotenv' ).config()

const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const usersRouter = require( './routes/users' )
const app = express()
const port = process.env.SERVER_PORT

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( '/users', usersRouter )

app.listen( port, () => console.log( `Running server on port ${ port }` ) )

module.exports = app
