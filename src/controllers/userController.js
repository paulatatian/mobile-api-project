const User = require('../models/User');

// OBTENER TODOS los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['contraseña'] } // Excluir contraseña por seguridad
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener los usuarios', 
      error: error.message 
    });
  }
};

// OBTENER UN usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['contraseña'] }
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener el usuario', 
      error: error.message 
    });
  }
};

// CREAR un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    // Excluir contraseña en la respuesta
    const userResponse = {
      id: newUser.id,
      nombre: newUser.nombre,
      correo: newUser.correo,
      rol: newUser.rol,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt
    };
    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al crear el usuario', 
      error: error.message 
    });
  }
};

// ACTUALIZAR un usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      // Excluir contraseña en la respuesta
      const userResponse = {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };
      res.status(200).json(userResponse);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ 
      message: 'Error al actualizar el usuario', 
      error: error.message 
    });
  }
};

// ELIMINAR un usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al eliminar el usuario', 
      error: error.message 
    });
  }
};