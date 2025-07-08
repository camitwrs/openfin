import { Users, DollarSign, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
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

  return (
    <div className=" bg-slate-100 py-8">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration - Reduje tamaños y traslaciones */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-100/20 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10">
          <div className="text-center mb-12">
            {" "}
            {/* Reduje el margen inferior */}
            <h1 className="text-4xl lg:text-5xl font-bold text-sky-900 mb-4">
              {" "}
              {/* Reduje el tamaño del título y margen */}
              Académicos/as
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full mx-auto mb-6"></div>{" "}
            {/* Reduje el ancho, altura y margen */}
            <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {" "}
              {/* Reduje el tamaño del párrafo */}
              Plataforma integral para la comunidad académica. Conecta, colabora
              y desarrolla proyectos de investigación de excelencia.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {" "}
            {/* Reduje el gap */}
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
                    {" "}
                    {/* Reduje la altura de la imagen */}
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" // Ajusté la escala hover para ser menos agresiva
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-90 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4">
                      {" "}
                      {/* Reduje la posición */}
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        {" "}
                        {/* Reduje el tamaño del círculo del icono */}
                        <IconComponent className="w-5 h-5 text-white" />{" "}
                        {/* Reduje el tamaño del icono */}
                      </div>
                    </div>
                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4">
                      {" "}
                      {/* Reduje la posición */}
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {" "}
                        {/* Reduje el tamaño del título */}
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  {/* Content Section */}
                  <CardContent className="p-4">
                    {" "}
                    {/* Reduje el padding */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {" "}
                      {/* Reduje tamaño y margen */}
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sky-600 group-hover:text-sky-700 font-semibold transition-colors text-sm">
                        {" "}
                        {/* Reduje el tamaño del texto */}
                        <span className="mr-1.5">Explorar</span>{" "}
                        {/* Reduje margen */}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                        {/* Reduje el tamaño del icono */}
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
