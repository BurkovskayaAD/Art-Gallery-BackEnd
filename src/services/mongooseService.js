class MongooseService {
  constructor(Model) {
    this.model = Model;
  }

  create(body) {
    return this.model.create(body);
  }

  delete(id) {
    return this.model.findByIdAndDelete(id).exec();
  }

  find(query) {
    return this.model.find(query).exec();
  }

  findOne(query) {
    return this.model.findOne(query).exec();
  }

  findLatest(query) {
    return this.model.find(query).limit(10).sort({_id:-1}).exec();
  }

  findById(id) {
    return this.model.findById(id).exec();
  }

  findByIdPhoto(id) {
    return this.model.findById(id).exec();
  }
}

module.exports = MongooseService;
