const mongoose = require('mongoose');
//Used for volunteer listings
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    field: {
        type: String
    },
    qualifications: {
        type: Array
    },
    id: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    max_applicants: {
        type: Number,
        required: true
    },
    curr_applicants: {
        type: Number
    },
    thumbnail: {
        type: URL
    }

});

const Listing = mongoose.model('Listing', listingSchema);
model.exports = Listing;