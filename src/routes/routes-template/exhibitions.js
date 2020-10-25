const express = require( 'express' );

let router = express.Router();

router.all( '/exhibitions', ( req, res ) => {
    res.send( { message : 'Hello from Exhibitions!' } );
} );

module.exports = router;