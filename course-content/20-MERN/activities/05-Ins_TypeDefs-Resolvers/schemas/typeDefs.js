const { gql } = require('apollo-server-express');
// 🔑 For our queries to work, we must define our types to provide access to the data that we will need.

// 🔑 Each object contains a collection of related fields that return a particular type of data. These fields determine what data can be accessed from the database and provide a shape to our data.

// The Professor object contains fields that will return data containing name, id, officeHours, officelocation, and studentScore data. These fields should match how the data in your database is structured:

//🔑 We also use fields to define relationships between objects.
// The Class object needs to access the information about a single related Professor object. We use a queryable field to retrieve a single Professor object. When the data from the Class object is queried, the data from the corresponding Professor object will also be available:

//The School object needs access to all of the Class objects. We use a queryable field to retrieve an array of all the Class objects:
const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    # Add a queryable field to retrieve an array of Class objects
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    # Add a queryable field to retrieve a single Professor object
    professor: Professor
  }

  # Define what can be queried for each professor
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
//🔑 To access our data, we must also define an entry point. 
//These entry points control the data that the query has access to. The professors entry point is used to access the array of all Professor objects. Likewise, the schools entry point controls the access to the array of all the School objects:


module.exports = typeDefs;
