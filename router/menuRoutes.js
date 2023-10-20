// menuRoutes.js
const express = require('express');
const router = express.Router();
const menuService = require('../services/menuService');

// Ruta para obtener todos los menús
router.get('/', async (req, res) => {
  try {
    const menus = await menuService.getAll();
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta para leer un menú específico
router.get('/:id', async (req, res) => {
  try {
    const menu = await menuService.get(req.params.id);
    res.status(200).json(menu);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Ruta para crear un nuevo menú
router.post('/', async (req, res) => {
  try {
    const newMenu = await menuService.create(req.body);
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para actualizar un menú existente
router.patch('/:id', async (req, res) => {
  try {
    const menu = await menuService.update(req.params.id, req.body);
    res.status(200).json(menu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para eliminar un menú existente
router.delete('/:id', async (req, res) => {
  try {
    await menuService.deleteitem(req.params.id);
    res.status(204).json();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;