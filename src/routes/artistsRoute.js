const express = require("express");
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
  const image = req.body.image;
  const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
  const path = ('public/images/') + req.body.photo;
  require("fs").writeFile(path, base64Data, 'base64', function(err) {
    console.log(err);
  });
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
  if (req.body.image != null) {
    const image = req.body.image;
    const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
    const path = ('public/images/') + req.body.photo;
    require("fs").writeFile(path, base64Data, 'base64', function (err) {
      console.log(err);
    });
  }
  const artistEdit = await artistService.findByIdAndUpdate({"_id": req.params.artistEditId} ,
      {$set: req.body});
  if (artistEdit.errorPresent) {
    res.status(500).json(artistEdit.error);
  } else {
    console.log(artistEdit);
    res.status(200).json(artistEdit);
  }
});

router.get("/search", async (req, res) => {
  const artistsSearch = await artistService.findArtistBySearch({}, req.body);
  console.log(req.body);
  if (artistsSearch.errorPresent) {
    res.status(500).json(artistsSearch.error);
  } else {
    res.status(200).json(artistsSearch);
  }
});



module.exports = router;
