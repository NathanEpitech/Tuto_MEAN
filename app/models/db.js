const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pangolin = require("./pangolin.model")(mongoose);
db.user = require("./user")(mongoose);

module.exports = db;
