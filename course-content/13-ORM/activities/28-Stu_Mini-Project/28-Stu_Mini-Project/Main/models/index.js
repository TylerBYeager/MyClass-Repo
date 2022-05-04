const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');



// user.belongsToMany(pets, {
//   // Define the third table needed to store the foreign keys
//   //https://sequelize.org/master/manual/assocs.html#-code-foo-belongstomany-bar----through--baz-----code-
//   // 🔑 We associate locations and travellers to one another through trips, as follows:
//   through: {
//     model: user_pets,
//     //field referenced in the association must have a unique constraint placed on it. 
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   //call this whatever you link - related to how the data will be returned (which key)
//   as: 'my_little_darling'
// });

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  //https://sequelize.org/master/manual/assocs.html#-code-foo-belongstomany-bar----through--baz-----code-
  // 🔑 We associate locations and travellers to one another through trips, as follows:
  through: {
    model: Trip,
    //field referenced in the association must have a unique constraint placed on it. 
    unique: false
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    //field referenced in the association must have a unique constraint placed on it. 
    unique: false
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
