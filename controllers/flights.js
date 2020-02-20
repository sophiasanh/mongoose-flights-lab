const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const Destination = require('../models/destination');

const index = (req, res) => {
  Flight.find({}, (err, flight) => {
    if (err) console.log(err);
    res.render('flights/index', {
      title: 'All Flights',
      flights: flight
    });
  });
};


const show = (req, res) => {
  Flight.findById(req.params.id)
    .populate('ticket')
    .populate('destinations') 
    .exec((err, flight) => {
      Ticket.find({ _id: { $nin: flight._id } }).exec((err, tickets) => {
        res.render('flights/show', {
        title: 'Flight Detail',
        flight, tickets,
        });
      });
    });
}

const newFlight = (req, res) => {
  res.render('flights/new', {
    title: 'New Flight Detail'
  });
};


const create = (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') {
      delete req.body[key]
  }};
  const flight = new Flight(req.body);
  const destination = new Destination({
    airport: req.body.airport // <-- take data from new.ejs
  });
  flight.destinations.push(destination)
  flight.save (err => {
    if (err) console.log(err);
    return res.redirect("/flights");
  });
};

const edit = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    res.render('flights/edit', { 
    title: "flight Edit",
    flight,
    id:(req.params.id) 
  });
});
}

const update = (req, res) => {
  const flight = new Flight(req.body);
    flight.save (err => {
      if (err) return res.redirect
      ("flights/update"); {
    res.redirect("/flights")
  }});
}

const deleteFlight = (req, res) => {
   Flight.findOneAndDelete({'_id': req.params.id},(err, deletedItem) =>{

   })
      res.redirect("/flights")
};

module.exports = {
  index,
  show,
  create,
  new: newFlight,
  edit,
  update,
  deleteFlight
};