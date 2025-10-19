FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm install --also=dev
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]