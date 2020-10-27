class MongooseService{
    //создаем экземпляр класса МогусСервис??
    constructor(Model) {
        this.model = Model;
    }
    create ( body ) {
        return this.model.create( body );
    }
    count ( query ) {
        return this.model.count( query ).exec();
    }
    delete ( id ) {
        return this.model.findByIdAndDelete( id ).exec();
    }
    find () {
        return this.model.find().exec();
    }
}

module.exports = MongooseService;
