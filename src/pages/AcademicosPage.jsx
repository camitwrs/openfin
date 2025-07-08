import { Users, DollarSign, Handshake, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import equiposimg from "../assets/equipos.webp";
import financiamientoimg from "../assets/financiamiento.webp";
import partnersimg from "../assets/partners.webp";

export default function AcademicosPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "EQUIPOS",
      description:
        "Forma y gestiona equipos de investigación multidisciplinarios para desarrollar proyectos colaborativos de alto impacto académico.",
      icon: Users,
      image: equiposimg,
      path: "",
      gradient: "from-blue-500 to-blue-300",
    },
    {
      title: "FINANCIAMIENTO",
      description:
        "Accede a oportunidades de financiamiento, fondos de investigación y recursos económicos para impulsar tus proyectos académicos.",
      icon: DollarSign,
      image: financiamientoimg,
      path: "",
      gradient: "from-blue-500 to-blue-300",
    },
    {
      title: "PARTNERS",
      description:
        "Establece alianzas estratégicas con instituciones, empresas y organizaciones para maximizar el alcance de tu investigación.",
      icon: Handshake,
      image: partnersimg,
      path: "",
      gradient: "from-blue-500 to-blue-300",
    },
  ];

  const handleServiceClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const handleInscripcionAcademicoClick = () => {
    navigate("/academicos/inscripcion"); // <-- ¡CAMBIA ESTA RUTA A TU FORMULARIO REAL!
  };

  return (
    <div className="bg-slate-100 py-8">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration - Reduje tamaños y traslaciones */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-100/20 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10">
          {/* Contenedor Flex para el Título Principal y la Sección de Inscripción */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12 text-center lg:text-left">
            {" "}
            {/* Responsivo: columna en móvil, fila en lg. Centrado en móvil, izquierda/derecha en lg */}
            {/* Contenedor del Título Principal y Descripción */}
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-sky-900 mb-4">
                Académicos/as
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full mx-auto lg:mx-0 mb-6"></div>{" "}
              {/* Centrado en móvil, a la izquierda en lg */}
              <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Plataforma integral para la comunidad académica. Conecta,
                colabora y desarrolla proyectos de investigación de excelencia.
              </p>
            </div>
            {/* FIN Contenedor del Título Principal y Descripción */}
            {/* Sección de Inscripción para Académicos/as (a la derecha en lg) */}
            <div className="flex flex-col items-center lg:items-end justify-center gap-4 max-w-sm lg:w-1/2">
              {" "}
              {/* Ancho limitado para que el botón no sea demasiado ancho en lg */}
              <p className="text-lg md:text-xl font-semibold text-slate-700 text-center lg:text-right">
                ¿Eres académico/a y quieres colaborar?
              </p>
              <Button
                onClick={handleInscripcionAcademicoClick}
                className="bg-gradient-to-r cursor-pointer from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg uppercase w-full sm:w-auto"
              >
                Inscribe tus Colaboraciones
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            {/* FIN Sección de Inscripción */}
          </div>
          {/* FIN Contenedor Flex para el Título Principal y la Sección de Inscripción */}

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 overflow-hidden bg-white"
                  onClick={() => handleServiceClick(service.path)}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-90 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  {/* Content Section */}
                  <CardContent className="p-4">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sky-600 group-hover:text-sky-700 font-semibold transition-colors text-sm">
                        <span className="mr-1.5">Explorar</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}