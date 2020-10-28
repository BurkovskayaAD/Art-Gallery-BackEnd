const express = require("express");
const bodyParser = require("body-parser");
const ArtistService = require("../services/artistsService");
const schema = require("../models/artists");

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
//   console.log(req.params)
//
//     res.send(1);
// });

router.post("/", async (req, res) => {
  const newArtist = await artistService.addArtists(req.body);
  if (newArtist.errorPresent) {
    res.status(500).json(newArtist.error);
  } else {
    res.status(201).json({ id: newArtist._id });
  }
});

module.exports = router;
