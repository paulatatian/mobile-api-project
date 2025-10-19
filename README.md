# Mobile API Project

API REST desarrollada con Node.js, Express y Sequelize para la gestión de un sistema de clases, usuarios, productos, agendas y facturación.

## 📋 Descripción del Proyecto

Este proyecto implementa una API REST completa que permite gestionar diferentes entidades de un sistema de administración. Utiliza SQLite como base de datos y está completamente dockerizado para facilitar su despliegue.

## 🗂️ Entidades del Sistema

### 1. **Users (Usuarios)**
Gestiona los usuarios del sistema con diferentes roles:
- **Campos**: id, nombre, correo, contraseña, rol (admin/cliente/instructor)
- **Funcionalidad**: Autenticación y control de acceso según rol

### 2. **Products (Productos)**
Administra el catálogo de productos o servicios:
- **Campos**: id, name, price, description, stock
- **Funcionalidad**: CRUD completo de productos con control de inventario

### 3. **Classes (Clases)**
Maneja las clases o actividades disponibles:
- **Campos**: id, nombre, descripción, duración_min, cupo_maximo
- **Funcionalidad**: Gestión de clases con control de capacidad

### 4. **Agenda**
Sistema de agendamiento y reservas:
- **Campos**: id, fecha, hora_inicio, hora_fin, estado (pendiente/confirmada/cancelada)
- **Funcionalidad**: Programación y seguimiento de citas

### 5. **Facturación**
Control de transacciones y pagos:
- **Campos**: id, numero_factura, fecha_emision, monto_total, metodo_pago, estado_pago
- **Funcionalidad**: Registro y seguimiento de facturas

## 🛠️ Tecnologías Utilizadas

- **Node.js** v18 (Alpine)
- **Express** v5.1.0 - Framework web
- **Sequelize** v6.37.7 - ORM para base de datos
- **SQLite3** v5.1.7 - Base de datos
- **CORS** - Manejo de políticas de origen cruzado
- **Docker** y **Docker Compose** - Contenedorización

## 📁 Estructura del Proyecto

```
mobile-api-project/
├── src/
│   ├── app.js                      # Punto de entrada de la aplicación
│   ├── controllers/                # Controladores de lógica de negocio
│   │   ├── productController.js
│   │   └── userController.js
│   ├── database/
│   │   └── connection.js           # Configuración de Sequelize
│   ├── models/                     # Modelos de datos
│   │   ├── Agenda.js
│   │   ├── Class.js
│   │   ├── Facturacion.js
│   │   ├── Product.js
│   │   └── User.js
│   └── routes/                     # Definición de rutas
│       ├── productRoutes.js
│       └── userRoutes.js
├── Dockerfile                      # Configuración de imagen Docker
├── docker-compose.yml              # Orquestación de contenedores
├── package.json                    # Dependencias del proyecto
├── database.sqlite                 # Base de datos SQLite
└── README.md                       # Este archivo
```

## 🚀 Instrucciones de Ejecución

### Prerequisitos

- [Docker](https://www.docker.com/get-started) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mobile-api-project.git
   cd mobile-api-project
   ```

2. **Construir y ejecutar con Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Acceder a la API**
   
   La API estará disponible en: `http://localhost:3000`

### Comandos útiles

```bash
# Ejecutar en modo detached (segundo plano)
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener los contenedores
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v
```

## 📡 Endpoints de la API

### Products (Implementado)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Obtener un producto por ID |
| POST | `/api/products` | Crear un nuevo producto |
| PUT | `/api/products/:id` | Actualizar un producto |
| DELETE | `/api/products/:id` | Eliminar un producto |

### Ejemplo de uso con cURL

```bash
# Crear un producto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Producto de prueba",
    "price": 99.99,
    "description": "Descripción del producto",
    "stock": 10
  }'

# Obtener todos los productos
curl http://localhost:3000/api/products

# Obtener un producto específico
curl http://localhost:3000/api/products/1
```

## 🔧 Variables de Entorno

El proyecto utiliza las siguientes variables de entorno (configuradas en `docker-compose.yml`):

- `NODE_ENV`: Entorno de ejecución (development/production)
- `PORT`: Puerto de la aplicación (default: 3000)

## 📝 Notas de Desarrollo

- El proyecto usa **nodemon** en modo desarrollo para recarga automática
- Los volúmenes de Docker sincronizan el código local con el contenedor
- La base de datos SQLite persiste mediante volumen en `./database.sqlite`
- Sequelize sincroniza automáticamente los modelos con la BD al iniciar

## 🔮 Próximos Pasos (TODO)

- [ ] Implementar controladores y rutas para User, Class, Agenda y Facturación
- [ ] Agregar autenticación JWT
- [ ] Implementar validaciones con middleware
- [ ] Agregar tests unitarios y de integración
- [ ] Documentación completa con Swagger/OpenAPI
- [ ] Implementar relaciones entre modelos (foreign keys)

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## ✉️ Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.

---

**Nota**: Asegúrate de tener los puertos necesarios disponibles antes de ejecutar el proyecto. El puerto 3000 debe estar libre en tu máquina local.