const { buildSchema } = require("graphql"),
  schema = buildSchema(`
   type Query {
    liquids:[LT]
    liquid(_id:String!):LT
    toppings:[LT]
    topping(_id:String!):LT
    drinks:[Drink]
    drinkSrc(key:String):Drink
    }

    type Mutation{
    insertLiquid(data:inputLT):LT
    updateLiquid(data:inputLT):Status
    deleteLiquid(_id:String!):Status

    insertTopping(data:inputLT):LT
    updateTopping(data:inputLT):Status
    deleteTopping(_id:String!):Status
    }

    type Status{
        status:Int,
        message:String
    }
    
    input inputLT{
        _id:String
        name:String!
    }

    type LT{
        _id:String
        name: String!
    }

    type Drink{
        _id:String
        name: String
        topping: [String]
        liquidId: String
        options: String
        imgUri: String
        liquid:[LT]
    }
`);
module.exports = schema;
