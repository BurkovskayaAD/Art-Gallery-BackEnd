// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const {Schema} = mongoose;

const artistSchema = new Schema({
    Name: String,
    Photo: String,
    Occupation: String,
    LastModified: String
});

const Artists = mongoose.model('Artist', artistSchema);

module.exports = Artists;
