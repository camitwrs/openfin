import { Sun, Facebook, Instagram, Twitter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

export default function VentureStudioPage() {
  const navigate = useNavigate();

  // Función para volver a la página anterior
  const handleBackClick = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className="bg-black p-4 text-white relative overflow-hidden">
      {/* Decorative gradient shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-70">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 rounded-full blur-3xl transform rotate-12"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header con botón de volver integrado */}
        <header className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          {/* Badge VENTURE STUDIO */}
          <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full mb-4 sm:mb-0">
            <Sun className="w-5 h-5" />
            <span className="font-bold text-base">VENTURE STUDIO</span>
          </div>

          {/* Botón de volver posicionado en la esquina superior derecha del header para móviles/sm,
              o al lado del badge en sm/md, luego a la derecha en el footer general en lg.
              Considerando el diseño actual, lo colocaremos en el footer,
              pero si el diseño demandara que siempre estuviera arriba, se ajustaría aquí.
              Para consistencia con tus otras páginas, lo mejor es ponerlo abajo o posicionado absolutamente arriba.
              Vamos a mantenerlo en el footer como lo tenías, solo asegurando que siempre se vea.
          */}
        </header>

        {/* Hero section */}
        <main className="max-w-3xl">
          <p className="text-base mb-6 font-medium tracking-wide">
            IMPACTA EL MUNDO CON TECNOLOGÍA
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10">
            ESTAMOS
            <br />
            DISEÑANDO EL
            <br />
            FUTURO
          </h1>

          {/* Action buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mb-10">
            <Button className="h-12 text-base font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 rounded-lg">
              SOY ESTUDIANTE
            </Button>
            <Button className="h-12 text-base font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0 rounded-lg">
              SOY INVESTIGADOR
            </Button>
            <Button className="h-12 text-base font-semibold bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 border-0 rounded-lg md:col-span-1">
              FONDO VENTURE
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-10">
          {" "}
          {/* Ajustado a flex-col en móvil, y items-center */}
          {/* Social media icons */}
          <div className="flex gap-4 mb-4 sm:mb-0">
            {" "}
            {/* Margen inferior para móviles */}
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:bg-gray-700 text-white" // Ajusté hover y color del texto
            >
              <Facebook className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:bg-gray-700 text-white"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 hover:bg-gray-700 text-white"
            >
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
          {/* Botón de volver */}
          <Button
            variant="ghost"
            className="flex cursor-pointer items-center gap-2 text-base text-white" // Aseguro el color blanco del texto
            onClick={handleBackClick}
          >
            <span>volver</span>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </Button>
        </footer>
      </div>
    </div>
  );
}
