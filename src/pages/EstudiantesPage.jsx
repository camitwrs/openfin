import React from "react";
import {
  GraduationCap,
  Sparkles,
  Zap,
  Briefcase,
  Users,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
// Asegúrate de que estas rutas sean correctas en tu proyecto
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Datos de las actividades dirigidas a estudiantes
const studentActivities = [
  {
    title: "Academias I+D",
    description:
      "Programas intensivos para el desarrollo de habilidades en Investigación y Desarrollo (I+D), enfocados en la innovación tecnológica.",
    icon: <FlaskConical className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/academia-id",
    badge: "Investigación",
  },
  {
    title: "Academia EBCT",
    description:
      "Formación especializada en Emprendimiento de Base Científico Tecnológica, transformando ideas innovadoras en startups viables.",
    icon: <Zap className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/academia-ebct",
    badge: "Emprendimiento",
  },
  {
    title: "Venture Studio",
    description:
      "Plataforma de co-creación y lanzamiento de empresas, donde el talento universitario colabora directamente con la industria.",
    icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/venture-studio",
    badge: "Innovación",
  },
  {
    title: "Conecta Industria",
    description:
      "Eventos de networking y ferias de oportunidades que vinculan directamente a estudiantes con empresas en busca de talento especializado.",
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/conecta-talento",
    badge: "Vinculación",
  },
];

const EstudiantesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sección Hero para Estudiantes */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-cyan-50 to-cyan-100 border-b border-cyan-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto text-cyan-700 mb-4 animate-bounce-slow" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-900 mb-4 tracking-tight">
            Despega tu Carrera
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            Accede a las mejores oportunidades de{" "}
            <strong>I+D, Emprendimiento e Innovación</strong> que conectan a la
            universidad con el sector productivo.
          </p>

          
        </div>
      </section>

      {/* Sección de Actividades Visibles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-900 mb-12">
            Actividades para Estudiantes
          </h2>

          {/* Grid de Actividades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentActivities.map((activity, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-cyan-500/80"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-cyan-100/50 shadow-inner">
                      {activity.icon}
                    </div>
                    <Badge className="bg-cyan-500/10 text-cyan-800 font-semibold">
                      {activity.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-cyan-900 mb-3">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 flex-grow mb-4">
                    {activity.description}
                  </p>

                  {/* Botón de Enlace */}
                  <Button
                    asChild
                    variant="link"
                    className="text-cyan-600 font-semibold p-0 h-auto self-start hover:text-cyan-700"
                  >
                    <Link to={activity.link}>
                      Explorar Actividad
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="py-10 bg-cyan-600 mb-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center items-center mb-4">
            <Users className="w-10 h-10 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">
             ¿Necesitas más información?
            </h3>
          </div>
          <p className="text-gray-100 text-md max-w-2xl mx-auto">
            ¿Tienes dudas sobre cómo participar o qué actividad es ideal para tu
            perfil?
          </p>
          <p className="text-gray-100 font-bold text-lg mb-6 max-w-2xl mx-auto uppercase">
            Contáctanos.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-cyan-800 hover:bg-gray-100 transition-all duration-300 shadow-xl rounded-full px-8 py-3 text-base font-semibold"
          >
            <Link to="mailto:openfin@ing.pucv.cl">openfin@ing.pucv.cl</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EstudiantesPage;
