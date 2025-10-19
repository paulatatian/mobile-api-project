const { Sequelize } = require('sequelize');
const path = require('path');

// Define la ruta al archivo de la base de datos.
// Usar path.join asegura que funcione en cualquier sistema operativo.
const storagePath = path.join(__dirname, '../../database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: console.log // Muestra las consultas SQL en la consola. Útil para depurar.
});

module.exports = sequelize;
