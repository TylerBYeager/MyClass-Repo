//Because we are using Mongoose, we must import the model to write data to MongoDB. It looks like we have imported the Class model successfully.
//When your mutation is not working as expected, a great place to look is the resolver.
const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    class: async (parent, args) => {
      return await Class.findById(args.id);
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
  Mutation: {
    addSchool: async (parent, { name, location, studentCount }) => {
      return await School.create({ name, location, studentCount });
    },
    //We also need to make sure that our arguments are passed to the resolver. It looks like this is working too:
    updateClass: async (parent, { id, building }) => {
      // Find and update the matching class using the destructured args
      //🔑 To write the data, we call the .findOneAndUpdate() method on the imported Class model and pass in the specific information needed to find the class by id and update the building:
      return await Class.findOneAndUpdate(
        { _id: id }, 
        { building },
        // Return the newly updated object instead of the original
        //🔑 By default, the object returned will not be the one updated. To return the new object, we set new to be true. Adding this line will fix the bug in our resolver:
        { new: true }
      );
    }
  }
};

module.exports = resolvers;
