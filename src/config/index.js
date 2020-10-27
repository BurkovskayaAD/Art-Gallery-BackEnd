let config = {
    dbUrl: process.env.DBURL || "mongodb+srv://Hanna:1q2w3e4r@cluster0.d39nt.mongodb.net/Art-Gallery",
    port: process.env.PORT || 3010,
    env: process.env.NODE_ENV || "development"
};

module.exports = config;
