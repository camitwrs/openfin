import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Building2,
  ChevronRight,
  Users,
  ArrowRight,
  Calendar,
  DollarSign,
  Target,
  Award,
  Activity,
  ExternalLink,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

import { SoundWaveAnimation } from "../components/ui/sound-wave-animation";
import { GradientBackground } from "../components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Componente Counter mejorado con reset al salir del viewport
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se actualiza tanto al entrar como al salir del viewport
        setIsVisible(entry.isIntersecting);

        // Si sale del viewport, resetear el contador
        if (!entry.isIntersecting) {
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []); // Sin dependencias para evitar recrear el observer

  useEffect(() => {
    // Limpiar animación anterior si existe
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Función de easing para una animación más suave (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Extraer el número del string
      const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ""));
      const currentValue = Math.floor(easeOutQuart * numericEnd);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function para cancelar la animación
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, end, duration]); // Se ejecuta cada vez que isVisible cambia

  // Formatear el número para mostrar
  const formatNumber = () => {
    if (typeof end === "string") {
      // Si el valor original tiene símbolos especiales, los preservamos
      if (end.includes("$"))
        return `$${count.toLocaleString("es-CL")}${
          end.includes("M") ? "M" : ""
        }`;
      if (end.includes("%")) return `${count}%`;
      if (end.includes("+")) return `${count.toLocaleString("es-CL")}+`;
      return count.toLocaleString("es-CL");
    }
    return count.toLocaleString("es-CL");
  };

  return (
    <div
      ref={counterRef}
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sky-900 tabular-nums"
    >
      {formatNumber()}
      {suffix}
    </div>
  );
};

