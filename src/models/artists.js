import mongoose from 'mongoose';
const {Schema} = mongoose;

const artistSchema = new Schema({
    Name: String,
    Photo: String,
    Occupation: String,
    LastModified: String
});

