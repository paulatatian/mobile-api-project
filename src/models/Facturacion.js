@'
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Facturacion = sequelize.define("Facturacion", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  numero_factura: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fecha_emision: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  monto_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodo_pago: {
    type: DataTypes.ENUM("efectivo", "tarjeta", "transferencia"),
    defaultValue: "efectivo",
  },
  estado_pago: {
    type: DataTypes.ENUM("pendiente", "pagado", "anulado"),
    defaultValue: "pendiente",
  },
}, {
  tableName: "facturacion",
  timestamps: true,
});

module.exports = Facturacion;
'@ | Out-File -Encoding utf8 Facturacion.js
