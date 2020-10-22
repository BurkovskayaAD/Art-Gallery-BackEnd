const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

async function start(){
  try {
    await mongoose.connect('mongodb+srv://Hanna:1q2w3e4r@cluster0.d39nt.mongodb.net')
  }
  catch (e) {
      console.log(e);
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
