const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    console.log(locationData);//what did this look like? 
    //In computing, serialization or serialisation is the process of translating a data structure or object state into a format that can be stored or transmitted and reconstructed later.
    //Serialization is the process of turning an object in memory into a stream of bytes so you can do stuff like store it on disk or send it over the network.
    //http://mcranston18.github.io/how-does-sequelize-serialize-objects/
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    //So the Controller must serialize the data in the route to get rid of all of that extra information, before passing it to the templates in the View.
    //undecorated data values,
    const locations = locationData.map((location) => location.get({ plain: true }));
    //Deserialization is the reverse process: turning a stream of bytes into an object in memory.
    //The get syntax binds an object property to a function that will be called when that property is looked up. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
    //{ plain: true } => If key is given and a field or virtual getter is present for the key it will call that getter - else it will return the value for key.
    //If set to true, included instances will be returned as plain objects https://sequelize.org/master/class/lib/model.js~Model.html (https://sequelize.org/master/class/lib/model.js~Model.html)
    console.log("locations", locations);
    //express .json does a .toJSON under the hood on our behalf
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
    res.status(200).json(locationData);
    console.log()
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      // needs to match your alias set - 'location_travellers'
      include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a location
router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
