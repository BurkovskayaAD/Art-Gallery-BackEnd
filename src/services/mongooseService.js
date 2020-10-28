class MongooseService {
  constructor(Model) {
    this.model = Model;
  }

  create(body) {
    return this.model.create(body);
  }

  count(query) {
    return this.model.count(query).exec();
  }

  delete(id) {
    return this.model.findByIdAndDelete(id).exec();
  }

  find(query) {
    return this.model.find(query).exec();
  }

  findById(id) {
    return this.model.findById(id).exec();
  }
}

module.exports = MongooseService;
