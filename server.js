const express = require("express");
const expressGraphQL = require("express-graphql"); // glue layer between express and graphgl
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(5500, function() {
  console.log("Example app listening on port 5500!");
});
