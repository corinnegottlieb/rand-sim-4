class RnDUsersCountdown {
    static SECOND = 1000
    static MINUTE = RnDUsersCountdown.SECOND * 60
    static HOUR = RnDUsersCountdown.MINUTE * 60
    static DAY = RnDUsersCountdown.HOUR * 24

    static THRESHOLD_NORMALIZED_RANGE = 7

    ms = 0
    hours = 0
    initialUsers = 0
    maxTimeMs = 0

    constructor( hours, initialUsers ) {
        this.hours = hours
        this.maxTimeMs = hours * RnDUsersCountdown.MINUTE * RnDUsersCountdown.SECOND / 10
        this.countDown = ( new Date() ).setHours( new Date().getHours() + hours )
        this.initialUsers = initialUsers

        console.log( this.maxTimeMs )
    }

    usersRemained( timePassedInMs ) {
        const MIN_TIME = 1000
        const NORMALIZED_TIME = RnDUsersCountdown.THRESHOLD_NORMALIZED_RANGE * ( ( timePassedInMs - MIN_TIME ) / ( this.maxTimeMs - MIN_TIME ) )

        return this.initialUsers * Math.exp( -1 * ( NORMALIZED_TIME / 5 ) )
    }

    start() {
        setInterval( () => {
            const now = new Date().getTime()
            const distance = this.countDown - now

            document.getElementById( 'hours' ).innerText = Math.floor( distance % RnDUsersCountdown.DAY / RnDUsersCountdown.HOUR )
            document.getElementById( 'minutes' ).innerText = Math.floor( distance % RnDUsersCountdown.HOUR / RnDUsersCountdown.MINUTE )
            document.getElementById( 'seconds' ).innerText = Math.floor( distance % RnDUsersCountdown.MINUTE / RnDUsersCountdown.SECOND )

            if ( distance < 0 ) {
                clearInterval( x )
            }

            this.ms += RnDUsersCountdown.SECOND

            if ( this.ms % 3 === 0 ) {
                console.log( 'Users:', parseInt( this.usersRemained( this.ms ) ) )
            }
        }, RnDUsersCountdown.SECOND )
    }
}

const counter = new RnDUsersCountdown( 3, 1000000 )

counter.start()
