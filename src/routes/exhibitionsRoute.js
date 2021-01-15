const express = require("express");
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

router.get("/latest", async (req, res) => {
    const exhibitionsL = await exhibitionService.findExhibitionsLatest({});
    if (exhibitionsL.errorPresent) {
        res.status(500).json(exhibitionsL.error);
    } else {
        res.status(200).json(exhibitionsL);
    }
});

router.get('/images/:exhibitionPhotoId', async (req, res) => {
    const exhibitionPoster = await exhibitionService.findExhibitionPhoto(req.params.exhibitionPhotoId);
    if (exhibitionPoster.errorPresent) {
        res.status(500).json(exhibitionPoster.error);
    } else {
        res.status(200).json(exhibitionPoster.poster);
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
    const image = req.body.image;
    const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
    const path = ('public/images/') + req.body.poster;
    require("fs").writeFile(path, base64Data, 'base64', function(err) {
        console.log(err);
    });
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

router.post('/:exhibitionEditId', async (req, res) => {
    const exhibitionEdit = await exhibitionService.findByIdAndUpdate({"_id": req.params.exhibitionEditId} ,{$set: {name: req.body.name}}, {new: true,});
    if (exhibitionEdit.errorPresent) {
        res.status(500).json(exhibitionEdit.error);
    } else {
        res.status(200).json(exhibitionEdit);
    }
});


module.exports = router;
