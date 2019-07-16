class UserController {
    handleSomeGetRequest( req, res ) {
        res.send( 'respond with a resource' )
    }
}

module.exports = new UserController()
