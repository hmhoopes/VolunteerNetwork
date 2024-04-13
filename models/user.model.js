const mongoose = require('mongoose');
//Used for users and organizations
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pronouns: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isOrg: {
        type: Boolean,
        required: true
    },
    organization: {
        type: String
    },
    interests: {
        type: String
    },
    qualifications: {
        type: String
    },
    postings: {
        type: Number //id numbers
    },
    location: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
model.exports = User;