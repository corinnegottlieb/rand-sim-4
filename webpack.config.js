const path = require( 'path' )
const nodeExternals = require( 'webpack-node-externals' )

module.exports = {
    target: 'node',
    mode: 'production',
    entry: {
        app: [ './src/server.js' ]
    },
    output: {
        path: path.resolve( __dirname, './build' ),
        filename: 'server.js'
    },
    externals: [ nodeExternals() ],
}
