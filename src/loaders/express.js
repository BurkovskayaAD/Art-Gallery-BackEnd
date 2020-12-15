const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const path = require("path");
const routes = require("../routes");
const compression = require("compression");
const config = require("../config");
const expressValidator = require('express-validator');
const expressSession = require('express-session');


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

    app.use(expressValidator());
    app.use(cookieParser());
    app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

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
      // logger.error( e );
    }

    // logger.error( parsedError );

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
