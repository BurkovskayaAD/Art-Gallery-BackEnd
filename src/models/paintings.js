const mongoose = require("mongoose");
const { Schema } = mongoose;

const paintingSchema = new Schema({
    name: String,
    picture: String,
    author: String,
    lastModified: { type: Date, default: Date.now },
}, {
    collection: "Paintings"
});

const Paintings = mongoose.model('Paintings', paintingSchema);

module.exports = Paintings;
