const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Rutas
router.get('/', classController.getAllClasses);
router.post('/', classController.createClass);
router.get('/:id', classController.getClassById);
router.put('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;
