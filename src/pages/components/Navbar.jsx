import { Link } from "react-router-dom";
import {
  Building2,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Lightbulb,
  Menu,
} from "lucide-react";
import mainLogo from "../../assets/FINAZUL.png";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="z-50 w-full bg-[#ffffff] p-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Contenedor del Logo y el texto "OPENFIN" */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/" className="flex items-center">
            <img
              src={mainLogo}
              alt="openFIN logo"
              className="h-12 md:h-16 mr-2"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800 tracking-tight">
              OPEN<span className="text-sky-600">FIN</span>
            </h1>
          </Link>
        </div>

        {/* Menú de Botones (oculto en móviles, visible en md y más grandes) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
          <button className="rounded-lg hover:bg-gray-50 pb-2">
            <Link to="/" className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <Lightbulb className=" text-sky-900 w-5 h-5" />
                <span className="uppercase font-bold text-sky-900">
                  Desafíos
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-500 -mt-2">
                Participa
              </span>
            </Link>
          </button>

          <button className="rounded-lg hover:bg-gray-50 pb-2">
            <Link to="/empresas" className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <Building2 className="text-sky-900 w-5 h-5" />
                <span className="uppercase font-bold text-sky-900">
                  Empresas
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-500 -mt-2">
                Postula tu desafío
              </span>
            </Link>
          </button>
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
                <Link
                  to="/empresas"
                  className="flex items-center gap-3 text-lg font-medium text-sky-800 hover:text-sky-600 transition-colors py-2"
                >
                  <Building2 className="w-6 h-6" />
                  <div className="flex flex-col">
                    <span>Empresas</span>
                    <span className="text-xs uppercase font-semibold text-gray-500 -mt-1">
                      Postula tu desafío
                    </span>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-medium text-sky-800 hover:text-sky-600 transition-colors py-2"
                >
                  <Lightbulb className="w-6 h-6" />
                  <div className="flex flex-col">
                    <span>Desafíos</span>
                    <span className="text-xs uppercase font-semibold text-gray-500 -mt-1">
                      Participa
                    </span>
                  </div>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
