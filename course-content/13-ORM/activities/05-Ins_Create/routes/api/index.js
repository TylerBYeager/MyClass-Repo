const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/books', bookRoutes);
// router.use('/cats', catRoutes);
// router.use('/people', peopleRoutes);


module.exports = router;
