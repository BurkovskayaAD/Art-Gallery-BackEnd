const mongoose = require("mongoose");
const {Schema} = mongoose;

const exhibitionSchema = new Schema({
    name: String,
    dateStart: Date,
    dateEnd: Date,
    about: String,
    poster: String,
    lastModified: {type: Date, default: Date.now},
}, {
    collection: "Exhibitions"
});

const Exhibitions = mongoose.model('Exhibitions', exhibitionSchema);

module.exports = Exhibitions;
