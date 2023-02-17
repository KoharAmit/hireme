const mongoose = require('mongoose');

//create schema for entring city name
const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required',
        minlength: [1, 'Name is empty'],
        maxlength: [50, 'Name is too long']
    },
});

module.exports = mongoose.model('City', CitySchema);