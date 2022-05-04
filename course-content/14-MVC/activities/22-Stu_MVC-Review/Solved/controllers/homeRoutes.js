const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { 
      exclude: ['password'] 
      },
      order: [['name', 'ASC']],
    });

    // Serialize user data so templates can read it
    //We don’t get a javascript object representing your data back from our Query - 
    //We get a javascript object representing a model instance. 
    //We must extract the data from the Model Instance Object to work with the data stored in our DB. 
    const usersArr = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { users: usersArr });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
