// itemModel.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

module.exports = mongoose.model('items', itemSchema);
