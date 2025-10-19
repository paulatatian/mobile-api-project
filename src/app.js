const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// Importar modelos para sincronización
const Product = require('./models/Product');
const User = require('./models/User');
const Class = require('./models/Class');
const Agenda = require('./models/Agenda');
const Facturacion = require('./models/Facturacion');

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const facturacionRoutes = require('./routes/facturacionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de debug para ver los requests entrantes
app.use((req, res, next) => {
  console.log('Request recibido:', req.method, req.url);
  next();
});

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/agendas', agendaRoutes);
app.use('/api/facturas', facturacionRoutes);

// Ruta de salud para verificar que la API está funcionando
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Manejo de rutas no encontradas (corregido)
// En app.js - REEMPLAZA el manejador 404 por este:
app.use((req, res) => {
  // Limpia la ruta de caracteres extraños
  const cleanPath = req.path.trim();
  
  // Si la ruta limpia es /api/health, redirige a ella
  if (cleanPath === '/api/health' || cleanPath === '/api/health%0A') {
    return res.status(200).json({ 
      message: 'API funcionando correctamente',
      timestamp: new Date().toISOString()
    });
  }
  
  res.status(404).json({ 
    message: 'Ruta no encontrada',
    path: req.path,
    cleanPath: cleanPath,
    method: req.method
  });
});

// Función para iniciar el servidor y sincronizar la base de datos
async function startServer() {
  try {
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