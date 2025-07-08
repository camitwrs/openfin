import {
  Plus,
  ArrowLeft,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Users,
  Rocket,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate

export default function AcademiaEBCTPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const menuItems = [
    {
      title: "¿Qué es una EBCT?",
      icon: BookOpen,
      description:
        "Conoce más sobre las Empresas de Base Científico Tecnológica",
      href: "",
    },
    {
      title: "Resultados de I+D",
      icon: Lightbulb,
      description: "Descubre los resultados de investigación y desarrollo",
      href: "",
    },
    {
      title: "Temas de Tesis en EBCT's",
      icon: GraduationCap,
      description: "Explora oportunidades de tesis en empresas EBCT",
      href: "",
    },
    {
      title: "Charlas y Talleres de empresas EBCT's",
      icon: Users,
      description: "Participa en eventos y capacitaciones empresariales",
      href: "",
    },
    {
      title: "Venture Studio",
      icon: Rocket,
      description: "Impulsa tu startup con nuestro programa de aceleración",
      href: "/venture-studio",
      isSpecial: true,
    },
    {
      title: "Postula Aquí",
      icon: FileText,
      description: "Envía tu aplicación y únete a nuestro ecosistema",
      href: "",
    },
  ];

  return (
    <div className=" bg-slate-100 py-4 px-4 relative">
      {" "}
      {/* Añadí relative para posicionar el botón de volver si es necesario */}
      <div className="max-w-7xl mx-auto">
        {/* Botón de volver posicionado en la esquina superior izquierda */}
        <Button
          variant="ghost"
          onClick={handleBackClick}
          className="cursor-pointer absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 flex items-center gap-1.5 text-cyan-600 hover:text-cyan-800 transition-colors z-30 px-3 py-2 text-sm sm:text-base" // Responsivo y color ajustado al gradiente de la página
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Volver</span>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-12 sm:pt-16 lg:pt-20">
          {" "}
          {/* Ajusta el padding superior para evitar que el botón de volver se superponga */}
          {/* Main Academia EBCT Card */}
          <Card className="lg:row-span-2 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white border-0 shadow-xl relative overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
              {/* Background decoration - reduje el tamaño y traslación */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

              <div>
                <Button
                  size="icon"
                  className="mb-6 bg-white/20 hover:bg-white/30 border-0 w-10 h-10"
                >
                  <Plus className="w-5 h-5" />
                </Button>

                <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
                  Academia
                  <br />
                  EBCT
                </h1>

                <p className="text-sky-100 text-base leading-relaxed">
                  Conectando la academia con el ecosistema empresarial de base
                  científico-tecnológica
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Menu Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Link key={index} to={item.href} className="block">
                  <Card
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border-0 ${
                      item.isSpecial
                        ? "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 text-white"
                        : "bg-gradient-to-br from-cyan-600 to-cyan-700 text-white" // <-- Aquí se puede ajustar el gradiente para que sea más coherente si es necesario
                    }`}
                  >
                    <CardContent className="p-4 h-full flex flex-col relative overflow-hidden">
                      {item.isSpecial && (
                        <>
                          {/* Background decoration for special card - reduje el tamaño y traslación */}
                          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
                        </>
                      )}
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <IconComponent className="w-6 h-6 text-white/80" />
                        <Button
                          size="icon"
                          className="bg-white/20 hover:bg-white/30 border-0 w-8 h-8 group-hover:bg-white/40 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-lg font-bold mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}