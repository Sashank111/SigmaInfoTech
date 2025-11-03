const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
    },
    subsname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('subServices', subServiceSchema);
