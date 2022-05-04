const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    # Define a query with an ID parameter to return a single Class object
    class(id: ID!): Class
  }
`;

//The ID! is important here. The ID specifies the type of data that must be returned. 
//The exclamation point ! means that the data is required. 
//Because we want our resolver function to search by ID for a particular class object, if that data is not provided, the search will not work.

module.exports = typeDefs;
