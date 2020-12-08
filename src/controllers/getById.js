// const express = require('express');
// const Artists = require('../models/artists');
//
// module.exports = function (app){
//     const routes = express.Router();
//
//     routes.get('/artists', (req, res) =>
//         Artists.find().limit(6).exec((err, doc) => {
//             if (doc.length > 0){
//                 res.send({data:doc});
//             } else{
//                 res.send({succes: false, message:'No artists!'});
//             }
//         })
//     )
// }
