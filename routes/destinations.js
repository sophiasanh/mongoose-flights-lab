var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.get('/', destinationsCtrl.index);  
router.post('/:flightId/destinations', destinationsCtrl.newDestination);
  
  module.exports = router;