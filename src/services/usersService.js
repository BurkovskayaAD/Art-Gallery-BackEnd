const mongooseService = require("./mongooseService");
const userModel = require("../models/users");

class UsersService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(userModel);
    }
}

module.exports = UsersService;