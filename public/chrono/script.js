const one_second = 1000
const one_minute = one_second * 60
const one_hour = one_minute * 60
const startDate = new Date()
const face = document.getElementById( 'lazy' )

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
const requestAnimationFrame = ( function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ) {
            window.setTimeout( callback, 1000 / 60 )
        }
}() )

tick()

function tick() {
    const now = new Date()
    const elapsed = now - startDate
    const parts = []

    parts[ 0 ] = '' + Math.floor( elapsed / one_hour )
    parts[ 1 ] = '' + Math.floor( ( elapsed % one_hour ) / one_minute )
    parts[ 2 ] = '' + Math.floor( ( ( elapsed % one_hour ) % one_minute ) / one_second )

    parts[ 0 ] = ( parts[ 0 ].length === 1 ) ? '0' + parts[ 0 ] : parts[ 0 ]
    parts[ 1 ] = ( parts[ 1 ].length === 1 ) ? '0' + parts[ 1 ] : parts[ 1 ]
    parts[ 2 ] = ( parts[ 2 ].length === 1 ) ? '0' + parts[ 2 ] : parts[ 2 ]

    face.innerText = parts.join( ':' )

    requestAnimationFrame( tick )
}
