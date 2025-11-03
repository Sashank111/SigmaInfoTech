const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Services', serviceSchema);
