const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  schema = new Schema({
    name: String,
    email: String,
    password: String,
    role: Number,
  });

module.exports = mongoose.model("users", schema);
