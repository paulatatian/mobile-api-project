const Agenda = require('../models/Agenda');

// Obtener todas las agendas
exports.getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.findAll();
    res.json(agendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva agenda
exports.createAgenda = async (req, res) => {
  try {
    const newAgenda = await Agenda.create(req.body);
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener agenda por ID
exports.getAgendaById = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (!agenda) return res.status(404).json({ error: 'Agenda no encontrada' });
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar agenda
exports.updateAgenda = async (req, res) => {
  try {
    const updated = await Agenda.update(req.body, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ error: 'Agenda no encontrada' });
    res.json({ message: 'Agenda actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar agenda
exports.deleteAgenda = async (req, res) => {
  try {
    const deleted = await Agenda.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Agenda no encontrada' });
    res.json({ message: 'Agenda eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
