const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor',
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    class: async (parent, args) => {
      return await Class.findById(args.id).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
  },
  // Define the functions that will fulfill the mutations

  Mutation: {
     //🔑 We enter the arguments that we wanted passed in as a parameter in the same order as we defined the fields in the mutation type:
    addSchool: async (parent, { name, location, studentCount }) => {
      // Create and return the new School object
      //🔑 We call create() on the imported School model to write to our MongoDB database:
      return await School.create({ name, location, studentCount });
    },
  },
};

// ☝️ How would we build this?

// 🙋 A mutation is way to write data using GraphQL. We use the mutation type to define the entry point to the data to be written and a mutation resolver to provide the functionality to write the data to our database.

// C.R.U.D
// You R(ead) with Query
// You C.U.D with Mutation 
module.exports = resolvers;
