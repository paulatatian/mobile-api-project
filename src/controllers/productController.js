const Product = require('../models/Product');

// OBTENER TODOS los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener los productos', 
      error: error.message 
    });
  }
};

// OBTENER UN producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener el producto', 
      error: error.message 
    });
  }
};

// CREAR un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al crear el producto', 
      error: error.message 
    });
  }
};

// ACTUALIZAR un producto por ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update(req.body);
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar el producto', 
      error: error.message 
    });
  }
};

// ELIMINAR un producto por ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).send(); // 204 No Content
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar el producto', 
      error: error.message 
    });
  }
};