export default function Home() {
  const dashboardIndicators = [
    {
      icon: Users,
      label: "Estudiantes Activos",
      value: "450+",
      color: "text-cyan-600",
    },
    {
      icon: Building2,
      label: "Empresas Aliadas",
      value: "85",
      color: "text-sky-600",
    },
    {
      icon: Target,
      label: "Desafíos Activos",
      value: "32",
      color: "text-blue-600",
    },
    {
      icon: Award,
      label: "Proyectos Completados",
      value: "128",
      color: "text-indigo-600",
    },
    {
      icon: DollarSign,
      label: "Financiamiento Total",
      value: "$2.5M",
      color: "text-emerald-600",
    },
    {
      icon: Activity,
      label: "Tasa de Éxito",
      value: "87%",
      color: "text-purple-600",
    },
  ];

  const recentNews = [
    {
      id: 1,
      image:
        "https://portalinnova.cl/wp-content/uploads/2024/01/Nueva-alianza-entre-Generation-Chile-y-Gi-Group-Holding-permitira-conectar-empresas-con-profesionales-tecnologicos.jpg",
      title: "Nueva alianza con empresa tecnológica líder",
      description:
        "Firma de convenio estratégico para desarrollo de proyectos de innovación en IA y ML.",
      date: "10 Nov 2025",
      link: "/actividades/noticias/1",
    },
    {
      id: 2,
      image: "https://www.uandes.cl/wp-content/uploads/2025/09/ok-scaled.jpg",
      title: "Estudiantes ganan premio nacional de innovación",
      description:
        "Equipo de OpenFIN destaca en competencia nacional con proyecto de energías renovables.",
      date: "8 Nov 2025",
      link: "/actividades/noticias/2",
    },
    {
      id: 3,
      image:
        "https://construye2025.cl/wp-content/uploads/2024/01/IMG-20231213-WA0038.jpg",
      title: "Inauguración de nuevo laboratorio de prototipado",
      description:
        "Espacio equipado con tecnología de punta para desarrollo de proyectos estudiantiles.",
      date: "5 Nov 2025",
      link: "/actividades/noticias/3",
    },
  ];

  const activeContests = [
    {
      id: 1,
      name: "ANID Desafíos Públicos 2025",
      agency: "ANID - Agencia Nacional de Investigación y Desarrollo",
      type: "Externo",
      image: "https://www.conicyt.cl/pai/files/2020/01/ANIDweb-op-dhome5.jpg",
      startDate: "2025-10-15",
      endDate: "2025-12-20",
      funding: "50.000.000 CLP",
      link: "https://www.anid.cl",
    },
    {
      id: 2,
      name: "Fondo Interno - Innovación Social",
      agency: "PUCV",
      type: "Interno",
      image:
        "https://www.pucv.cl/uuaa/site/artic/20180313/imag/foto_0000000120180313111002.png",
      startDate: "2025-11-01",
      endDate: "2025-11-30",
      funding: "5.000.000 CLP",
      link: "/desafios/vigentes",
    },
    {
      id: 3,
      name: "CORFO Innovación Empresarial",
      agency: "CORFO",
      type: "Externo",
      image:
        "https://www.ine.gob.cl/images/default-source/default-album/corfoportada.tmb-detprensa.jpg?sfvrsn=ac8e282d_0", // Startups/innovación
      startDate: "2025-09-20",
      endDate: "2025-12-15",
      funding: "30.000.000 CLP",
      link: "https://www.corfo.cl",
    },
  ];

  const upcomingActivities = [
    {
      id: 1,
      name: "Workshop: Metodologías Ágiles para Proyectos de Innovación",
      image:
        "https://i.ytimg.com/vi/shILZRu_jVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHpujc9Oai4vR_TaqeL2G6jhPPoA",
      description:
        "Taller práctico sobre implementación de metodologías Scrum y Kanban en proyectos de I+D.",
      date: "2025-11-18",
      time: "15:00 - 18:00",
      location: "Auditorio Principal - Edificio Ingeniería",
      link: "/actividades/calendario/1",
    },
    {
      id: 2,
      name: "Pitch Day: Presentación de Proyectos a Empresas",
      image:
        "https://www.unne.edu.ar/wp-content/uploads/Pitch-Day-Unnetec.jpeg",
      description:
        "Estudiantes presentan sus soluciones innovadoras ante panel de empresas inversionistas.",
      date: "2025-11-25",
      time: "10:00 - 14:00",
      location: "Centro de Innovación PUCV",
      link: "/actividades/calendario/2",
    },
    {
      id: 3,
      name: "Charla Magistral: Tendencias en Transformación Digital",
      image:
        "https://i.ytimg.com/vi/f4hxi_oi_7o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDn_duaQeUyzluHUKzLl8NrPNCE2w",
      description:
        "Experto internacional comparte visión sobre el futuro de la industria 4.0.",
      date: "2025-12-02",
      time: "18:00 - 20:00",
      location: "Modalidad Híbrida (Presencial y Online)",
      link: "/actividades/calendario/3",
    },
  ];

  const scrollToContent = () => {
    const element = document.getElementById("impact-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen bg-slate-50 flex-col">
      <GradientBackground />

      {/* CSS para la animación de la flecha */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce 2s infinite ease-in-out;
        }
      `}</style>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[calc(100vh-64px)] py-20 overflow-hidden">
          <SoundWaveAnimation className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="flex flex-col items-center gap-2 text-center relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="hero-glow">
              <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl xl:text-9xl">
                <span className="text-blue-900">OPEN</span>
                <span className="text-sky-600">FIN</span>
              </h1>
            </div>

            <p className="leading-normal max-w-xl sm:max-w-2xl text-base sm:text-xl md:text-2xl glass-effect p-3 sm:p-4 text-sky-900 font-bold tracking-wider uppercase rounded-xl">
              Conecta tus Desafíos con el Talento Académico e Industrial
            </p>

            <p className="max-w-[36rem] leading-snug tracking-wider text-sky-700 text-sm sm:text-lg xl:text-xl mt-2">
              Canaliza el poder de la investigación universitaria para obtener
              soluciones concretas y de alto impacto.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-16 md:mt-10 w-full max-w-3xl px-4">
              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-cyan-500/90 to-cyan-600/80 hover:from-cyan-400 hover:to-cyan-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/estudiantes">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Soy Estudiante
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-sky-500/90 to-sky-600/80 hover:from-sky-400 hover:to-sky-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/empresas">
                  <Building2 className="mr-2 h-5 w-5" />
                  Soy Empresa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-blue-500/90 to-blue-600/80 hover:from-blue-400 hover:to-blue-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/academicos">
                  <Users className="mr-2 h-5 w-5" />
                  Soy Académico/a
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Flecha de Scroll Animada */}
          <button
            onClick={scrollToContent}
            className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow cursor-pointer group hidden md:block"
            aria-label="Scroll hacia abajo"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sky-700 text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                Descubre más
              </span>
              <div className="w-12 h-12 rounded-full bg-sky-600/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-sky-600/30 transition-colors">
                <ChevronDown className="w-6 h-6 text-sky-700 group-hover:text-sky-800" />
              </div>
            </div>
          </button>
        </section>

        {/* Statistics Section - Inspirado en tu otro proyecto */}
        <section id="impact-section" className="py-16 md:py-24 ">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 mb-4">
                Impacto que Transforma
              </h2>
              <p className="text-lg md:text-xl text-sky-700 max-w-3xl mx-auto">
                Datos reales de una comunidad que innova y conecta talento con
                oportunidades
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {dashboardIndicators.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 inline-block">
                    <stat.icon
                      className={`w-12 h-12 md:w-16 md:h-16 ${stat.color} opacity-80`}
                    />
                  </div>
                  <Counter end={stat.value} />
                  <p className="mt-3 text-lg md:text-xl text-sky-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900">
                Noticias Recientes
              </h2>
              <Link
                to="/actividades/noticias"
                className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2"
              >
                Ver todas <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <Card
                  key={news.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg text-sky-900 line-clamp-2">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-sky-500">
                      {news.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-sky-700 line-clamp-3">
                      {news.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={news.link}
                      className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2 text-sm"
                    >
                      Leer más <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Active Contests Section - Bento Grid Dinámico con mejoras móvil */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50/50 to-blue-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900">
                Concursos Vigentes
              </h2>
              <Link
                to="/desafios/vigentes"
                className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2"
              >
                Ver todos <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[320px] md:auto-rows-[260px]">
              {[...activeContests]
                .sort((a, b) => {
                  const getNumericValue = (funding) => {
                    const numeric = parseFloat(funding.replace(/[^0-9.]/g, ""));
                    return funding.includes("M") ? numeric * 1000000 : numeric;
                  };
                  return (
                    getNumericValue(b.funding) - getNumericValue(a.funding)
                  );
                })
                .map((contest, index) => (
                  <div
                    key={contest.id}
                    className={`
              relative p-2 overflow-hidden bg-white rounded-2xl group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300
              ${index === 0 ? "md:col-span-2 lg:col-span-4 lg:row-span-2" : ""}
              ${index === 1 ? "lg:col-span-2 lg:row-span-1" : ""}
              ${index === 2 ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : ""}
            `}
                  >
                    {/* Imagen de fondo */}
                    <img
                      src={contest.image}
                      alt={contest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay con gradiente más oscuro */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Contenido */}
                    <div className="relative h-full p-5 md:p-6 pb-6 md:pb-8 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${
                              contest.type === "Interno"
                                ? "bg-cyan-500 text-white"
                                : "bg-blue-500 text-white"
                            }`}
                          >
                            {contest.type}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3
                          className={`font-bold text-white leading-tight ${
                            index === 0
                              ? "text-2xl sm:text-3xl md:text-4xl line-clamp-2"
                              : "text-lg sm:text-xl md:text-2xl line-clamp-2"
                          }`}
                        >
                          {contest.name}
                        </h3>

                        <p
                          className={`text-white/80 line-clamp-2 ${
                            index === 0
                              ? "text-sm sm:text-base"
                              : "text-xs sm:text-sm"
                          }`}
                        >
                          {contest.agency}
                        </p>

                        {/* Fechas para TODOS los cards */}
                        <div
                          className={`flex items-center gap-2 ${
                            index === 0 ? "flex-wrap" : "flex-col sm:flex-row"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg ${
                              index === 0 ? "px-3 py-2" : "px-2 py-1.5 text-xs"
                            }`}
                          >
                            <Calendar
                              className={`text-white ${
                                index === 0 ? "w-4 h-4" : "w-3 h-3"
                              }`}
                            />
                            <span
                              className={`text-white ${
                                index === 0 ? "text-sm" : "text-xs"
                              }`}
                            >
                              {new Date(contest.startDate).toLocaleDateString(
                                "es-CL",
                                {
                                  day: "numeric",
                                  month: "short",
                                }
                              )}
                            </span>
                          </div>

                          <span
                            className={`text-white/50 ${
                              index === 0 ? "" : "hidden sm:inline"
                            }`}
                          >
                            →
                          </span>

                          <div
                            className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg ${
                              index === 0 ? "px-3 py-2" : "px-2 py-1.5 text-xs"
                            }`}
                          >
                            <Clock
                              className={`text-red-400 ${
                                index === 0 ? "w-4 h-4" : "w-3 h-3"
                              }`}
                            />
                            <span
                              className={`text-white ${
                                index === 0 ? "text-sm" : "text-xs"
                              }`}
                            >
                              {new Date(contest.endDate).toLocaleDateString(
                                "es-CL",
                                {
                                  day: "numeric",
                                  month: "short",
                                }
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Financiamiento y botón */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-2.5 rounded-lg border border-emerald-400/30">
                            <DollarSign
                              className={`text-emerald-400 flex-shrink-0 ${
                                index === 0
                                  ? "w-5 h-5 sm:w-6 sm:h-6"
                                  : "w-4 h-4 sm:w-5 sm:h-5"
                              }`}
                            />
                            <span
                              className={`text-emerald-400 font-bold ${
                                index === 0
                                  ? "text-lg sm:text-2xl"
                                  : "text-base sm:text-lg"
                              }`}
                            >
                              {contest.funding}
                            </span>
                          </div>

                          <a
                            href={contest.link}
                            target={
                              contest.type === "Externo" ? "_blank" : "_self"
                            }
                            rel={
                              contest.type === "Externo"
                                ? "noopener noreferrer"
                                : ""
                            }
                            className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-sky-900 px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm group/link w-full sm:w-auto"
                          >
                            <span>Ver más</span>
                            <ExternalLink
                              className={`transition-transform group-hover/link:translate-x-1 ${
                                index === 0
                                  ? "w-4 h-4 sm:w-5 sm:h-5"
                                  : "w-4 h-4"
                              }`}
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Efecto de brillo al hacer hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Upcoming Activities Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900">
                Próximas Actividades
              </h2>
              <Link
                to="/actividades/calendario"
                className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2"
              >
                Ver calendario <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-40 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg text-sky-900 line-clamp-2">
                      {activity.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-sky-700 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-sky-600">
                        <Calendar className="w-4 h-4 text-sky-600" />
                        <span>
                          {new Date(activity.date).toLocaleDateString("es-CL", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sky-600">
                        <Clock className="w-4 h-4 text-sky-600" />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sky-600">
                        <MapPin className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">
                          {activity.location}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={activity.link}
                      className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-2 text-sm"
                    >
                      Más información <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
