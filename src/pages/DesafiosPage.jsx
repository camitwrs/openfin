// src/pages/DesafiosPage.jsx
// React-Vite App

import {
  Users,
  DollarSign,
  Handshake,
  ArrowRight,
  Mail,
  Calendar,
  Edit,
  Send,
  CheckCircle,
  Trophy,
  BellRing,
  Download, // Importamos el icono de descarga
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
// Tus imágenes existentes para las cards
import equiposimg from "../assets/equipos.webp";
import financiamientoimg from "../assets/financiamiento.webp";
import partnersimg from "../assets/partners.webp";
import fondodesafios from "../assets/fondo-desafios.png";
import cmf from "../assets/cmf-recortado.png";
import nano from "../assets/nano-recortado.png";
import matchup from "../assets/matchup-recortado.png";

import imagenCronograma from "../assets/Esquema_OpenFin.svg";

// Imágenes específicas para la sección de detalles
import cmfDetalleLogo from "../assets/cmf-morado.png";
import nanoDetalleLogo from "../assets/nano-small.png";
import matchupDetalleLogo from "../assets/matchup-azul-recortado.png";

import FI3_image from "../assets/imagen_fondo_concursable.png";

import { useRef } from "react";

// Nuevo componente de línea de tiempo
const Timeline = ({ timelineItems }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center py-8 relative">
      {/* Línea principal */}
      <div
        className={`
          absolute sm:top-1/2 sm:left-0 
          ${
            timelineItems.length > 1
              ? "bg-gradient-to-r sm:bg-gradient-to-b"
              : ""
          }
          from-blue-400 to-cyan-400 
          transform sm:-translate-y-1/2 z-0
          ${/* Horizontal en desktop */ ""}
          sm:w-full sm:h-0.5 
          ${/* Vertical en mobile */ ""}
          w-0.5 h-full sm:h-0.5
        `}
      ></div>

      {timelineItems.map((item, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center text-center px-4 py-4 z-10 relative"
        >
          <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center shadow-md text-blue-600">
            {item.icon}
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-sm text-sky-800">{item.title}</h4>
            <p className="text-xs text-slate-600">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function DesafiosPage() {
  const navigate = useNavigate();

  // Referencia para la sección de inscripción para hacer scroll
  const inscripcionRef = useRef(null);

  // Referencias para las secciones a las que haremos scroll desde las cards
  const refs = {
    cmf: useRef(null),
    nano: useRef(null),
    abierto: useRef(null),
  };

  // Función para hacer scroll a la sección de inscripción
  const scrollToInscripcion = () => {
    if (inscripcionRef.current) {
      inscripcionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Array de servicios/desafíos con sus detalles
  const services = [
    {
      id: "cmf", // ID para el scroll y el mapeo de detalles
      title: "DESAFÍO CMF",
      description:
        "La Comisión para el Mercado Financiero (CMF) es un servicio público de carácter técnico que vela por el correcto funcionamiento, desarrollo y estabilidad del mercado financiero, incluyendo los mercados de valores, seguros, bancos e instituciones financieras.",
      image: fondodesafios, // Imagen de fondo para la card
      secondaryLogo: cmf, // Logo CMF para la card
      gradient: "from-blue-700 to-blue-100", // Gradiente para la card
      details: {
        logo: cmfDetalleLogo, // Logo específico para la sección de detalle CMF
        context: {
          title: "Contexto",
          description:
            "En 2025 entró en vigencia de NCG 461 que obliga la inclusión de información acerca de factores Ambientales, Sociales y de Gobierno Corporativo (ASG) en los reportes de las entidades del mercado financiero.",
        },
        report: {
          title: "Reporte de las empresas",
          items: [
            "Heterogeneidad de los Datos",
            "Información no estructurada.",
            "Calidad de los Datos",
            "Diferentes tecnologías para generar datos ASG",
            "Falta de Conocimiento para reportar",
          ],
        },
        mainChallenge: {
          title: "Desafíos para la CMF",
          description:
            "Generar una herramienta SupTech (Supervision Technology) que ayude a la CMF a gestionar el cumplimiento normativo en cuanto a ASG y NCG 461",
        },
        specificChallenges: [
          {
            title:
              "Desafío 1: Chatbot para Consultas sobre Reglamentos Internos, Folletos Informativos y Otros Documentos",
            objective:
              "Objetivo Asistente virtual que permita realizar preguntas en lenguaje natural sobre Reglamentos Internos, Folletos Informativos y Documentos, facilitando su comprensión y fiscalización.",
          },
          {
            title:
              "Desafío 2: Extracción de Información ASG desde Reglamentos Internos, Folletos Informativos y Memorias Anuales",
            objective:
              "Extraer secciones relevantes sobre factores ASG desde documentos PDF estructurados, de forma automática.",
          },
          {
            title:
              "Desafío 3: Evaluación de Calidad, Alineamiento Normativo y Riesgo de Greenwashing",
            objective:
              "Diseñar una metodología que evalúe calidad y alineación de la divulgación ASG con la NCG 461 y estándares internacionales, integrando la detección temprana de greenwashing.",
          },
        ],
      },
    },
    {
      id: "nano",
      title: "DESAFÍO NANO TC",
      description:
        "NanoTC Chile SpA es una empresa de base científico-tecnológica (EBCT) dedicada a la producción de nanopartículas de cobre (NPCu) y de óxido de grafeno (OG) y al desarrollo de nuevas aplicaciones de estos productos en la industria.",
      image: fondodesafios,
      secondaryLogo: nano,
      gradient: "from-blue-700 to-blue-100",
      details: {
        logo: nanoDetalleLogo,
        context: {
          title: "Contexto",
          description:
            "Nano TC combina investigación, desarrollo e innovación (I+D+I), escalamiento y diseño de soluciones personalizadas. Trabaja en colaboración con la industria y centros de investigación para validar y aplicar nanomateriales como nanopartículas de cobre (NPCu) y óxido de grafeno (OG)",
        },
        applicationIndustry: {
          title: "Industrias aplicación",
          columns: [
            [
              "Lubricantes",
              "Pinturas",
              "Polímeros",
              "Sanitizantes",
              "Agroindustria",
            ],
            ["Construcción", "Energía"],
          ],
        },
        specificChallenges: [
          {
            title:
              "Desafío 1: Validar la acción anticorrosiva del óxido de grafeno en pinturas de base orgánica",
            objective:
              "Evaluar empíricamente el efecto protector (inhibidor de la corrosión) del óxido de grafeno (OG) incorporado como aditivo en pinturas de base orgánica, expuestas a ambientes agresivos (salinos o industriales), con el fin de evaluar futuras aplicaciones en recubrimientos protectores.",
          },
          {
            title:
              "Desafío 2: Validar la capacidad antifouling de nanopartículas de cobre (NPCu) en pinturas de base orgánica",
            objective:
              "Evaluar el efecto antifouling de las nanopartículas de cobre (NPCu), incorporadas como aditivo a pinturas de base orgánica, expuestas a ambientes agresivos (salinos o industriales) con el fin de sustituir a los biocidas tradicionales.",
          },
        ],
      },
    },
    {
      id: "abierto",
      title: "DESAFÍO ABIERTO",
      description:
        "Instancia orientada a que equipos académicos/as PUCV propongan sus propios desafíos en colaboración con la industria, a partir de oportunidades detectadas en el evento MatchUp u otras iniciativas de vinculación universidad–industria.",
      image: fondodesafios,
      secondaryLogo: matchup,
      gradient: "from-blue-700 to-blue-100",
      details: {
        logo: matchupDetalleLogo,
        context: {
          title: "Contexto",
          description:
            "Instancia orientada a que equipos académicos/as PUCV propongan sus propios desafíos en colaboración con la industria, a partir de oportunidades detectadas en el evento MatchUp u otras iniciativas de vinculación universidad–industria.",
        },
        specificChallenges: [],
      },
    },
  ];

  const timelineItems = [
    {
      icon: <BellRing className="w-8 h-8" />,
      title: "Inscripciones",
      date: "Hasta 29 de Agosto de 2025",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Charla Desafíos",
      date: "Fecha a confirmar",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Postulación",
      date: "Hasta 29 de Agosto de 2025",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Resultados",
      date: "5 de Septiembre de 2025",
    },
  ];

  // Modificar handleServiceClick para hacer scroll al ID del servicio
  const handleServiceClick = (serviceId) => {
    const targetRef = refs[serviceId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const BASES_CONCURSO_PDF_URL =
    "/archivos/bases-convocatoria-desafios-ingenieria-pucv-2025-v3.pdf";

  return (
    <div className="bg-slate-50 py-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/30 rounded-full -translate-y-40 translate-x-40"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-100/20 rounded-full translate-y-32 -translate-x-32"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center lg:items-start text-center lg:text-left">
            <div className="mb-8 lg:mb-0 lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-sky-900 mb-4 leading-tight">
                Desafíos de Ingeniería PUCV
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Espacio que articula desafíos de la industria con equipos
                académicos/as PUCV, para abordar necesidades reales mediante
                innovación, investigación aplicada y desarrollo tecnológico,
                fortaleciendo la colaboración universidad–industria.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end lg:text-right justify-center gap-4 lg:col-span-1">
              <p className="text-lg md:text-xl font-extrabold mt-2 text-sky-900">
                ¿Eres académico/a y te interesan los desafíos con la industria?
              </p>
              <Button
                onClick={scrollToInscripcion}
                className="bg-gradient-to-r cursor-pointer from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg uppercase w-full sm:w-auto"
              >
                PARTICIPA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-8">
              Concursos activos
            </h2>
            {/* Services Grid (cards superiores) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => {
                return (
                  <Card
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 overflow-hidden bg-white"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Badge
                        variant="default"
                        className="absolute bottom-12 left-3 z-30 bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Concurso
                      </Badge>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80 group-hover:opacity-80 transition-opacity duration-300 z-10`}
                      ></div>
                      {service.secondaryLogo && (
                        <img
                          src={service.secondaryLogo}
                          alt={`${service.title} Logo`}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-20 object-contain z-20"
                        />
                      )}
                      <div className="absolute bottom-4 left-4 z-30">
                        <h3 className="text-2xl font-bold text-white tracking-wide">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sky-600 group-hover:text-sky-700 font-semibold transition-colors text-sm">
                          <span className="mr-1.5 font-bold">Explorar</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {services.map(
              (service) =>
                service.details && (
                  <div
                    key={service.id}
                    ref={refs[service.id]}
                    className="max-w-7xl mx-auto px-8 py-8 bg-white shadow-md rounded-lg mb-16"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                      <div className="bg-[#3D82EB] text-white px-4 py-2 rounded-md font-extrabold text-xl mb-4 md:mb-0">
                        {service.title}
                      </div>
                      {service.details.logo && (
                        <img
                          src={service.details.logo}
                          alt={`${service.title} Logo`}
                          className="h-12"
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div
                        className={
                          !service.details.report &&
                          !service.details.applicationIndustry
                            ? "md:col-span-full"
                            : ""
                        }
                      >
                        <h2 className="text-xl font-extrabold text-[#3D82EB] mb-2">
                          {service.details.context.title}
                        </h2>
                        <p className="text-sky-800 leading-relaxed">
                          {service.details.context.description}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-[#3D82EB] mb-2">
                          {service.details.report?.title ||
                            service.details.applicationIndustry?.title}
                        </h2>
                        {service.details.report && (
                          <ol className="list-decimal list-inside text-sky-800 leading-relaxed">
                            {service.details.report.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ol>
                        )}
                        {service.details.applicationIndustry && (
                          <div className="grid grid-cols-2 gap-x-8 text-sky-800 leading-relaxed">
                            {service.details.applicationIndustry.columns.map(
                              (column, colIndex) => (
                                <ul
                                  key={colIndex}
                                  className="list-disc list-inside"
                                >
                                  {column.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {service.details.mainChallenge && (
                      <div className="mb-8">
                        <h2 className="text-xl font-extrabold text-[#3D82EB] mb-4">
                          {service.details.mainChallenge.title}
                        </h2>
                        <p className="text-sky-600 text-md font-bold leading-relaxed">
                          {service.details.mainChallenge.description}
                        </p>
                      </div>
                    )}

                    <div className="space-y-6">
                      {service.details.specificChallenges.map(
                        (challenge, index) => (
                          <div
                            key={index}
                            className="bg-blue-50 px-6 py-4 rounded-lg"
                          >
                            <h3 className="text-md font-extrabold text-[#3D82EB] mb-2">
                              {challenge.title}
                            </h3>
                            <p className="text-sky-800 text-sm leading-relaxed">
                              {challenge.objective}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 mb-8 overflow-hidden">
              <div
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30"
                style={{
                  backgroundImage: `url(${FI3_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-between text-center md:text-left py-12">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h2 className="text-4xl md:text-5xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
                    FI3 Fondo Innovación e Interdisciplina en Ingeniería
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                    El objetivo del concurso es apoyar y promover el desarrollo
                    de equipos de investigación aplicada con un perfil
                    innovador, interdisciplinario y relacionados con ingeniería,
                    siempre en vinculación con la empresas u organizaciones.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <Button
                    onClick={scrollToInscripcion}
                    className="cursor-pointer mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-102 border-2 text-white font-bold px-10 py-6 rounded-lg shadow-lg transition-all duration-300 text-lg uppercase"
                  >
                    INSCRÍBETE AL DESAFÍO
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-extrabold text-[#3D82EB] mb-4">
                  Desafíos
                </h2>
                <ol className="list-decimal list-inside text-sky-800 leading-relaxed text-lg">
                  <li>Desafío CMF: Comisión para el Mercado Financiero</li>
                  <li>Desafío NanoTC: Nanotecnologías Chile S.p.A.</li>
                  <li>
                    Desafío Abierto: Para desafíos con cualquier empresa u
                    organización.
                    <div className="ml-6 mt-4 border-l-4 border-sky-500 pl-4">
                      <h4 className="text-md font-bold text-sky-600 mb-2">
                        Postulantes
                      </h4>
                      <p className="text-slate-700 text-base">
                        Académicos, profesionales y estudiantes de la PUCV. Ver
                        más detalle en{" "}
                        <a
                          href={BASES_CONCURSO_PDF_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:underline font-semibold"
                        >
                          bases concursables
                        </a>
                        .
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <a
                href={BASES_CONCURSO_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-bold px-6 py-4 rounded-md shadow-md transition-colors text-lg uppercase bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-102 border-2 text-white flex items-center justify-center text-center"
              >
                BASES DEL CONCURSO
              </a>
            </div>
            {/* Proceso de postulación - Cronograma */}
            <div ref={inscripcionRef} className="mb-12 pt-8">
              <h2 className="text-2xl font-extrabold text-[#3D82EB] mb-6">
                Proceso de postulación
              </h2>
              <div className="space-y-4 text-sky-800 text-lg leading-relaxed mb-8">
                <p>
                  <span className="font-bold">1) Inscripciones:</span> Para
                  participar inscríbete para mostrar tu interés en uno o varios
                  desafíos, aún no es necesario que tengas un equipo o proyecto.
                </p>
                <p>
                  <span className="font-bold">2) Charla Desafíos: </span>
                  Sesión online donde las empresas presentarán sus desafíos y
                  podrán contestar dudas de los participantes.
                </p>
                <p>
                  <span className="font-bold">3) Postulación: </span>
                  Descarga el formulario de postulación a continuación,
                  complétalo y envíalo al correo electrónico{" "}
                  <span className="font-semibold text-blue-600">
                    openfin@pucv.cl
                  </span>
                  .
                </p>
                <p>
                  <span className="font-bold">4) Resultados:</span> Los
                  resultados se comunicarán el{" "}
                  <span className="font-bold">
                    Viernes 5 de Septiembre de 2025.
                  </span>
                </p>
              </div>

              <Timeline timelineItems={timelineItems} />

              {/* Botón de descarga del formulario */}
              <div className="flex justify-center mt-8 px-4">
                <a
                  href="/archivos/POSTULACIÓN DESAFÍOS DE INGENIERÍA 2025 (11082025).docx"
                  download
                  className="inline-block w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg uppercase">
                    <Download className="mr-2 h-5 w-5" />
                    Descargar Formulario
                  </Button>
                </a>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
              <h2 className="text-2xl font-extrabold text-[#3D82EB] mb-4">
                Financiamiento
              </h2>
              <p className="text-lg text-sky-800 leading-relaxed">
                El monto por financiar es de hasta{" "}
                <span className="font-bold text-sky-900">$500.000</span> por
                proyecto. Se financiarán hasta un máximo de 10 proyectos
                distribuidos entre todas las categorías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
