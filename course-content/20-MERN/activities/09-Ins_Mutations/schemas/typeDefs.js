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
    class(id: ID!): Class
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addSchool(name: String!, location: String!, studentCount: Int!): School
  }
`;

// 🔑 The mutation type is similar to the query type. However, instead of providing an entry point to read an object or objects, the mutation type provides an entry point to write an object or objects.

// 🔑 We create an entry point addSchool and set the object that it will write to to be a School object.

// 🔑 We also pass in arguments that define the fields that will be written. This information will be passed to the resolver.

//   type Mutation {
//     addSchool(name: String!, location: String!, studentCount: Int!): School
//   }

module.exports = typeDefs;
