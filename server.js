const express = require("express");
const explress_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();
const schema = buildSchema(`
    type Query{
        message:String
    }
`);

const root = {
  message: () => "hello word"
};

app.use(
  "/graphql",
  explress_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(3000, () => console.log("corriendo express con graphql"));
