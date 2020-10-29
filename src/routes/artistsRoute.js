const express = require("express");
// const bodyParser = require("body-parser");
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

router.get('/:artistId', async (req, res) => {
  const artist = await artistService.findArtistById(req.params.artistId);
  if (artist.errorPresent) {
    res.status(500).json(artist.error);
  } else {
    res.status(200).json(artist);
  }
});

router.post("/", async (req, res) => {
  const newArtist = await artistService.addArtists(req.body);
  if (newArtist.errorPresent) {
    res.status(500).json(newArtist.error);
  } else {
    res.status(201).json({ id: newArtist._id });
  }
});

router.delete('/:artistIdDelete', async (req, res) => {
  const artistDelete = await artistService.deleteArtistById(req.params.artistIdDelete);
  if (artistDelete.errorPresent) {
    res.status(500).json(artistDelete.error);
  } else {
    res.status(200).json(artistDelete);
  }
});

module.exports = router;
