const mongoose = require('mongoose');

//create schema for an employer document
const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required'
    },
    city: {
        type: String,
        required: 'City is Required'
    },
    contactEmail: {
        type: String
    },
    comments: {
        type: String
    },
    employees: {
        type: Number
    }
});

module.exports = mongoose.model('Employer', employerSchema);