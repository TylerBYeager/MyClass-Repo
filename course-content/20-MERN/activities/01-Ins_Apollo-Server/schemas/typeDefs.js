// 🔑 We use typeDefs to define our schema and the types it contains.
// Most defined types are objects. 
// Each object holds a collection of fields that describes the data. 
//The Class object will have fields for an id, name, and building as well as the credit hours for the course:
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;
// We also have access to another type, Query. 
// Query types define the entry point of every GraphQL query, 
//and control what data can be accessed. The classes query type allows us to query an array of all the Class objects:


module.exports = typeDefs;
