const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    roleType: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List