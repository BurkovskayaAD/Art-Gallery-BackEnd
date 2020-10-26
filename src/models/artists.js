import mongoose from 'mongoose';
const {Schema} = mongoose;

const artistSchema = new Schema({
    Name: String,
    Photo: String,
    Occupation: String,
    LastModified: String
});

const Artists = mongoose.model('Artists', artistSchema);

module.exports = Artists;