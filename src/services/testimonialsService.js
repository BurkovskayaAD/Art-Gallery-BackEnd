const mongooseService = require("./mongooseService");
const testimonialsModel = require("../models/testimonials");

class TestimonialsService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(testimonialsModel);
    }

    async findTestimonials(query) {
        try {
            return await this.MongooseServiceInstance.find(query);
        } catch (err) {
            return {errorPresent: true, error: err};
        }
    }

    async addTestimonials(body) {
        try {
            return await this.MongooseServiceInstance.create(body);
        } catch (err) {
            return {errorPresent: true, error: err};
        }
    }
}

module.exports = TestimonialsService;