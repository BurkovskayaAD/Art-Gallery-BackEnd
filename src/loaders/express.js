const bodyParser = require( "body-parser" );
const express = require( "express" );
const morgan = require( "morgan" );
const path = require( "path" );
const routes = require( "../routes" );
const compression = require( "compression" );
// const logger = require( "../services/Logger" );
const config = require( "../config" );

class ExpressLoader {
    constructor () {
        const app = express();
        console.log('1');
        app.use( ExpressLoader.errorHandler );
        console.log('2');
        app.use( express.static( path.join( __dirname, "uploads" ) ) );
        console.log('3');

        app.use( morgan( "dev" ) );
        app.use( compression() );
        app.use( bodyParser.urlencoded( {
            extended: false,
            limit: "20mb"
        } ) );
        app.use( bodyParser.json( { limit: "20mb" } ) );

        routes( app );


        this.server = app.listen( config.port, () => {
            // logger.info( `Express running, now listening on port ${config.port}` );
            console.log('Express running');
        } );
    }

    get Server () {
        return this.server;
    }

   static errorHandler ( error, req, res, next ) {
        let parsedError;

        try {
            if ( error && typeof error === "object" ) {
                parsedError = JSON.stringify( error );
            } else {
                parsedError = error;
            }
        } catch ( e ) {
            console.log(e);
            // logger.error( e );
        }

        // logger.error( parsedError );

        if ( res.headersSent ) {
            return next( error );
        }

        res.status( 400 ).json( {
            success: false,
            error
        } );
    }
}

module.exports = ExpressLoader;
