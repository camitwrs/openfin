import React from "react";
import {
  ArrowLeft,
  HelpCircle,
  Users,
  BookOpen,
  Presentation,
  User,
  FileText,
  FlaskConical, // Nuevo icono principal para I+D
  TrendingUp, // Icono para métricas
  ClipboardCheck, // Icono para métricas
  ArrowRight,
} from "lucide-react";
// Asumo que estos componentes existen en el entorno
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

export default function AcademiaIDPage() {
  const navigate = useNavigate();

  // Función para volver a la página anterior
  const handleBackClick = () => {
    navigate(-1);
  };

  const menuItems = [
    {
      title: "¿Qué es I+D?",
      icon: HelpCircle,
      description:
        "Conoce los fundamentos de Investigación y Desarrollo y su ciclo.",
      path: "",
      badge: "Conceptos",
    },
    {
      title: "Grupos de Investigación",
      icon: Users,
      description:
        "Explora los grupos de investigación activos y sus líneas de trabajo.",
      path: "",
      badge: "Colaboración",
    },
    {
      title: "Temas de Tesis en I+D Aplicada",
      icon: BookOpen,
      description:
        "Desarrolla tu tesis en proyectos de investigación aplicada y real.",
      path: "",
      badge: "Academia",
    },
    {
      title: "Charlas y Talleres de Proyectos",
      icon: Presentation,
      description:
        "Participa en eventos sobre proyectos de investigación e innovación (I+D+i).",
      path: "",
      badge: "Eventos",
    },
    {
      title: "Financiamiento de Proyectos", // Lo hago especial ya que es un CTA importante
      icon: TrendingUp,
      description:
        "Descubre fondos y convocatorias para tus iniciativas de I+D.",
      path: "",
      badge: "Fondos",
    },
    {
      title: "Postula tu Proyecto",
      icon: FileText,
      description:
        "Envía tu aplicación para iniciar nuevos proyectos de I+D en la universidad.",
      path: "",
      badge: "Aplicar",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Sección Hero/Cabecera - Tono Académico (Azul Oscuro/Verde) */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-cyan-800 to-cyan-900 border-b border-cyan-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative text-white">
          {/* Botón de Volver */}
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="cursor-pointer absolute top-0 left-0 flex items-center gap-1.5 text-white hover:text-cyan-700 transition-colors px-3 py-2 text-sm sm:text-base font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Regresar</span>
          </Button>

          <FlaskConical className="w-16 h-16 mx-auto text-white mb-4 p-2 rounded-full bg-white/10" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            Academia I+D
          </h1>

          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 font-light text-cyan-100">
            El portal para impulsar la{" "}
            <strong>Investigación, Desarrollo e Innovación (I+D+i)</strong>{" "}
            aplicada en la comunidad universitaria.
          </p>

          {/* <Button
            asChild
            size="lg"
            className="bg-cyan-400 text-cyan-900 hover:bg-cyan-300 shadow-xl transition-all duration-300 transform hover:scale-[1.05] rounded-full px-10 py-3 text-lg font-bold"
          >
            <Link to={menuItems.find(item => item.title === "Postula tu Proyecto")?.path || "#"}>
              Postular un Proyecto
              <FileText className="ml-3 h-5 w-5" />
            </Link>
          </Button> */}
        </div>
      </section>

      {/* 3. Sección de Menú y Contenido Principal */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-900 mb-12">
            Conectando la Investigación con la Innovación Aplicada
          </h2>

          {/* Layout de 3 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Card a la izquierda - Diseño destacado (color principal) */}
            <Card className="lg:row-span-2 bg-gradient-to-br from-cyan-700 to-cyan-800 text-white border-0 shadow-2xl shadow-cyan-400/50 relative overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-extrabold mb-4 border-b border-cyan-400/50 pb-2">
                    El Ciclo de la I+D+i
                  </h3>
                  <p className="text-cyan-50 text-base leading-relaxed mb-6">
                    La Academia I+D es el motor de la{" "}
                    <strong>investigación aplicada</strong>
                    dentro de la universidad. Facilitamos recursos, conexiones y
                    plataformas para que tu curiosidad científica se convierta
                    en <strong>soluciones concretas y patentables</strong>.
                  </p>
                  <p className="text-cyan-50 text-base leading-relaxed mb-8">
                    Aquí encontrarás apoyo para formar{" "}
                    <strong>grupos de investigación</strong>, acceder a{" "}
                    <strong>financiamiento</strong> y publicar tus hallazgos,
                    contribuyendo al avance del conocimiento y al impacto social
                    y económico.
                  </p>
                  {/* <Button
                    size="lg"
                    asChild
                    className="bg-cyan-400 text-cyan-900 hover:bg-cyan-300 font-bold w-full sm:w-auto"
                  >
                    <Link to="#">
                      Ver Guía del Investigador
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button> */}
                </div>
              </CardContent>
            </Card>

            {/* Menu Grid - Diseño limpio y consistente */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <Link
                    key={index}
                    to={item.path || "#"}
                    className="block h-full"
                  >
                    <Card
                      className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shadow-md border-b-4 ${
                        item.isSpecial
                          ? "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-600 text-white border-0" // Especial: Gradiente
                          : "bg-white text-gray-800 border-cyan-600/80" // Normal: Fondo blanco con borde de color
                      }`}
                    >
                      <CardContent className="p-5 h-full flex flex-col relative overflow-hidden">
                        {/* Elemento de Badge - Arriba a la derecha */}
                        <div className="flex justify-end items-start absolute top-8 right-8 z-10">
                          <Badge
                            className={`py-1 px-3 text-xs ${
                              item.isSpecial
                                ? "bg-white/20 text-white border border-white/40"
                                : "bg-cyan-600 text-white border border-cyan-600"
                            } font-bold tracking-widest`}
                          >
                            {item.badge}
                          </Badge>
                        </div>

                        <div
                          className={`p-3 rounded-xl mb-4 shadow-sm inline-flex ${
                            item.isSpecial ? "bg-white/20" : "bg-cyan-600"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              item.isSpecial ? "text-white" : "text-cyan-100"
                            }`}
                          />
                        </div>

                        <div className="flex-1 relative z-10">
                          <h3
                            className={`text-xl font-bold mb-2 leading-tight ${
                              item.isSpecial ? "text-white" : "text-cyan-900"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${
                              item.isSpecial ? "text-white/80" : "text-gray-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        {/* Ícono de flecha para indicar que es clickeable */}
                        <div
                          className={`mt-4 self-end ${
                            item.isSpecial ? "text-white" : "text-cyan-700"
                          }`}
                        >
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
