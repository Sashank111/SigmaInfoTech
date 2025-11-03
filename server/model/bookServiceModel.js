const mongoose = require('mongoose');


const bookServiceSchema = new mongoose.Schema({
    serviceId: { type: String, required: true },
    serviceName: { type: String, required: true },
    subServiceName: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BookService', bookServiceSchema);