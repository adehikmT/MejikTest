const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  schema = new Schema({
    name: String,
  });

module.exports = mongoose.model("liquids", schema);
