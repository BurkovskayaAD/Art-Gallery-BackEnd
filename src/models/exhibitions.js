import mongoose from 'mongoose';
const {Schema} = mongoose;

const exhibitionSchema = new Schema({
    Name: String,
    Date: String,
    About: String,
    Poster: String,
    LastModified: String
});

const Exhibitions = mongoose.model('Exhibitions', exhibitionSchema);

module.exports = Exhibitions;
