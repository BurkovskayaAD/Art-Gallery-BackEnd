const mongooseService = require("./mongooseService");
const testimonialModel = require("../models/testimonials");

class TestimonialsService {
    constructor() {
        this.MongooseServiceInstance = new mongooseService(testimonialModel);
    }

    async addTestimonials(body) {
        try {
            return await this.MongooseServiceInstance.create(body);
        } catch (err) {
            return {errorPresent: true, error: err};
        }
    }

    async findTestimonials(query) {
        try {
            return await this.MongooseServiceInstance.find(query);
        } catch (err) {
            return { errorPresent: true, error: err };
        }
    }
}



module.exports = TestimonialsService;