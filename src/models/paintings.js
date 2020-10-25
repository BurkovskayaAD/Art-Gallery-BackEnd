import mongoose from 'mongoose';
const {Schema} = mongoose;

const paintingSchema = new Schema({
    Name: String,
    Picture: String,
    LastModified: String,
    Author: String
});

const Paintings = mongoose.model('Paintings', paintingSchema);

module.exports = Paintings;