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
    professors: async () => {
      // Populate the classes subdocument on every instance of Professor
      // A query using the professors entry point and call .find() on the Professor model we imported to populate the data:
      //🔑 Call the .populate() method to access the class data needed so we can query the array of Class objects. The data for both the professors and associated classes will be returned:
      return await Professor.find({}).populate('classes');
    }
  }
};

module.exports = resolvers;
