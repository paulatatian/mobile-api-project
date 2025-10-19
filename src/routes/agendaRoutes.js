const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

// Rutas
router.get('/', agendaController.getAllAgendas);
router.post('/', agendaController.createAgenda);
router.get('/:id', agendaController.getAgendaById);
router.put('/:id', agendaController.updateAgenda);
router.delete('/:id', agendaController.deleteAgenda);

module.exports = router;
