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
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
  }
`;
//type Class
// The Class object has an id, name, building, and creditHours field. In addition, the professor field is a queryable field that holds a singe Professor object:

//type Query
//The query type tells us what data we can access and the entry point to that data. 
//To access the array of Class objects, we use the classes entry point
module.exports = typeDefs;
