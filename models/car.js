const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: String,
    price: {
        type: String,
        default: 0
    },
    description: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
