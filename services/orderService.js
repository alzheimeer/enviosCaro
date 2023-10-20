// orderService.js
const mongoose = require('mongoose');
const Order = require('../models/orderModel');

// Funciones para el CRUD de órdenes

// Obtiene todas las órdenes
async function getAll() {
  return await Order.find({});
}

// Obtiene una orden específica
async function get(id) {
  return await Order.findById(id);
}

// Crea una nueva orden
async function create(order) {
  return await Order.create(order);
}

// Actualiza una orden existente
async function update(id, order) {
  return await Order.findByIdAndUpdate(id, order, { new: true });
}

// Elimina una orden existente
async function deleteitem(id) {
  return await Order.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteitem
};