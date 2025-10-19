# Usar una imagen base de Node.js oficial (versión LTS Alpine para un tamaño menor)
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
# Se usa --only=production en un entorno real para no instalar devDependencies
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Exponer el puerto que la aplicación usará dentro del contenedor
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "src/app.js"]
