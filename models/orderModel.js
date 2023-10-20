// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
  total: Number,
  deliveryAddress: String
});

module.exports = mongoose.model('orders', orderSchema);
