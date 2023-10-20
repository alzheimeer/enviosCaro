// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

// Ruta para obtener todas las órdenes
router.get('/', async (req, res) => {
  try {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta para leer una orden específica
router.get('/:id', async (req, res) => {
  try {
    const order = await orderService.get(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Ruta para crear una nueva orden
router.post('/', async (req, res) => {
  try {
    const newOrder = await orderService.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para actualizar una orden existente
router.patch('/:id', async (req, res) => {
  try {
    const order = await orderService.update(req.params.id, req.body);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para eliminar una orden existente
router.delete('/:id', async (req, res) => {
  try {
    await orderService.deleteitem(req.params.id);
    res.status(204).json();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;