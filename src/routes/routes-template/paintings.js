const express = require( 'express' );

let router = express.Router();

router.all( '/paintings', ( req, res ) => {
    res.send( { message : 'Hello from Paintings!' } );
} );

module.exports = router;