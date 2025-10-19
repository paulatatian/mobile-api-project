@'
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Class = sequelize.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  duracion_min: {
    type: DataTypes.INTEGER,
  },
  cupo_maximo: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
  },
}, {
  tableName: "clases",
  timestamps: true,
});

module.exports = Class;
'@ | Out-File -Encoding utf8 Class.js
