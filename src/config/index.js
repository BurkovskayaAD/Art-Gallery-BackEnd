let config = {
  dbUrl:
    process.env.DBURL ||
    "mongodb+srv://admin:helloeverybody@cluster0.jovv7.mongodb.net/Art-Gallery",
  port: process.env.PORT || 3010,
  env: process.env.NODE_ENV || "development",
};

module.exports = config;
