const Facturacion = require('../models/Facturacion');

// Obtener todas las facturas
exports.getAllFacturas = async (req, res) => {
  try {
    const facturas = await Facturacion.findAll();
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva factura
exports.createFactura = async (req, res) => {
  try {
    const factura = await Facturacion.create(req.body);
    res.status(201).json(factura);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener factura por ID
exports.getFacturaById = async (req, res) => {
  try {
    const factura = await Facturacion.findByPk(req.params.id);
    if (!factura) return res.status(404).json({ error: 'Factura no encontrada' });
    res.json(factura);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar factura
exports.updateFactura = async (req, res) => {
  try {
    const updated = await Facturacion.update(req.body, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ error: 'Factura no encontrada' });
    res.json({ message: 'Factura actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar factura
exports.deleteFactura = async (req, res) => {
  try {
    const deleted = await Facturacion.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Factura no encontrada' });
    res.json({ message: 'Factura eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
