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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    icon: Target,
    title: "Talento Especializado",
    description: "Accede a estudiantes y profesionales altamente capacitados",
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description:
      "Impulsa la innovación con proyectos de investigación aplicada",
  },
  {
    icon: Building2,
    title: "Colaboración Estratégica",
    description: "Establece alianzas duraderas con la academia",
  },
];

const handleEmailClick = () => {
  window.location.href = "mailto:openfin@ing.pucv.cl";
};

const handleInscripcionClick = () => {
  navigate("/empresas/inscripcion");
};

export default function EmpresasPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/30 rounded-full -translate-y-40 translate-x-40"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-100/20 rounded-full translate-y-32 -translate-x-32"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          {/* Sección de cabecera */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center lg:items-start text-center lg:text-left">
            <div className="mb-8 lg:mb-0 lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-sky-900 mb-4 leading-tight">
                Empresas
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full mx-auto lg:mx-0 mb-2"></div>
              <p className="text-lg lg:text-xl text-sky-800 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Conectamos empresas con talento académico especializado para
                impulsar la innovación y el crecimiento empresarial.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end lg:text-right justify-center gap-4 lg:col-span-1">
              <p className="text-lg md:text-xl font-extrabold mt-2 text-sky-900">
                ¿Eres una empresa u organización y quieres participar?
              </p>
              <button
                onClick={() => window.open("URL_DE_INSCRIPCION", "_blank")}
                className="bg-gradient-to-r cursor-pointer from-sky-700 to-sky-500 hover:to-sky-400
             text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl 
             transition-all duration-300 text-base md:text-lg uppercase flex items-center justify-center hover:scale-105"
              >
                Inscribe tu organizacion
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Sección de tarjetas de servicios */}
          <div className="mb-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 ">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:shadow-xl border-0 overflow-hidden bg-sky-50 text-center"
                >
                  <CardContent className="p-8 flex flex-col items-center">
                    <div
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center
                        bg-gradient-to-r ${service.gradient} text-sky-600 shadow-lg mb-4
                        transform transition-all duration-500 ease-in-out group-hover:scale-105
                      `}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-sky-700 mb-2 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-sky-800 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-sky-600 mb-8">
              ¿Por qué elegir nuestra plataforma?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;

                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-sky-600 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sky-800 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

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
                <Button
                  onClick={handleEmailClick}
                  className="bg-white cursor-pointer text-sky-600 hover:bg-sky-50 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 text-base"
                >
                  <ArrowRight className="w-7 h-7" />
                  openfin@ing.pucv.cl
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
