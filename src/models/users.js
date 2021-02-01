const mongoose = require("mongoose");

// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');

const {Schema} = mongoose;

const usersSchema = new Schema({
    name: String,
    surname: String,
    telephone: String,
    email: String,
    password: String,
    lastModified: {type: Date, default: Date.now},
}, {
    collection: "Users"
});

//
// usersSchema.methods.setPassword = function(password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };
//
// usersSchema.methods.validatePassword = function(password) {
//     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.password === hash;
// };
//
// usersSchema.methods.generateJWT = function() {
//     const today = new Date();
//     const expirationDate = new Date(today);
//     expirationDate.setDate(today.getDate() + 60);
//
//     return jwt.sign({
//         email: this.email,
//         id: this._id,
//         exp: parseInt(expirationDate.getTime() / 1000, 10),
//     }, 'secret');
// }
//
// usersSchema.methods.toAuthJSON = function() {
//     return {
//         _id: this._id,
//         email: this.email,
//         token: this.generateJWT(),
//     };
// };


const Users = mongoose.model('Users', usersSchema);

module.exports = Users;