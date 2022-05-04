const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    //Note: methods like bulkCreate do not emit individual hooks by default - only the bulk hooks. However, if you want individual hooks to be emitted as well, you can pass the { individualHooks: true } option to the query call.
    individualHooks: true,
    //You must set returning: true option to tell Sequelize to return the object. 
    //in this case we do nothing with the return value
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
