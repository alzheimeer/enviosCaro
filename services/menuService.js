// menuService.js
const mongoose = require('mongoose');
const Menu = require('../models/menuModel');

// Funciones para el CRUD de menús

// Obtiene todos los menús
async function getAll() {
  return await Menu.find({});
}

// Obtiene un menú específico
async function get(id) {
  return await Menu.findById(id);
}

// Crea un nuevo menú
async function create(menu) {
  return await Menu.create(menu);
}

// Actualiza un menú existente
async function update(id, menu) {
  return await Menu.findByIdAndUpdate(id, menu, { new: true });
}

// Elimina un menú existente
async function deleteitem(id) {
  return await Menu.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteitem
};