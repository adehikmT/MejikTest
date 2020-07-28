// module
const path = require("path"),
  express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  { graphqlHTTP } = require("express-graphql"),
  // public path
  public = path.join(__dirname, "public"),
  // middleware
  { tokenCheck, roleCheck } = require("./src/middleware"),
  // graphQLSchema
  schema = require("./src/graphQL/schema"),
  // graphQLResolver
  { liquids, toppings, drinks } = require("./src/graphQL/resolvers");
// function and middleware express
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.static(public));
//listen port
app.listen(process.env.PORT || 5000, () =>
  console.log("Server is running on port 5000")
);
require("./src/config/connection");
// endpoin
const base = process.env.BASE_ENPOINT;
app.use(
  base + "drinks",
  graphqlHTTP({
    schema,
    rootValue: drinks,
    graphiql: true,
  })
);
app.use(
  base + "users",
  graphqlHTTP({
    schema,
    rootValue: { hallo: "hallo" },
    graphiql: true,
  })
);
app.use(
  base + "liquids",
  graphqlHTTP({
    schema,
    rootValue: liquids,
    graphiql: true,
  })
);
app.use(
  base + "toppings",
  graphqlHTTP({
    schema,
    rootValue: toppings,
    graphiql: true,
  })
);
