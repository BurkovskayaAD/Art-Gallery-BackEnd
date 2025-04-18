const express = require("express");
const PaintingService = require("../services/paintingsService");
const schema = require("../models/paintings");

const router = express.Router();

const paintingService = new PaintingService();

router.get("/latest", async (req, res) => {
  const paintingsL = await paintingService.findPaintingsLatest({});
  if (paintingsL.errorPresent) {
    res.status(500).json(paintingsL.error);
  } else {
    res.status(200).json(paintingsL);
  }
});

router.get("/", async (req, res) => {
  const paintings = await paintingService.findPaintings({});
  if (paintings.errorPresent) {
    res.status(500).json(paintings.error);
  } else {
    res.status(200).json(paintings);
  }
});

router.get("/images/:paintingPhotoId", async (req, res) => {
  const paintingPicture = await paintingService.findPaintingPicture(
      req.params.paintingPhotoId
  );
  if (paintingPicture.errorPresent) {
    res.status(500).json(paintingPicture.error);
  } else {
    res.status(200).json(paintingPicture);
  }
});

router.get("/:paintingId", async (req, res) => {
  const painting = await paintingService.findPaintingById(
    req.params.paintingId
  );
  if (painting.errorPresent) {
    res.status(500).json(painting.error);
  } else {
    res.status(200).json(painting);
  }
});

router.post("/", async (req, res) => {
  const image = req.body.image;
  const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
  const path = ('public/images/') + req.body.picture;
  require("fs").writeFile(path, base64Data, 'base64', function(err) {
    console.log(err);
  });
  const newPainting = await paintingService.addPaintings(req.body);
  if (newPainting.errorPresent) {
    res.status(500).json(newPainting.error);
  } else {
    res.status(201).json({ id: newPainting._id });
  }
});

router.delete("/:paintingIdDelete", async (req, res) => {
  const paintingDelete = await paintingService.deletePaintingById(
    req.params.paintingIdDelete
  );
  if (paintingDelete.errorPresent) {
    res.status(500).json(paintingDelete.error);
  } else {
    res.status(200).json(paintingDelete);
  }
});

router.post('/:paintingEditId', async (req, res) => {
  if (req.body.image != null) {
    const image = req.body.image;
    const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
    const path = ('public/images/') + req.body.photo;
    require("fs").writeFile(path, base64Data, 'base64', function (err) {
      console.log(err);
    });
  }
  const paintingEdit = await paintingService.findByIdAndUpdate({"_id": req.params.paintingEditId} ,
      {$set: req.body});
  if (paintingEdit.errorPresent) {
    res.status(500).json(paintingEdit.error);
  } else {
    res.status(200).json(paintingEdit);
  }
});


module.exports = router;
