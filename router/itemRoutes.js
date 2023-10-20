// itemRoutes.js
const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');

// Ruta para obtener todos los items
router.get('/', async (req, res) => {
  try {
    const items = await itemService.getAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta para leer un item específico
router.get('/:id', async (req, res) => {
  try {
    const item = await itemService.get(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Ruta para crear un nuevo item
router.post('/', async (req, res) => {
  try {
    const newItem = await itemService.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para actualizar un item existente
router.patch('/:id', async (req, res) => {
  try {
    const item = await itemService.update(req.params.id, req.body);
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para eliminar un item existente
router.delete('/:id', async (req, res) => {
  try {
    await itemService.deleteitem(req.params.id);
    res.status(204).json();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;