const express = require("express");
const UserService = require("../services/usersService");
const schema = require("../models/users");

const router = express.Router();

const userService = new UserService();

// router.get('/', function (req, res, next) {
//     res.render('index', {success: req.session.success, errors: req.session.errors});
//     req.session.errors = null;
// })
//
// router.post('/submit', function (req, res, next) {
//     const errors = req.validationErrors();
//     if (errors) {
//         req.session.errors = errors;
//         req.session.success = false;
//     } else {
//         req.session.success = true;
//     }
//     res.redirect('/');
// })

router.post("/", async (req, res) => {
    // const newUser = await userService.findUser({userEmail: req.body.email});
    // if (newUser.errorPresent){
    //     await userService.addUsers(req.body);
    //     res.status(500).json(newUser.error);
    // } else {
    //     res.status(201).json(newUser);
    // }
    const newUser = await userService.addUsers(req.body);
    if (newUser.errorPresent) {
        res.status(500).json(newUser.error);
    } else {
        res.status(201).json(newUser);
        // if (!req.session.key) req.session.key = req.sessionID
        //
        // req.session.key[req.sessionID].showAd = req.body.showAd
        // res.sendStatus(200)
    }
});

module.exports = router;