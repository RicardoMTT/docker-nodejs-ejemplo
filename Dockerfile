# Usar una imagen base de Node.js (versión 18 para garantizar compatibilidad)
FROM node:18-alpine

# Crear y configurar el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar dependencias (Express en este caso)
RUN npm install

# Exponer el puerto que usa el servidor
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
