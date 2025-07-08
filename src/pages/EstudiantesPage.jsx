import {
  Building2,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

export default function EstudiantesPage() {
  const navigate = useNavigate();

  const academicPaths = [
    {
      title: "Connecta Industria",
      subtitle: "Conecta con el Mundo Empresarial",
      description:
        "Descubre oportunidades de prácticas, empleos y proyectos colaborativos con empresas líderes en tu área de estudio.",
      icon: Building2,
      path: "/estudiantes/connecta-industria",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Prácticas Profesionales",
        "Ofertas de Empleo",
        "Proyectos Empresariales",
      ],
      decorativeIcon: Briefcase,
    },
    {
      title: "Academia I+D",
      subtitle: "Investigación y Desarrollo",
      description:
        "Participa en proyectos de investigación, desarrolla tu tesis y colabora con grupos de investigación de vanguardia.",
      icon: Lightbulb,
      path: "/estudiantes/academia-id", // Asegura que la ruta sea correcta
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Proyectos de Investigación",
        "Temas de Tesis",
        "Grupos de I+D",
      ],
      decorativeIcon: BookOpen,
    },
    {
      title: "Academia EBCT",
      subtitle: "Empresas de Base Científico-Tecnológica",
      description:
        "Explora el ecosistema de startups tecnológicas y empresas de base científica para impulsar tu carrera profesional.",
      icon: GraduationCap,
      path: "/estudiantes/academia-ebct", // Asegura que la ruta sea correcta
      gradient: "from-cyan-500 to-cyan-600",
      features: [
        "Startups Tecnológicas",
        "Innovación Aplicada",
        "Emprendimiento",
      ],
      decorativeIcon: Users,
    },
  ];

  const handlePathClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-slate-100 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration - reduje tamaños y traslaciones */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-100/20 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-100/20 rounded-full -translate-x-12 -translate-y-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10">
          {/* Header */}
          <div className="text-center mb-10">
            {" "}
            {/* Reduje el margen */}
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              {" "}
              {/* Reduje el tamaño y margen */}
              Estudiantes
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>{" "}
            {/* Reduje tamaño y margen */}
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {" "}
              {/* Reduje tamaño */}
              Tu puerta de entrada al mundo profesional y académico. Explora
              oportunidades que transformarán tu futuro.
            </p>
          </div>

          {/* Academic Paths Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {" "}
            {/* Reduje el gap */}
            {academicPaths.map((path, index) => {
              const IconComponent = path.icon;
              const DecorativeIcon = path.decorativeIcon;

              return (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 overflow-hidden bg-white"
                  onClick={() => handlePathClick(path.path)}
                >
                  {/* Header Section with Gradient */}
                  <div
                    className={`relative h-40 bg-gradient-to-br ${path.gradient} overflow-hidden`}
                  >
                    {" "}
                    {/* Reduje la altura */}
                    {/* Geometric Pattern Background - Mantuve el mismo tamaño relativo */}
                    <div className="absolute inset-0 opacity-20">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 100C50 50 100 150 150 100C200 50 250 150 300 100C350 50 400 150 400 100"
                          stroke="white"
                          strokeWidth="2"
                          opacity="0.3"
                        />
                        <path
                          d="M0 120C50 70 100 170 150 120C200 70 250 170 300 120C350 70 400 170 400 120"
                          stroke="white"
                          strokeWidth="1"
                          opacity="0.2"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="30"
                          stroke="white"
                          strokeWidth="1"
                          opacity="0.2"
                          fill="none"
                        />
                        <circle
                          cx="300"
                          cy="100"
                          r="20"
                          stroke="white"
                          strokeWidth="1"
                          opacity="0.3"
                          fill="none"
                        />
                      </svg>
                    </div>
                    {/* Main Icon */}
                    <div className="absolute top-4 left-4">
                      {" "}
                      {/* Reduje la posición */}
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-white" />{" "}
                        {/* Reduje el tamaño del icono */}
                      </div>
                    </div>
                    {/* Decorative Icon */}
                    <div className="absolute top-4 right-4">
                      {" "}
                      {/* Reduje la posición */}
                      <DecorativeIcon className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-colors duration-300" />{" "}
                      {/* Reduje el tamaño del icono */}
                    </div>
                    {/* Title */}
                    <div className="absolute bottom-4 left-4">
                      {" "}
                      {/* Reduje la posición */}
                      <h3 className="text-xl font-bold text-white mb-0.5">
                        {" "}
                        {/* Reduje el tamaño y margen */}
                        {path.title}
                      </h3>
                      <p className="text-white/80 text-xs font-medium">
                        {" "}
                        {/* Reduje el tamaño */}
                        {path.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-4">
                    {" "}
                    {/* Reduje el padding */}
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                      {" "}
                      {/* Reduje tamaño y margen */}
                      {path.description}
                    </p>
                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {" "}
                      {/* Reduje espaciado y margen */}
                      {path.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-slate-600" // Reduje tamaño
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 flex-shrink-0"></div>{" "}
                          {/* Reduje tamaño y margen */}
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold transition-colors text-sm">
                        {" "}
                        {/* Reduje tamaño */}
                        <span className="mr-1.5">Explorar</span>{" "}
                        {/* Reduje margen */}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                        {/* Reduje tamaño del icono */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-12">
            {" "}
            {/* Reduje margen */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
              {" "}
              {/* Reduje tamaño y margen */}
              <GraduationCap className="w-6 h-6 text-white" />{" "}
              {/* Reduje tamaño del icono */}
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              {" "}
              {/* Reduje tamaño y margen */}
              ¿Listo para comenzar tu journey académico?
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              {" "}
              {/* Reduje tamaño */}
              Cada camino te ofrece oportunidades únicas para crecer
              profesionalmente y contribuir al avance del conocimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
