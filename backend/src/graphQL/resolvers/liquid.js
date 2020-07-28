// require("../../config/connection");
const { Liquid } = require("../../models");

var root = {
  liquids: async () => await Liquid.find({}),
  liquid: async (args) => await Liquid.findOne({ _id: args._id }),
  insertLiquid: async (args) => await Liquid.create({ name: args.data.name }),
  updateLiquid: async (args) => {
    try {
      const result = await Liquid.updateOne(
        { _id: args.data._id },
        { name: args.data.name }
      );
      console.log(result.ok);
      let message;
      result.ok < 1
        ? (message = { error: "update vailed!" })
        : (message = "update success!");
      return { status: result.ok, message };
    } catch (err) {
      return { status: 0, err };
    }
  },
  deleteLiquid: async (args) => {
    try {
      const result = await Liquid.deleteOne({ _id: args._id });
      let message;
      result.ok < 1
        ? (message = "delete vailed!")
        : (message = "delete success!");
      return { status: result.ok, message };
    } catch (err) {
      return { status: 0, err };
    }
  },
};

module.exports = root;
