const sequelize = require('../config/connection');
const { Reader, LibraryCard } = require('../models');

const readerSeedData = require('./readerSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Reader.bulkCreate(readerSeedData, {
    //Note: methods like bulkCreate do not emit individual hooks by default - only the bulk hooks. However, if you want individual hooks to be emitted as well, you can pass the { individualHooks: true } option to the query call. However, this can drastically impact performance, depending on the number of records involved (since, among other things, all instances will be loaded into memory). Examples:
    //https://sequelize.org/master/manual/hooks.html
    individualHooks: true,
    //if true, append RETURNING <model columns> to get back all defined values; if an array of column names, append RETURNING <columns> to get back specific columns 
    returning: true,
  });

  for (const { id } of readers) {
    const newCard = await LibraryCard.create({
      reader_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
