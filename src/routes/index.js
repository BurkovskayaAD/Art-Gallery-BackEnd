const template = require( "./routes-template" );

const routes = app => {
  app.use( ( req, res, next ) => {
    //может ли ответ сервера быть доступен коду,
    //отправляющему запрос с данного источника
    //* разрешает запросы из любых источников
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    //заголовок ответа,
    //который определяет метод или методы доступа к ресурсам
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    //какие заголовки HTTP могут использоваться во время фактического запроса
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type, x-access-token, authorization"
    );
    //удаляет заголовок HTTP из заголовков запроса
    res.removeHeader( "X-Powered-By" );
    next();
  } );

  app.use( "/", template );
};

module.exports = routes;








// const express = require('express');
// const router = express.Router();
//
// const mongoose = require('mongoose');
//
// async function start(){
//   try {
//     await mongoose.connect('mongodb+srv://Hanna:1q2w3e4r@cluster0.d39nt.mongodb.net')
//   }
//   catch (e) {
//       console.log(e);
//     }
// }
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
