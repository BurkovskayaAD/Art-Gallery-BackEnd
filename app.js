const config = require("./src/config");
const mongoose = require("mongoose");

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.Promise = global.Promise;

mongoose.connect(config.dbUrl, mongooseOptions)
  .then( () => {
    // logger.info( "Database connection successful" );
    const ExpressLoader = require("./src/loaders/express");
    new ExpressLoader();
  })
  .catch( (err) => {
    console.error(err);
    // logger.error( err );
  });
