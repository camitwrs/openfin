import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      cachedChecks: false, // <-- Asegúrate de que esto esté aquí
    },
    // Si estás ejecutando en un puerto diferente a 5173, configúralo aquí:
    // port: 5173,
    // host: true, // Esto es útil si Docker está involucrado
  },
});
