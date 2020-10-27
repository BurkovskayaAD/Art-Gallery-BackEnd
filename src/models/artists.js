// import mongoose from 'mongoose';
const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  photo: String,
  occupation: String,
  lastModified: { type: Date, default: Date.now },
}, {
  collection: "Artists"
});

const Artists = mongoose.model("Artist", artistSchema);

module.exports = Artists;
