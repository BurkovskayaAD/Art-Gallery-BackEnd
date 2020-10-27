const express = require("express");
const ArtistService = require("../services/artistsService");

const router = express.Router();

const artistService = new ArtistService();

router.get("/", async (req, res) => {
  const artists = await artistService.findArtists({});
  if (artists.errorPresent) {
    res.status(500).json(artists.error);
  } else {
    res.status(200).json(artists);
  }
});

// router.get('/:artistsId', (req, res) => {
//     const artists = artistService.getAristById();
//     res.send(artists);
// });

router.post("/", async (req, res) => {
});

module.exports = router;
