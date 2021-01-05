const artistTemplate = require("./artistsRoute");
const exhibitionTemplate = require("./exhibitionsRoute");
const paintingTemplate = require("./paintingsRoute");
const userTemplate = require("./usersRoute");

const routes = app => {
  app.use( ( req, res, next ) => {
    //может ли ответ сервера быть доступен коду,
    //отправляющему запрос с данного источника
    //* разрешает запросы из любых источников
    res.setHeader("Access-Control-Allow-Origin", "*");
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
    res.removeHeader("X-Powered-By");
    next();
  } );

  app.use("/artists", artistTemplate);
  app.use("/exhibitions", exhibitionTemplate);
  app.use("/paintings", paintingTemplate);
  app.use("/users", userTemplate);

};

module.exports = routes;







