const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  discount: { type: String, required: true },
  validity: { type: String, required: true },
});

module.exports = mongoose.model('Offer', offerSchema);