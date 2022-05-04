// we create a new instance of the ApolloServer class named server. 
// This instance takes both parts of the schema -- the typedefs and resolvers -- as parameters, 
// and allows us to use our schema to handle our data:

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
