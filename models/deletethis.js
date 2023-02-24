const mongoose = require('mongoose');

const CSSISchema = new mongoose.Schema({
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
    source: {
        type: String,
        required: 'City is Required'

    },
    monthCollected: {
        type: String,
        required: 'City is Required'

    },
    dateCollected: {
        type: String,
        required: 'City is Required'

    },
    localMunicipality: {
        type: String,
        required: 'City is Required',
        enum: ['Barrie1', 'Barrie2', 'Barrie3', 'Barrie4']
    },
    Town: {
        type: String,
        required: 'City is Required',
        enum: ['Barrie', 'Orillia', 'Midland', 'New Market', 'Bradford', 'Aliston', 'Innisfil']
    }

});

module.exports = mongoose.model('CSSI', CSSISchema);