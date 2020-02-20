const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seatNumber: {
    type: String, 
    match: /[A-F][1-9]\d?/
  },
    price: {
      type: Number,
      min: 0
  },
    flightNumber: {
      type: Schema.Types.ObjectId,
      ref: 'Flight'
    }
})
      

module.exports = mongoose.model('Ticket', ticketSchema);