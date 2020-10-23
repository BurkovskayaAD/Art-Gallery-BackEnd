// const bodyParser = require( "body-parser" );
const express = require( "express" );
const morgan = require( "morgan" );
const path = require( "path" );
const routes = require( "../routes" );
// const compression = require( "compression" );
const config = require( "../config" );

class ExpressLoader {
    constructor() {
        const app = express();

        //подавать статический контент
        app.use( express.static( path.join( __dirname, "uploads" ) ) );

        //передаем маршрутам
        routes( app );

    }

    get Server () {
        return this.server;
    }

}

module.exports = ExpressLoader;
