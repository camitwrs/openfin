import { Link } from "react-router-dom";
import { useState, React } from "react";
import {
  Building2,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Lightbulb,
  Menu,
  ArrowRight,
  Home,
  Newspaper,
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { to: "/", icon: Home, label: "Inicio", desc: "", isDropdown: false },
    {
      to: "/actividades",
      icon: Newspaper,
      label: "Actividades",
      desc: "",
      isDropdown: true,
      subItems: [
        { label: "Noticias", to: "/actividades/noticias" },
        { label: "Calendario de actividades", to: "/actividades/calendario" },
      ],
    },
    {
      to: "/desafios",
      icon: Lightbulb,
      label: "Desafíos",
      desc: "",
      isDropdown: true,
      subItems: [
        { label: "Desafíos vigentes (Ing. PUCV)", to: "/desafios/vigentes" },
        { label: "Desafíos en curso (Adjudicados)", to: "/desafios/en-curso" },
      ],
    },
    {
      to: "/estudiantes",
      icon: GraduationCap,
      label: "Estudiantes",
      desc: "",
      isDropdown: true,
      subItems: [
        { label: "Academia I+D", to: "/estudiantes/academia-id" },
        { label: "Academia EBCT", to: "/estudiantes/academia-ebct" },
        { label: "Venture Studio", to: "/estudiantes/venture-studio" },
        { label: "Conecta Industria", to: "/estudiantes/conecta-talento" },
      ],
    },
    {
      to: "/empresas",
      icon: Building2,
      label: "Empresas",
      desc: "",
      isDropdown: false,
    },
  ];

  const closeSheet = () => setIsSheetOpen(false);

  const NavItemContent = ({ icon: Icon, label, desc, isDropdown = false }) => (
    <div className="flex flex-col items-center">
      {/* Contenedor de ícono y texto principal */}
      <div className="flex items-center gap-1 px-1 py-1">
        <Icon className="text-sky-800 w-4 h-4 lg:w-5 lg:h-5 group-hover:text-sky-600 flex-shrink-0" />
        <span className="uppercase text-xs lg:text-sm font-bold text-sky-900 group-hover:text-sky-600 whitespace-nowrap">
          {label}
        </span>
        {/* El icono de flecha gira al hacer hover */}
        {isDropdown && (
          <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-sky-600 group-hover:text-sky-800 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
        )}
      </div>
      {/* Subtexto descriptivo - oculto en pantallas pequeñas */}
      {desc && (
        <span className="hidden xl:block text-[10px] uppercase font-semibold text-gray-500 -mt-1 group-hover:text-sky-700">
          {desc}
        </span>
      )}
    </div>
  );

  return (
    <nav className="z-50 w-full bg-[#ffffff] p-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Contenedor del Logo y el texto "OPENFIN" */}
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src={mainLogo}
              alt="openFIN logo"
              className="h-10 md:h-12 lg:h-16 mr-1 md:mr-2"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-sky-800 tracking-tight whitespace-nowrap">
              OPEN<span className="text-sky-600">FIN</span>
            </h1>
          </Link>
        </div>

        {/* Menú de Botones (oculto en móviles y tablets pequeños, visible en lg y más grandes) */}
        <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-2 flex-wrap justify-end">
          {navItems.map((item) =>
            item.isDropdown ? (
              // Implementación del Dropdown Menu
              <DropdownMenu key={item.to}>
                <DropdownMenuTrigger asChild>
                  <div className="flex flex-col items-center rounded-lg hover:bg-sky-50/70 p-1.5 xl:p-2 transition-colors group cursor-pointer">
                    <NavItemContent {...item} />
                  </div>
                </DropdownMenuTrigger>
                {/* Usa el nuevo DropdownMenuContent estilizado */}
                <DropdownMenuContent className="p-1">
                  {/* Condición para excluir "Ver todo en Actividades" */}
                  {item.label !== "Actividades" && (
                    <Link
                      key={item.to + "-all"}
                      to={item.to}
                      onClick={closeSheet}
                    >
                      <DropdownMenuItem className="font-bold text-sky-700 hover:bg-sky-100/70">
                        Ver todo en {item.label}
                      </DropdownMenuItem>
                    </Link>
                  )}
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.to} to={subItem.to} onClick={closeSheet}>
                      <DropdownMenuItem className="font-semibold text-sky-700 hover:bg-sky-100/70">
                        {subItem.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Implementación de Link simple
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-col items-center rounded-lg hover:bg-sky-50/70 p-1.5 xl:p-2 transition-colors group"
              >
                <NavItemContent {...item} />
              </Link>
            )
          )}
        </div>

        {/* Botón de Hamburguesa (visible solo en móviles y tablets, oculto en lg y más grandes) */}
        <div className="lg:hidden flex-shrink-0">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setIsSheetOpen(true)}
              >
                <Menu className="h-5 w-5 text-sky-800" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 w-[85vw] sm:w-[400px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl font-bold text-sky-800">
                  OPEN<span className="text-sky-600">FIN</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.to} className="flex flex-col gap-1">
                    {/* Enlace principal */}
                    <Link
                      to={item.to}
                      onClick={closeSheet}
                      className="flex items-center gap-4 p-3 rounded-lg text-base sm:text-lg font-medium text-sky-800 hover:bg-sky-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 flex-shrink-0" />
                      <div className="flex flex-col items-start">
                        <span>{item.label}</span>
                        {item.desc && (
                          <span className="text-xs uppercase font-semibold text-gray-500 -mt-1">
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </Link>
                    {/* Sub-items en móvil */}
                    {item.isDropdown &&
                      item.subItems.map((subItem) => (
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          onClick={closeSheet}
                          className="flex items-center gap-2 pl-12 pr-3 py-2 text-sm sm:text-base font-semibold text-sky-700 hover:bg-sky-50/50 transition-colors"
                        >
                          <span className="w-1 h-1 bg-sky-600 rounded-full flex-shrink-0"></span>
                          {subItem.label}
                        </Link>
                      ))}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
