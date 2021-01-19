const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const routes = require("../routes");
const compression = require("compression");
const config = require("../config");
require('src/models/Users');
require('src/config/passport')

class ExpressLoader {
  constructor() {
    const app = express();

    app.use(ExpressLoader.errorHandler);
    app.use(express.static("public"));
    app.use(morgan("dev"));
    app.use(compression());
    app.use(
      bodyParser.urlencoded({
        extended: false,
        limit: "20mb",
      })
    );
    app.use(bodyParser.json({ limit: "20mb" }));
    app.use(cookieParser());

    routes(app);

    this.server = app.listen(config.port, () => {
      console.log(`Express running, now listening on port ${config.port}`);
    });
  }

  get Server() {
    return this.server;
  }

  static errorHandler(error, req, res, next) {
    let parsedError;

    try {
      if (error && typeof error === "object") {
        parsedError = JSON.stringify(error);
      } else {
        parsedError = error;
      }
    } catch (e) {
      console.log(e);
    }


    if (res.headersSent) {
      return next(error);
    }

    res.status(400).json({
      success: false,
      error,
    });
  }
}

module.exports = ExpressLoader;
