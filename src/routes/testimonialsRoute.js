const express = require("express");
const TestimonialService = require("../services/testimonialsService");
const schema = require("../models/testimonials");

const router = express.Router();

const testimonialService = new TestimonialService();

router.post("/", async (req, res) => {
    const newTestimonial = await testimonialService.addTestimonials(req.body);
    console.log(newTestimonial);
    if (newTestimonial.errorPresent) {
        res.status(500).json(newTestimonial.error);
    } else {
        res.status(201).json(newTestimonial);
    }
});

router.get("/", async (req, res) => {
    const testimonials = await testimonialService.findTestimonials({});
    if (testimonials.errorPresent) {
        res.status(500).json(testimonials.error);
    } else {
        res.status(200).json(testimonials);
    }
});



module.exports = router;