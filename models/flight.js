const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const destinationSchema = new Schema({
//     airport: {
//         type: String,
//         index: true,
//         unique: true,
//         dropDups: true,
//         required: true,
//         enum: ['SEA', 'AUS', 'DAL', 'LAX'],
//         default: 'SEA'
//     },
//     arrival: {
//         type: Date,
//         default: function () {
//             let now = new Date();
//             now.setFullYear(now.getFullYear() + 1);
//             return now;
//         }
//     }
// }, {
//     timestamps: true
// });

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departure: {
        type: Date,
        default: function () {
            let now = new Date();
            now.setFullYear(now.getFullYear() + 1);
            return now;
        }
    },
    airport: {
        type: String,
        enum: ['SEA', 'AUS', 'DAL', 'LAX' ],
        default: 'SEA',
    },
    ticket: [{
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }],
    destinations: [{
        type: Schema.Types.ObjectId,
        ref: 'Destination'
    }],
}, {
    timestamps: true
})
   

module.exports = mongoose.model('Flight', flightSchema);