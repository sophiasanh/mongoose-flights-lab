const Destination = require('../models/destination')
const Flight = require('../models/flight')

const index = (req, res) => {

}

const newDestination = (req, res) => {
    Flight.findById(req.params.flightId, (err, flight) => {
      Destination.create(req.body, (err, destination) => {
        if (err) console.log(err);
        flight.destinations.push(destination._id)
        flight.save(err => {
          res.redirect(`/flights/${flight._id}/show`)
        })
      });
    })
  }
  
  const create = (req, res) => {
    Destination.create(req.body, (err, destination) => {
      res.redirect('/destinations/new')
    })
  }

module.exports = {
    index,
    newDestination,    
    create,
}