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

  async findArtistsLatest(query) {
    try {
      return await this.MongooseServiceInstance.findLatest(query);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }

  async findArtistPhoto(id){
    try {
      return await this.MongooseServiceInstance.findByIdPhoto(id);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }

  async findArtistById(id) {
    try {
      return await this.MongooseServiceInstance.findById(id);
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

  async deleteArtistById(id) {
    try {
      return await this.MongooseServiceInstance.delete(id);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }

  async findByIdAndUpdate(query, update, options) {
    try {
      return await this.MongooseServiceInstance.findByIdAndUpdate(query, update, options);
    } catch (err) {
      return { errorPresent: true, error: err };
    }
  }

}

module.exports = ArtistsService;
