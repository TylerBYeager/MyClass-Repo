//🙋 To integrate GraphQL in our MERN apps, we must connect a GraphQL schema to our Express.js server. 
//We do this by adding an Apollo Server to our existing service layer and importing our schema.

const express = require('express');
//🔑 Apollo Server is a library that we use with an existing Express.js server. 
// We require the apollo-server-express dependency and import the ApolloServer class:
const { ApolloServer } = require('apollo-server-express');


const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


//We import the schemas directory. GraphQL relies on a schema bundle that includes two parts: the typeDefs, which defines the schema, and resolvers, or functions, that are responsible for populating data for a single field in the schema:
//The ApolloServer class instance takes both typeDefs and resolvers as parameters:

const { typeDefs, resolvers } = require('./schemas');
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//We call the .appleMiddleware() method to integrate Express.js with the Apollo Server 
//and connect the schema. This will enable our app to use GraphQL:
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
