const express = require("express");
// const bodyParser = require("body-parser");
const PaintingService = require("../services/paintingsService");
const schema = require("../models/paintings");

const router = express.Router();

const paintingService = new PaintingService();

router.get("/", async (req, res) => {
  const paintings = await paintingService.findPaintings({});
  if (paintings.errorPresent) {
    res.status(500).json(paintings.error);
  } else {
    res.status(200).json(paintings);
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

module.exports = router;
