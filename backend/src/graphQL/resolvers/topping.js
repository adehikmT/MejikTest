// require("../../config/connection");
const { Topping } = require("../../models");

var root = {
  toppings: async () => await Topping.find({}, (e) => console.log(e)),
  topping: async (args) => await Topping.findOne({ _id: args._id }),
  insertTopping: async (args) => await Topping.create({ name: args.data.name }),
  updateTopping: async (args) => {
    try {
      const result = await Topping.updateOne(
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
  deleteTopping: async (args) => {
    try {
      const result = await Topping.deleteOne({ _id: args._id });
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
