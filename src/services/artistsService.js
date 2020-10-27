const mongooseService = require('./mongooseService');
const artistsModel = require('../models/artists');

class artistsService{
    constructor() {
        this.MongooseServiceInstance = new mongooseService(artistsModel);
    }

    async find ( ){
        try {
            const result = await this.MongooseServiceInstance.find();
            console.log(result);
            return {success: true, body: result};
        } catch (err) {
            return { success: false, error: err };
        }
    }
}

module.exports = artistsService;
