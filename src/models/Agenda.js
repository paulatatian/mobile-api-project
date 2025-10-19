
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Agenda = sequelize.define("Agenda", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hora_fin: {
    type: DataTypes.TIME,
  },
  estado: {
    type: DataTypes.ENUM("pendiente", "confirmada", "cancelada"),
    defaultValue: "pendiente",
  },
}, {
  tableName: "agendas",
  timestamps: true,
});

module.exports = Agenda;
