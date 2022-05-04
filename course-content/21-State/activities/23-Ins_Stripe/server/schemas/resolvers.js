const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
// Notice the second set of parentheses after the import statement, which indicates that we invoking Stripe's JavaScript closure with the public API key passed in as an argument:
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // The method accepts args and context that will later be used to get the list of products that was passed to this method:
    checkout: async (parent, args, context) => {
      //Orginal URL 
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });

      // To store all of the items for a given order, we create a new empty array called line_items.
      const line_items = [];

      //  We await the results of the request for the products in the order:
      const { products } = await order.populate('products').execPopulate();

      // Then we loop through each of those products and create a new product object that will be used by Stripe. 
      // We call on the products.create() method to do this.
      for (let i = 0; i < products.length; i++) {
        // he products.create() method has a required property of name that we provide from the current product in the array
        // We also provide a few optional arguments, like the product description and the image property:
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        // Then we create a price for each product, by creating a new variable called price inside the loop.
        // We call on the Stripe prices.create() method to assign a price for an existing product. This method takes a required parameter of currency, a product perimeter, and unit_amount.
        // The unit_amount is in cents, so we multiply by 100:
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        // Toward the end of each iteration of the loop, we push a new object that contains the price and the quantity to the line_items array:
        // Now that we have all of the items ready to send off to Stripe in the line_items array, it is time to create the checkout session.
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      // 🔑 A checkout session represents the payment session and also tells Stripe the line items in the order, the cost of the items, and the payment options the user has.
      // To create a session object, we create a variable session and set its value to the response we get from the session.create() method.
      // When we invoke the session.create() method, we pass in an object that contains the payment type, the items in the order, and the callback URLs for a successful or cancelled payment:
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      // Once the session information has returned from the async call to the sessions API, we return an object that contains the session.id to reference the session in the front end:
      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
