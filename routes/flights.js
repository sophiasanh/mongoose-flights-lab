const express = require('express');
const router = express.Router();
const flightsCtrl = require("../controllers/flights");


// router.get('/', (req, res) => {
//     res.redirect('/flights');
//   });

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id/show', flightsCtrl.show);

router.post('/', flightsCtrl.create);
router.post('/flights', flightsCtrl.create);

router.get('/:id/edit', flightsCtrl.edit);

router.put('/:id/update', flightsCtrl.update);
router.delete('/:id/delete', flightsCtrl.deleteFlight);



module.exports = router;
