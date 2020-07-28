const { Drink, Liquid } = require("../../models"),
  mongoose = require("mongoose"),
  ObjectId = mongoose.Types.ObjectId;
Drink.createIndexes({ subject: "text" }, (err) => console.log(err));
var root = {
  drinks: async () => {
    const data = await Drink.aggregate([
      {
        $lookup: {
          from: "liquids",
          localField: "liquidId",
          foreignField: "_id",
          as: "liquid",
        },
      },
    ]);
    return data;
  },
  drinkSrc: async (args) => {
    const key = args.key;
    await Drink.aggregate([
      {
        $lookup: {
          from: "liquids",
          localField: "liquidId",
          foreignField: "_id",
          as: "liquid",
        },
      },
    ]);
  },
};

module.exports = root;
