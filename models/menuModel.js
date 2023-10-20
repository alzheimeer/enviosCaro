// menuModel.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }]
});

module.exports = mongoose.model('menus', menuSchema);
