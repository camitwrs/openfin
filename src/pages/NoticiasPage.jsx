import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Newspaper,
  ArrowRight,
  Users,
  Tag,
  ExternalLink,
  Bell,
  Filter,
  ArrowLeft,
} from "lucide-react";

// ============================================
// DATOS DE NOTICIAS - Modificar aquí para actualizar contenido
// ============================================

// Noticia destacada principal
const featuredNews = {
  title: "OPENFIN lanza nueva convocatoria para Venture Studio 2026",
  description:
    "Abrimos las postulaciones para la próxima generación de startups que transformarán la industria. Conoce los requisitos, beneficios y cómo postular a este programa único de co-creación de empresas tecnológicas.",
  date: "15 de Noviembre, 2025",
  category: "Destacado",
  categoryColor: "blue",
  link: "#",
};

// Lista de noticias recientes
const newsArticles = [
  {
    id: 1,
    title: "Estudiantes PUCV desarrollan solución innovadora para CMF",
    description:
      "Un equipo de la Academia I+D presentó una plataforma de análisis de datos financieros que fue reconocida por la Comisión para el Mercado Financiero.",
    date: "10 Nov 2025",
    category: "Academias I+D",
    categoryColor: "green",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    icon: "newspaper",
    link: "#",
  },
  {
    id: 2,
    title: "Más de 300 estudiantes participaron en feria laboral",
    description:
      "El evento Conecta Talento reunió a 45 empresas y generó más de 200 oportunidades laborales para estudiantes de ingeniería PUCV.",
    date: "8 Nov 2025",
    category: "Conecta Talento",
    categoryColor: "purple",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    icon: "users",
    link: "#",
  },
  {
    id: 3,
    title: "Abierta convocatoria para Desafío NANO TC 2026",
    description:
      "El programa de nanotecnología busca equipos académicos para abordar desafíos tecnológicos de la industria nacional. Postulaciones hasta el 30 de noviembre.",
    date: "5 Nov 2025",
    category: "Desafíos",
    categoryColor: "orange",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    icon: "tag",
    link: "#",
  },
  {
    id: 4,
    title: "OPENFIN firma convenio con empresas tecnológicas",
    description:
      "Nuevas alianzas estratégicas amplían las oportunidades de colaboración entre academia e industria, beneficiando a estudiantes y académicos.",
    date: "2 Nov 2025",
    category: "Colaboración",
    categoryColor: "cyan",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-500",
    icon: "external-link",
    link: "#",
  },
  {
    id: 5,
    title: "Graduación de la primera generación de Academia EBCT",
    description:
      "20 estudiantes completaron exitosamente el programa de emprendimiento de base científico-tecnológica, presentando proyectos innovadores.",
    date: "30 Oct 2025",
    category: "Academia EBCT",
    categoryColor: "indigo",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-500",
    icon: "users",
    link: "#",
  },
  {
    id: 6,
    title: "OPENFIN recibe premio a la innovación universitaria",
    description:
      "El ecosistema OPENFIN fue reconocido a nivel nacional por su contribución al desarrollo de la innovación y el emprendimiento en educación superior.",
    date: "28 Oct 2025",
    category: "Reconocimiento",
    categoryColor: "yellow",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    icon: "tag",
    link: "#",
  },
];

export default function NoticiasPage() {
  // Helper function para obtener el icono correcto
  const getIcon = (iconName) => {
    switch (iconName) {
      case "newspaper":
        return <Newspaper className="w-16 h-16 text-white opacity-80" />;
      case "users":
        return <Users className="w-16 h-16 text-white opacity-80" />;
      case "tag":
        return <Tag className="w-16 h-16 text-white opacity-80" />;
      case "external-link":
        return <ExternalLink className="w-16 h-16 text-white opacity-80" />;
      default:
        return <Newspaper className="w-16 h-16 text-white opacity-80" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mt-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl   font-extrabold text-gray-900 mb-6 leading-tight text-balance">
              Últimas Noticias y Novedades
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre las novedades, logros y anuncios más recientes del
              ecosistema OPENFIN.
            </p>
          </div>
        </div>
      </section>

      {/* Noticias Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Noticia destacada
              </h2>
              <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-12 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Newspaper className="w-20 h-20 mx-auto mb-4 opacity-80" />
                      <p className="text-sm font-semibold opacity-90">
                        Imagen destacada
                      </p>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                        {featuredNews.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredNews.date}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredNews.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Leer más
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline">Compartir</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* News Grid */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Últimas noticias
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div
                      className={`bg-gradient-to-br ${article.gradientFrom} ${article.gradientTo} h-48 flex items-center justify-center`}
                    >
                      {getIcon(article.icon)}
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`bg-${article.categoryColor}-100 text-${article.categoryColor}-700 text-xs px-2 py-1 rounded-full font-semibold`}
                        >
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {article.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                        {article.description}
                      </CardDescription>
                      <Button
                        variant="link"
                        className="p-0 text-blue-600 hover:text-blue-700"
                      >
                        Leer más
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
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
