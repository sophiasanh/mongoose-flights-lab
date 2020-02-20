var express = require('express')
var router = express.Router()
var ticketsCtrl = require('../controllers/tickets')

router.get('/', (req, res) => {
    res.redirect('/tickets');
  });

// router.get('/new', ticketsCtrl.new);
router.post('/:flightId', ticketsCtrl.create);
router.post('/:id/new', ticketsCtrl.new)

// router.put('/:id/update', ticketsCtrl.update);
router.delete('/:id/delete', ticketsCtrl.deleteTicket);

module.exports = router


  
