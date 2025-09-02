import {
  ArrowRight,
  Target,
  Zap,
  Building2,
  Trophy,
  Users,
  Lightbulb,
  Mail,
  ArrowRightCircle,
  NotebookPen,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// Importa la imagen de fondo que enviaste
import heroBackground from "../assets/banner-empresas-2.webp";

// Datos para la sección de servicios (tarjetas)
const services = [
  {
    title: "PRACTICANTES",
    description:
      "Conecta con estudiantes talentosos para prácticas profesionales",
    icon: <Users className="w-10 h-10" />,
    gradient: "from-slate-100 to-slate-50",
  },
  {
    title: "TESISTAS",
    description: "Encuentra estudiantes para desarrollar proyectos de tesis.",
    icon: <Trophy className="w-10 h-10 " />,
    gradient: "from-slate-100 to-slate-50",
  },
  {
    title: "SOLUCIONES",
    description: "Desarrolla soluciones innovadoras con la academia",
    icon: <Lightbulb className="w-10 h-10 " />,
    gradient: "from-slate-100 to-slate-50",
  },
];

const features = [
  {
    title: "Innovación Abierta",
    description:
      "Participa en un ecosistema de innovación que fomenta la colaboración y el intercambio de ideas.",
    icon: <Zap className="w-8 h-8 text-sky-600" />,
  },
  {
    title: "Desafíos Reales",
    description:
      "Aborda problemáticas auténticas de la industria y desarrolla soluciones con impacto.",
    icon: <Target className="w-8 h-8 text-sky-600" />,
  },
  {
    title: "Ecosistema Tecnológico",
    description:
      "Interactúa con la academia para acceder a conocimientos de vanguardia y tecnologías emergentes.",
    icon: <Building2 className="w-8 h-8 text-sky-600" />,
  },
];

export default function EmpresasPage() {
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("openfin@ing.pucv.cl").then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // El mensaje de "copiado" dura 2 segundos
    });
  };

  const handleNavigateToForm = () => {
    navigate("/desafios/inscripcion");
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Sección Hero con la imagen de fondo */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center py-20 md:py-32 flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Capa de superposición para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-800/50 opacity-80"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Inscribe tu desafío tecnológico
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Conecta con estudiantes y académicos que pueden ayudarte a resolver
            tus desafíos de innovación.
          </p>
          <button
            onClick={handleNavigateToForm}
            className="flex items-center justify-center mx-auto bg-white text-sky-700 hover:bg-gray-200 hover:scale-105 transition-all duration-300 py-3 px-8 rounded-full shadow-lg font-bold text-lg  cursor-pointer"
          >
            Postula tu desafío
            <NotebookPen className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Secciones de servicios y características */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg text-center p-6 ${service.gradient} rounded-lg`}
            >
              <CardContent className="p-0">
                <div
                  className={`inline-flex items-center justify-center rounded-full p-4 mb-4 text-sky-600 bg-white shadow-md`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-sky-800">
                  {service.title}
                </h3>
                <p className="text-sky-700 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-start bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="flex-shrink-0 mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección "Más información" */}
        <div className="my-12 px-4 max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 -translate-x-12"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  ¿Necesitas más información?
                </h3>
                <p className="text-sm mb-4">
                  Si tienes dudas o consultas, no dudes en escribirnos.
                </p>
                <div className="inline-flex items-center justify-center bg-white rounded-full shadow-lg font-semibold text-sky-600">
                  <span className="py-2.5 px-6 text-base">
                    {isCopied ? "¡Copiado!" : "openfin@ing.pucv.cl"}
                  </span>
                  <button
                    onClick={handleCopyClick}
                    className="cursor-pointer bg-slate-100 hover:bg-slate-200 p-2.5 rounded-full text-sky-600"
                  >
                    <ClipboardList className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
