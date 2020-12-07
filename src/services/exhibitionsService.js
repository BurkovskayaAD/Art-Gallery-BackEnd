const mongooseService = require("./mongooseService");
const exhibitionModel = require("../models/exhibitions");

class ExhibitionsService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(exhibitionModel);
    }

    async findExhibitions(query) {
        try {
            return await this.MongooseServiceInstance.find(query);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async findExhibitionPhoto(id){
        try {
            return await this.MongooseServiceInstance.findByIdPhoto(id);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async addExhibitions(body) {
        try {
            return await this.MongooseServiceInstance.create(body);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async findExhibitionById(id) {
        try {
            return await this.MongooseServiceInstance.findById(id);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async deleteExhibitionById(id) {
        try {
            return await this.MongooseServiceInstance.delete(id);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }
}

module.exports = ExhibitionsService;
