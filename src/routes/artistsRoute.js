const express = require( 'express' );
const service = require('../services/artistsService')

const router = express.Router();

const artistService = new ArtistService();

router.get('/', (req, res) => {
    const artists = artistService.getArtists();
    res.send(artists);
});
router.get('/:artistsId', (req, res) => {
    const artists = artistService.getAristById();
    res.send(artists);
});
router.post('/', (req, res) => {
    const artists = artistService.addNewArtists();
    res.send(artists);
});

module.exports = router;
