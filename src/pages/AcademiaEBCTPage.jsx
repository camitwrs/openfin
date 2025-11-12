import React, { useEffect } from "react";
import {
  Plus,
  ArrowLeft,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Users,
  Rocket,
  FileText,
  Zap, // Icono principal de EBCT
  Award, // Icono para métricas
  Briefcase, // Icono para métricas
  ArrowRight, // Importar ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Importar Badge
import { Link, useNavigate } from "react-router-dom";

export default function AcademiaEBCTPage() {
  // Hook para asegurar que la página siempre comience arriba al montarse
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Función para volver a la página anterior
  const handleBackClick = () => {
    navigate(-1);
  };

  const menuItems = [
    {
      title: "¿Qué es una EBCT?",
      icon: BookOpen,
      description:
        "Conoce más sobre las Empresas de Base Científico Tecnológica y su impacto.",
      href: "",
      badge: "Conceptos",
    },
    {
      title: "Resultados de I+D",
      icon: Lightbulb,
      description:
        "Descubre los resultados de investigación y desarrollo con potencial de negocio.",
      href: "",
      badge: "Resultados",
    },
    {
      title: "Temas de Tesis en EBCT's",
      icon: GraduationCap,
      description:
        "Explora oportunidades de tesis en colaboración directa con empresas EBCT.",
      href: "",
      badge: "Academia",
    },
    {
      title: "Charlas y Talleres",
      icon: Users,
      description:
        "Participa en eventos y capacitaciones de expertos en emprendimiento.",
      href: "",
      badge: "Eventos",
    },

    {
      title: "Postula Aquí",
      icon: FileText,
      description:
        "Envía tu aplicación y únete a nuestro ecosistema de fundadores.",
      href: "",
      badge: "Aplicar",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Sección Hero/Cabecera */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-cyan-50 to-cyan-100 border-b border-cyan-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Botón de Volver */}
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="cursor-pointer absolute top-0 left-0 flex items-center gap-1.5 text-cyan-700 hover:text-cyan-900 transition-colors px-3 py-2 text-sm sm:text-base font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Regresar</span>
          </Button>
          <Zap className="w-12 h-12 mx-auto text-cyan-700 mb-4 animate-pulse-slow" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-900 mb-4 tracking-tight">
            Academia EBCT
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            Conectando la academia con el ecosistema empresarial de base
            científico-tecnológica.
          </p>

          {/* <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-700 hover:to-cyan-700 text-white shadow-lg transition-all duration-300 transform hover:scale-[1.03] rounded-full px-8 py-3 text-lg font-semibold"
          >
            <Link
              to={
                menuItems.find((item) => item.title === "Postula Aquí")?.href ||
                "#"
              }
            >
              Postular a Programas
              <FileText className="ml-3 h-5 w-5" />
            </Link>
          </Button> */}
        </div>
      </section>

      {/* 3. Sección de Menú y Contenido Principal */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-900 mb-12">
            Ecosistema EBCT: Conecta, Emprende y Escala
          </h2>

          {/* Layout de 3 columnas para alinear con I+D y la estructura anterior */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Card a la izquierda (adaptado para mostrar contenido de texto) */}
            <Card className="lg:row-span-2 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white border-0 shadow-xl relative overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">
                    Academia EBCT: De la Ciencia al Mercado
                  </h3>
                  <p className="text-cyan-50 text-base leading-relaxed mb-6">
                    Nuestra misión es{" "}
                    <strong>
                      transformar el conocimiento científico en valor
                      empresarial
                    </strong>
                    . Ofrecemos capacitación especializada, mentoría de
                    fundadores exitosos y acceso a capital para que
                    investigadores y estudiantes creen sus propias{" "}
                    <strong>
                      Empresas de Base Científico Tecnológica (EBCT)
                    </strong>
                    .
                  </p>
                  <p className="text-cyan-50 text-base leading-relaxed mb-6">
                    Si tienes un resultado de I+D con alto potencial de impacto,
                    la Academia te guía desde la validación técnica hasta la
                    estrategia de mercado y el levantamiento de inversión.
                    ¡Forma parte de la nueva generación de{" "}
                    <strong>emprendedores científicos</strong>!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Menu Grid (ocupa 2/3 del ancho en escritorio) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <Link key={index} to={item.href || "#"} className="block">
                    <Card
                      className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shadow-md border-b-4 ${
                        item.isSpecial
                          ? "bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 text-white border-0" // Especial: Gradiente
                          : "bg-white text-gray-800 border-cyan-500/80" // Normal: Fondo blanco con borde de color
                      }`}
                    >
                      <CardContent className="p-5 h-full flex flex-col relative overflow-hidden">
                        {/* Elemento de Badge */}
                        <div className="flex justify-end items-start  absolute top-8 right-8 z-10">
                          <Badge
                            className={`${
                              item.isSpecial
                                ? "bg-white/20 text-white"
                                : "bg-cyan-100 text-cyan-800"
                            } font-bold tracking-widest`}
                          >
                            {item.badge}
                          </Badge>
                        </div>

                        <div
                          className={`p-3 rounded-full mb-3 shadow-inner ${
                            item.isSpecial ? "bg-white/20" : "bg-cyan-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              item.isSpecial ? "text-white" : "text-cyan-700"
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
                          className={`mt-3 self-end ${
                            item.isSpecial ? "text-white" : "text-cyan-500"
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
