// To respond to a query, we must also write a function that determines how the data for each field is populated when we make a query.
// 🔑 Because we are using Mongoose, we must import our models. These models create and read data from the MongoDB database:
const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      //We can also write a resolver that populates the data of a queryable field.

      //🔑 The .populate() method allows us to reference documents in other MongoDB collections easily. We use .populate(), to fetch data for queryable field professor:
      return await Class.find({}).populate('professor');
    },
    //🔑 When we write a query using the professors entry point, we call .find() on the Professor model that we imported to return all the data contained in the model instance, or document. 
    //This populates the fields:
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;
