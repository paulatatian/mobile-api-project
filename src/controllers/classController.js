const Class = require('../models/Class');

// Obtener todas las clases
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva clase
exports.createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener clase por ID
exports.getClassById = async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    if (!classItem) return res.status(404).json({ error: 'Clase no encontrada' });
    res.json(classItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar clase
exports.updateClass = async (req, res) => {
  try {
    const updated = await Class.update(req.body, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ error: 'Clase no encontrada' });
    res.json({ message: 'Clase actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar clase
exports.deleteClass = async (req, res) => {
  try {
    const deleted = await Class.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Clase no encontrada' });
    res.json({ message: 'Clase eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
