const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: String,
    surname: String,
    telephone: String,
    email: String,
    password: String,
    lastModified: { type: Date, default: Date.now },
}, {
    collection: "Users"
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;