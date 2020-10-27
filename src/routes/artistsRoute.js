const express = require( 'express' );
const ArtistService = require('../services/artistsService')

const router = express.Router();

const artistService = new ArtistService();

router.get('/', (req, res) => {
    const artist = artistService.find();
    res.send(artist);
});
// router.get('/:artistsId', (req, res) => {
//     const artists = artistService.getAristById();
//     res.send(artists);
// });
router.post('/', (req, res) => {
    const artistId = artistService.addNewArtists();
    res.send(artistId);
});

module.exports = router;
