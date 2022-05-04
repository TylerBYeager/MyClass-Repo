// While we can decode our token in the front end and attach it to a request as header, 
// we are still missing the key functionality needed to verify our token and decode it before it reaches our resolver. 
// To do that, we will have to return to our back-end code.

// We import the jsonwebtoken library in our server's auth.js file:
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      console.log("req.headers.authorization", req.headers.authorization);
      //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibWVvd21lb3dAbWVvdy5jb20iLCJuYW1lIjoiRmFybGV5IFdpdHRsZXMiLCJfaWQiOiI2MTlkZWZiMGY5ZmZjYzlkYmIyMDg2NjcifSwiaWF0IjoxNjM3NzQwNDY0LCJleHAiOjE2Mzc3NDc2NjR9.8NEsjeL0KRWT2BUwgbxkVamAY092T88C4AblVhgC3ls"
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      // 🔑 Next, we use the jsonwebtoken library's verify() method to check if our token is valid and return the payload data:
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    // We then return the req object and supply the request -- and the needed data -- to the resolver function:
    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
