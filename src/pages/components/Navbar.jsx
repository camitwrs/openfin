import { Link } from "react-router-dom";
import {
  Building2,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Menu, // Icono para el botón de hamburguesa
} from "lucide-react";
import mainLogo from "../../assets/Facultad de Ingeniería_AZUL.png";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Sheet, // Componente de Shadcn/UI para el menú lateral
  SheetContent,
  SheetDescription, // Opcional, si quieres una descripción
  SheetHeader,
  SheetTitle, // Opcional, para el título del menú
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="z-50 w-full bg-[#ffffff] p-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Contenedor del Logo y el texto "OPENFIN" */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/" className="flex items-center">
            {" "}
            {/* Hacemos que todo el logo + texto sea clickeable */}
            <img
              src={mainLogo}
              alt="openFIN logo"
              className="h-12 md:h-16 mr-2"
            />{" "}
            {/* Añadí mr-2 para un pequeño espacio */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 tracking-tight">
              OPEN<span className="text-sky-600">FIN</span>
            </h1>
          </Link>
        </div>

        {/* Menú de Botones (oculto en móviles, visible en md y más grandes) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {/* Estudiantes con DropdownMenu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="cursor-pointer flex items-center gap-1.5 px-3 py-2"
                variant="outline"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Estudiantes</span>
                <ChevronDown className="w-4 h-4 ml-1" />{" "}
                {/* Añadí un pequeño margen al icono */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={4} className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/estudiantes/connecta-industria">
                  Connecta Industria
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/estudiantes/academia-id">Academia I+D</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/estudiantes/academia-ebct">Academia EBCT</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" asChild>
            <Link
              to="/empresas"
              className="flex items-center gap-1.5 px-3 py-2"
            >
              <Building2 className="w-5 h-5" />
              <span>Empresas</span>
            </Link>
          </Button>

          {/* Académicos/as */}
          <Button variant="outline" asChild>
            <Link
              to="/academicos"
              className="flex items-center gap-1.5 px-3 py-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Académicos/as</span>
            </Link>
          </Button>
        </div>

        {/* Botón de Hamburguesa (visible solo en móviles, oculto en md y más grandes) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-xl font-bold text-sky-800">
                  OPEN<span className="text-sky-600">FIN</span>
                </SheetTitle>
                <SheetDescription className="text-gray-600">
                  Navega por las secciones principales.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {/* Elementos del menú móvil */}
                <Link
                  to="/estudiantes"
                  className="flex items-center gap-3 text-lg font-medium text-sky-800 hover:text-sky-600 transition-colors py-2"
                >
                  <GraduationCap className="w-6 h-6" />
                  Estudiantes
                </Link>
                {/* Submenú de estudiantes dentro del Sheet (opcional, si quieres más anidamiento) */}
                <div className="pl-6 flex flex-col gap-2">
                  <Link
                    to="/estudiantes/connecta-industria"
                    className="text-base text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    - Connecta Industria
                  </Link>
                  <Link
                    to="/estudiantes/academia-id"
                    className="text-base text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    - Academia I+D
                  </Link>
                  <Link
                    to="/estudiantes/academia-ebct"
                    className="text-base text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    - Academia EBCT
                  </Link>
                </div>
                <Link
                  to="/empresas"
                  className="flex items-center gap-3 text-lg font-medium text-sky-800 hover:text-sky-600 transition-colors py-2"
                >
                  <Building2 className="w-6 h-6" />
                  Empresas
                </Link>
                <Link
                  to="/academicos"
                  className="flex items-center gap-3 text-lg font-medium text-sky-800 hover:text-sky-600 transition-colors py-2"
                >
                  <BookOpen className="w-6 h-6" />
                  Académicos/as
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}