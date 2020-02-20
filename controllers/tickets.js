const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const newTicket = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) console.log(err);
        //    return res.redirect('/flights');
        res.render('tickets/new', {
            title: 'New Ticket',
            flightId: req.params.id,
            flightNumber: flight.flightNumber
        });
    });
};


const create = (req, res) => {
    req.body.flight = req.params.flightId

    Flight.findById(req.params.flightId, (err, flight) => {
        if (err) console.log('error creating flight');
        const ticket = new Ticket(req.body);
        flight.ticket.push(ticket);
        flight.save();
        ticket.save((err) => {
            if (err) console.log(err);
                return res.redirect(`/flights/${req.params.flightId}/show`);
        });
    });
        // res.redirect(`/flights/${req.params.flightId}/show`);
};

const deleteTicket = (req, res) => {
    Ticket.findOneAndDelete({'_id': req.params.id},(err, deletedItem) =>{
 
    })
       res.redirect("/flights")
 };

module.exports = {
  new: newTicket,
  create,
  deleteTicket
}