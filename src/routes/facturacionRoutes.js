const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacionController');

// Rutas
router.get('/', facturacionController.getAllFacturas);
router.post('/', facturacionController.createFactura);
router.get('/:id', facturacionController.getFacturaById);
router.put('/:id', facturacionController.updateFactura);
router.delete('/:id', facturacionController.deleteFactura);

module.exports = router;
