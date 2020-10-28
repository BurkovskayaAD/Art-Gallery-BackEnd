const mongooseService = require("./mongooseService");
const artistsModel = require("../models/artists");

class ArtistsService {
  constructor() {
    this.MongooseServiceInstance = new mongooseService(artistsModel);
  }

  async findArtists(query) {
    try {
      return await this.MongooseServiceInstance.find(query);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }

  async addArtists(body) {
    try {
      return await this.MongooseServiceInstance.create(body);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }
}

module.exports = ArtistsService;
