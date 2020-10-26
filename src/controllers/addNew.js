const express = require('express');
const bodyParser = require('body-parser');
const Artists = require('../models/artists');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    // response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){
    response.send("Главная страница");
});

app.listen(3000);




module.exports = function (app){
    const routes = express.Router();

    routes.get('/artists', (req, res) =>
        Artists.find().limit(6).exec((err, doc) => {
            if (doc.length > 0){
                res.send({data:doc});
            } else{
                res.send({succes: false, message:'No artists!'});
            }
        })
    )
}
