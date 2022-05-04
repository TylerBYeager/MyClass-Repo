const { gql } = require('apollo-server-express');

//🔑 The Professor object contains a queryable field that returns an array of Class objects:
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
    # Add a field that will return an array of Class instances
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
  }
`;

//🔑 To access the array of Professor objects, we use the professors entry point:

module.exports = typeDefs;
