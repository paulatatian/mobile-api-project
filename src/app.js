const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// Importar modelos para sincronización
const Product = require('./models/Product');
// TODO: Importar los otros modelos aquí (User, Class, etc.)

// Importar rutas
const productRoutes = require('./routes/productRoutes');
// TODO: Importar las otras rutas aquí

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite al servidor entender JSON en el body de las peticiones

// Rutas de la API
app.use('/api/products', productRoutes);
// TODO: Registrar las otras rutas aquí
// app.use('/api/users', userRoutes);
// app.use('/api/classes', classRoutes);

// Función para iniciar el servidor y sincronizar la base de datos
async function startServer() {
  try {
    // Sincroniza los modelos con la base de datos.
    // { force: false } evita que las tablas se borren y recreen en cada reinicio.
    // Usar { force: true } durante el desarrollo si necesitas reiniciar la BD.
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada correctamente.');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

startServer();
