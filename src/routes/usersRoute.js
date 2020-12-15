const express = require("express");
const UserService = require("../services/usersService");
const schema = require("../models/artists");

const router = express.Router();

const artistService = new UserService();

module.exports = router;