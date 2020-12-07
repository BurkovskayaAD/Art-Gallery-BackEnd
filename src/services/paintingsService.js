const mongooseService = require("./mongooseService");
const paintingModel = require("../models/paintings");

class PaintingsService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(paintingModel);
    }

    async findPaintings(query) {
        try {
            return await this.MongooseServiceInstance.find(query);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    // async Pictures(query) {
    //     try {
    //         return await this.MongooseServiceInstance.find(query).limit(6);
    //     } catch (err) {
    //         return { errorPresent: true, error: err };
    //     }
    // }

    async addPaintings(body) {
        try {
            return await this.MongooseServiceInstance.create(body);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async findPaintingById(id) {
        try {
            return await this.MongooseServiceInstance.findById(id);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }

    async deletePaintingById(id) {
        try {
            return await this.MongooseServiceInstance.delete(id);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }
}

module.exports = PaintingsService;
