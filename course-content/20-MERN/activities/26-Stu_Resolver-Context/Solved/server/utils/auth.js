const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  // We want a logged in user to see the thoughts they created, but it looks like we have a bug and the user is receiving a message that they are not logged in.
  // 🔑 Let's start by taking a looking in our server's auth.js file. 
  // When a request comes, we need a method to check if a token exists, and if so, verify and decode it. 
  // It looks like we have an authMiddleware method in place to handle this functionality and return a data object that can be used by our resolver:
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
