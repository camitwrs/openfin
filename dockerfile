# Etapa 1: Construcción (builder)
# Utilizamos una imagen base ligera de Bun para instalar dependencias y construir la aplicación.
FROM oven/bun:1.1.18 as builder

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia los archivos de configuración para instalar las dependencias.
# Esto optimiza el caché de Docker.
COPY package.json bun.lockb ./

# Instala todas las dependencias. El flag --frozen-lockfile asegura que la construcción sea reproducible.
RUN bun install --frozen-lockfile

# Copia el resto de los archivos de la aplicación.
COPY . .

# Ejecuta el comando de construcción de Vite. Esto creará la carpeta `dist`.
RUN bun run build

# Etapa 2: Servidor de producción (runner)
# Utilizamos la misma imagen ligera de Bun para servir la aplicación.
FROM oven/bun:1.1.18 as runner

# Establece el directorio de trabajo.
WORKDIR /app

# Copia solo los archivos de producción necesarios para iniciar el servidor.
# Esto reduce significativamente el tamaño de la imagen final.
COPY --from=builder /app/dist ./dist
COPY package.json bun.lockb ./

# Instala solo las dependencias de producción (en este caso, serve).
RUN bun install --prod

# Exponemos el puerto en el que serve servirá la aplicación.
EXPOSE 3000

# Define el comando que se ejecutará al iniciar el contenedor.
# Usamos `serve` directamente con el flag `-s` para asegurarnos de que el modo SPA se use.
CMD ["serve", "dist", "-s"]
