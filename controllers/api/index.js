// import other api routes and export them as one
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/newEvent', eventRoutes);
router.use('/comment', commentRoutes);

module.exports = router;