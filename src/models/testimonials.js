const mongoose = require("mongoose");
const {Schema} = mongoose;

const testimonialsSchema = new Schema({
    name: String,
    email: String,
    testimonial: String,
    lastModified: {type: Date, default: Date.now},
}, {
    collection: "Testimonials"
});

const Testimonials = mongoose.model('Testimonials', testimonialsSchema);

module.exports = Testimonials;