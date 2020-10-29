const express = require("express");
// const bodyParser = require("body-parser");
const ExhibitionService = require("../services/exhibitionsService");
const schema = require("../models/exhibitions");

const router = express.Router();

const exhibitionService = new ExhibitionService();

router.get("/", async (req, res) => {
    const exhibitions = await exhibitionService.findExhibitions({});
    if (exhibitions.errorPresent) {
        res.status(500).json(exhibitions.error);
    } else {
        res.status(200).json(exhibitions);
    }
});

router.get('/:exhibitionId', async (req, res) => {
    const exhibition = await exhibitionService.findExhibitionById(req.params.exhibitionId);
    if (exhibition.errorPresent) {
        res.status(500).json(exhibition.error);
    } else {
        res.status(200).json(exhibition);
    }
});

router.post("/", async (req, res) => {
    const newExhibition = await exhibitionService.addExhibitions(req.body);
    if (newExhibition.errorPresent) {
        res.status(500).json(newExhibition.error);
    } else {
        res.status(201).json({ id: newExhibition._id });
    }
});

router.delete('/:exhibitionIdDelete', async (req, res) => {
    const exhibitionDelete = await exhibitionService.deleteExhibitionById(req.params.exhibitionIdDelete);
    if (exhibitionDelete.errorPresent) {
        res.status(500).json(exhibitionDelete.error);
    } else {
        res.status(200).json(exhibitionDelete);
    }
});


module.exports = router;
