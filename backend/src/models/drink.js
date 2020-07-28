const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId,
  schema = new Schema({
    name: String,
    topping: Array,
    liquidId: ObjectId,
    options: String,
    imgUri: String,
  });

module.exports = mongoose.model("drinks", schema);
