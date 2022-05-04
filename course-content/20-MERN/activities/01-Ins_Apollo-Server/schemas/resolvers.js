const { Class } = require('../models');

//🔑 A resolver is a function that's responsible for populating the data that has been defined by our typeDefs.
//🔑 To write a resolver, we use the name of a defined entry point and then assign the action that will be used to fetch the data:
const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
