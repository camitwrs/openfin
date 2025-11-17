"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Bell,
  Filter,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================
// DATOS DE EVENTOS - Modificar aquí para actualizar contenido
// ============================================

const upcomingEvents = [
  {
    id: 1,
    title: "Seminario Conecta Talento - Feria Laboral 2025",
    description:
      "Seminario de empleabilidad con talleres prácticos, feria empresarial con 45 empresas, charlas inspiradoras y networking directo con reclutadores.",
    day: "15",
    month: "Diciembre",
    year: "2025",
    time: "09:00 - 18:00 hrs",
    location: "Auditorio Central PUCV, Valparaíso",
    capacity: "300 cupos disponibles",
    category: "Conecta Talento",
    categoryColor: "purple",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    featured: true,
    tags: ["Destacado", "Conecta Talento"],
    link: "#",
  },
  {
    id: 2,
    title: "Presentación de proyectos Academia I+D - Semestre 2",
    description:
      "Los equipos de las Academias I+D presentarán los resultados de sus proyectos de investigación aplicada desarrollados durante el semestre.",
    day: "20",
    month: "Diciembre",
    year: "2025",
    time: "15:00 - 19:00 hrs",
    location: "Sala de Innovación, Edificio OPENFIN",
    category: "Academias I+D",
    categoryColor: "green",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    featured: false,
    tags: ["Academias I+D"],
    link: "#",
  },
  {
    id: 3,
    title: "Kick-off Venture Studio 2026 - Generación 3",
    description:
      "Inicio oficial del programa Venture Studio 2026. Bienvenida a los equipos seleccionados, presentación de mentores y primera sesión de trabajo.",
    day: "10",
    month: "Enero",
    year: "2026",
    time: "10:00 - 14:00 hrs",
    location: "Espacio de Co-working OPENFIN",
    category: "Venture Studio",
    categoryColor: "orange",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    featured: false,
    tags: ["Venture Studio"],
    link: "#",
  },
  {
    id: 4,
    title: "Taller: Validación de modelos de negocio",
    description:
      "Taller práctico sobre metodologías de validación de modelos de negocio para emprendimientos de base científico-tecnológica.",
    day: "25",
    month: "Enero",
    year: "2026",
    time: "16:00 - 19:00 hrs",
    location: "Sala 301, Edificio Ingeniería",
    category: "Academia EBCT",
    categoryColor: "purple",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    featured: false,
    tags: ["Academia EBCT"],
    link: "#",
  },
  {
    id: 5,
    title: "Lanzamiento Desafío CMF 2026 - Convocatoria abierta",
    description:
      "Presentación oficial de los nuevos desafíos CMF 2026 y apertura del proceso de postulación para equipos académicos.",
    day: "5",
    month: "Febrero",
    year: "2026",
    time: "11:00 - 13:00 hrs",
    location: "Auditorio Principal PUCV",
    category: "Desafíos",
    categoryColor: "cyan",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-500",
    featured: false,
    tags: ["Desafíos"],
    link: "#",
  },
];

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <div className="bg-blue-600 text-white py-2 text-center text-sm">
        <Bell className="inline-block w-4 h-4 mr-2" />
        Mantente informado sobre las últimas actividades y eventos de OPENFIN
        <Button
          variant="outline"
          size="sm"
          className="ml-4 text-blue-600 bg-white hover:bg-gray-100 text-xs px-3 py-1"
        >
          Suscribirse
        </Button>
      </div> */}

      {/* Hero Section */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mt-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl   font-extrabold text-gray-900 mb-6 leading-tight text-balance">
              Próximos Eventos y Actividades
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explora los eventos, seminarios, talleres y actividades
              programadas. Inscríbete y participa en las oportunidades del
              ecosistema OPENFIN.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Todos los eventos
              </h2>
              {/* <Button
              variant="outline"
              size="sm"
              className="flex items-center bg-transparent"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtrar por categoría
            </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Upcoming Events */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Próximos eventos
              </h2>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className={`${
                      event.featured
                        ? "border-2 border-blue-200 shadow-xl"
                        : "border border-gray-200"
                    } hover:shadow-2xl transition-shadow`}
                  >
                    <CardContent className={event.featured ? "p-8" : "p-6"}>
                      <div className="grid md:grid-cols-5 gap-6">
                        <div
                          className={`md:col-span-1 flex flex-col items-center justify-center bg-gradient-to-br ${event.gradientFrom} ${event.gradientTo} rounded-xl p-6 text-white`}
                        >
                          <div
                            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1`}
                          >
                            {event.day}
                          </div>
                          <div className="text-sm uppercase tracking-wide">
                            {event.month}
                          </div>
                          <div className="text-xs mt-1 opacity-80">
                            {event.year}
                          </div>
                        </div>
                        <div className="md:col-span-4">
                          <div className="flex items-center space-x-2 mb-3">
                            {event.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`bg-${event.categoryColor}-100 text-${event.categoryColor}-700 text-xs px-3 py-1 rounded-full font-semibold`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3
                            className={`${
                              event.featured ? "text-2xl" : "text-xl"
                            } font-bold text-gray-900 mb-3`}
                          >
                            {event.title}
                          </h3>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600 text-sm">
                              <Clock
                                className={`w-4 h-4 mr-2 text-${event.categoryColor}-600`}
                              />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin
                                className={`w-4 h-4 mr-2 text-${event.categoryColor}-600`}
                              />
                              <span>{event.location}</span>
                            </div>
                            {event.capacity && (
                              <div className="flex items-center text-gray-600 text-sm">
                                <Users
                                  className={`w-4 h-4 mr-2 text-${event.categoryColor}-600`}
                                />
                                <span>{event.capacity}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>
                          <div className="flex space-x-3">
                            {event.featured ? (
                              <>
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                  Inscribirse
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="outline">Ver detalles</Button>
                              </>
                            ) : (
                              <Button variant="outline" size="sm">
                                {event.id === 2
                                  ? "Ver agenda"
                                  : event.id === 3
                                  ? "Más información"
                                  : event.id === 4
                                  ? "Inscribirse"
                                  : "Agregar al calendario"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
