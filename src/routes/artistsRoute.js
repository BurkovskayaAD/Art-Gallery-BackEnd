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

router.get("/latest", async (req, res) => {
  const artistsL = await artistService.findArtistsLatest({});
  if (artistsL.errorPresent) {
    res.status(500).json(artistsL.error);
  } else {
    res.status(200).json(artistsL);
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

router.get('/images/:artistPhotoId', async (req, res) => {
  const artistPhoto = await artistService.findArtistPhoto(req.params.artistPhotoId);
  if (artistPhoto.errorPresent) {
    res.status(500).json(artistPhoto.error);
  } else {
    res.status(200).json(artistPhoto.photo);
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

router.post('/:artistEditId', async (req, res) => {
  const artistEdit = await artistService.updateOne({_id: req.params.id}, {$set: res.body});
  if (artistEdit.errorPresent) {
    res.status(500).json(artistEdit.error);
  } else {
    res.status(200).json(artistEdit);
  }
});



module.exports = router;

//{_id: req.params.artistEditId}, {$set: req.body}
