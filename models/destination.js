const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: true,
        enum: ['SEA', 'AUS', 'DAL', 'LAX'],
        default: 'AUS'
    },
    arrival: {
        type: Date,
        default: function () {
            let now = new Date();
            now.setFullYear(now.getFullYear() + 1);
            return now;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);