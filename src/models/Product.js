const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true // Agrega los campos createdAt y updatedAt automáticamente
});

module.exports = Product;
