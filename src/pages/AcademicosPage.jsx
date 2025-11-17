import React from "react";
import {
  GraduationCap,
  DollarSign,
  Users,
  FileText,
  ArrowRight,
  Lightbulb,
  Target,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Datos para los apoyos disponibles
const apoyos = [
  {
    title: "Oportunidades de Financiamiento",
    description:
      "Accede a fondos y becas para proyectos de investigación y desarrollo.",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    link: "/academicos/financiamiento",
  },
  {
    title: "Apoyos FIN",
    description:
      "Recursos y soporte técnico para innovar en tus proyectos académicos.",
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    link: "/academicos/apoyos-fin",
  },
  {
    title: "Perfil de Estudiantes",
    description:
      "Conoce el talento disponible para colaborar en tus investigaciones.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    link: "/academicos/perfil-estudiantes",
  },
  {
    title: "Solicita tu Apoyo",
    description:
      "Envía tu solicitud para obtener apoyo en tus proyectos académicos.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    link: "/academicos/solicitar-apoyo",
  },
];

const features = [
  {
    title: "Innovación Académica",
    description:
      "Fomenta la investigación aplicada y el desarrollo de soluciones innovadoras.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Colaboración Interdisciplinaria",
    description:
      "Trabaja con estudiantes y empresas para proyectos de alto impacto.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
];

export default function AcademicosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sección Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto text-blue-700 mb-4 animate-bounce-slow" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Académicos
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            Accede a recursos, financiamiento y colaboraciones para potenciar tu
            investigación y proyectos académicos.
          </p>
        </div>
      </section>

      {/* Sección de Apoyos Disponibles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
            Apoyos Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apoyos.map((apoyo, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-blue-500/80"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-blue-100/50 shadow-inner">
                      {apoyo.icon}
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-800 font-semibold">
                      Apoyo
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {apoyo.title}
                  </h3>

                  <p className="text-gray-600 flex-grow mb-4">
                    {apoyo.description}
                  </p>

                  <Button
                    asChild
                    variant="link"
                    className="text-blue-600 font-semibold p-0 h-auto self-start hover:text-blue-700"
                  >
                    <Link to={apoyo.link}>
                      Explorar 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
            Beneficios para Académicos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-10 bg-blue-600 mb-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center items-center mb-4">
            <GraduationCap className="w-10 h-10 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">
              ¿Necesitas más información?
            </h3>
          </div>
          <p className="text-gray-100 text-md max-w-2xl mx-auto mb-6">
            Si tienes dudas sobre los apoyos disponibles o cómo participar,
            contáctanos.
          </p>
    
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-800 hover:bg-gray-100 transition-all duration-300 shadow-xl rounded-full px-8 py-3 text-base font-semibold"
          >
            <Link to="mailto:openfin@ing.pucv.cl">openfin@ing.pucv.cl</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
