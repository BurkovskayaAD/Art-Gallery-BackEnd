const mongooseService = require("./mongooseService");
const userModel = require("../models/users");

class UsersService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(userModel);
    }

    async addUsers(body) {
        try {
            return await this.MongooseServiceInstance.create(body);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async findUser(query){
        try {
            return await this.MongooseServiceInstance.findOne(query);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }
}

module.exports = UsersService;