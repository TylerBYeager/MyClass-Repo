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
    
    // Define a resolver to retrieve individual classes
    // When we use a query with arguments, we create an object that holds the information we need to pass to our resolver.
    // 🔑 To have access to that object, our resolver function uses args.
    // Because args is the second of the positional parameters that the resolver can take, we list args second so it keeps its place:
    // parent - only defined only if another resolver has called on this resolver (with parent)
    class: async (_parent, args) => {
      // Use the parameter to find the matching class in the collection
      return await Class.findById(args.id).populate('professor');
    },
 
    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
    
  }
};

// ☝️ How can we get more specific results using arguments?

// 🙋 Arguments allow us to query for more specific data by passing information from our query to our resolver. For example, we can search for a specific id by passing the information about that id to the resolver, which then can use that information to search the database for that specific object using that data.

// ☝️ Why use variables in our queries?

// 🙋 Variables allow us to make our queries more durable. For example, by using a variable when searching by id, we only had to change the value of the variable to search for another object. If we didn't have variables, we would have to write a whole new query.

module.exports = resolvers;
