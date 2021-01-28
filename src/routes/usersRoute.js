const express = require("express");
const UserService = require("../services/usersService");
const schema = require("../models/users");
const passwordHash = require('password-hash');

const router = express.Router();

const userService = new UserService();

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
    const pass = req.body.password;
    const hashedPassword = passwordHash.generate(pass);
    console.log(hashedPassword);
    req.body.password = hashedPassword;
    const newUser = await userService.addUsers(req.body);
    if (newUser.errorPresent) {
        res.status(500).json(newUser.error);
    } else {
        res.status(201).json(newUser);
    }
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// router.get("/check", async (req, res) => {
//     // const pass = req.body.password;
//     // const hashedPassword = passwordHash.generate(pass);
//     const userCheck = await userService.findUser(
//         // {email: req.body.email}
//     );
//     // console.log(hashedPassword);
//     if (userCheck.errorPresent) {
//         res.status(500).json(userCheck.error);
//     } else {
//         res.status(200);
//         console.log(userCheck);
//     }
// })

module.exports = router;