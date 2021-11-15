require("dotenv").config();
const express = require('express');
const { graphql, buildSchema, GraphQLSchema} = require('graphql');
const { graphqlHTTP } = require('express-graphql')
const PORT = process.env.PORT || 3000;
const app = express();
const { queryType}  = require('./query');
const { mutationType } = require('./mutation');

const schema = new GraphQLSchema(
    { 
        query: queryType,
        mutation: mutationType 
    }
);

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true 
}));



app.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server started on :${PORT}`);
});