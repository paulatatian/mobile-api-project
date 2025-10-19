@'
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM("admin", "cliente", "instructor"),
    defaultValue: "cliente",
  },
}, {
  tableName: "usuarios",
  timestamps: true,
});

module.exports = User;
'@ | Out-File -Encoding utf8 User.js
