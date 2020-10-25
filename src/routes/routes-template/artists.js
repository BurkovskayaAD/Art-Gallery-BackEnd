const express = require( 'express' );

let router = express.Router();

router.all( '/artists', ( req, res ) => {
    res.send( { message : 'Hello from Artists!' } );
} );

module.exports = router;