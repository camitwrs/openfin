import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Target,
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Handshake,
  FileText,
  MessageSquare,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

export default function ConectaTalentoPage() {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  // Mock data para talleres
  const talleres = [
    {
      id: 1,
      icono: FileText,
      titulo: "CV Efectivo",
      descripcion:
        "Aprende a crear un currículum que destaque tus fortalezas y capture la atención de reclutadores",
      contenido:
        "Técnicas de redacción, selección de logros clave y diseño profesional para maximizar tus oportunidades.",
      duracion: "2 horas",
    },
    {
      id: 2,
      icono: MessageSquare,
      titulo: "Entrevistas de Trabajo",
      descripcion:
        "Domina las técnicas de entrevista y aprende a responder preguntas difíciles con confianza",
      contenido:
        "Simulaciones prácticas, consejos para STAR method y manejo de preguntas comportamentales.",
      duracion: "2.5 horas",
    },
    {
      id: 3,
      icono: Users,
      titulo: "LinkedIn Profesional",
      descripcion:
        "Optimiza tu perfil en LinkedIn para atraer oportunidades laborales y conectar con profesionales",
      contenido:
        "Estrategias de networking, keywords efectivas y creación de contenido profesional.",
      duracion: "1.5 horas",
    },
  ];

  // Mock data para conferencias
  const conferencias = [
    {
      id: 1,
      imagen: "https://randomuser.me/api/portraits/men/32.jpg",
      nombre: "El Futuro del Trabajo Digital",
      locutor: "Andrés Escobar",
      rol: "CEO de TechInnovate",
      descripcion:
        "Exploraremos las tendencias tecnológicas que están transformando el mercado laboral y cómo prepararte para los desafíos del futuro.",
      hora: "10:00 - 10:45",
      ubicacion: "Auditorio Principal, Facultad de Ingeniería PUCV",
    },
    {
      id: 2,
      imagen: "https://randomuser.me/api/portraits/women/29.jpg",
      nombre: "De la Universidad al Mundo Empresarial",
      locutor: "María Rodríguez",
      rol: "Egresada PUCV, Gerente en GlobalCorp",
      descripcion:
        "Una egresada comparte su trayectoria desde la PUCV hasta posiciones de liderazgo, con consejos prácticos para la transición.",
      hora: "11:00 - 11:35",
      ubicacion: "Sala de Conferencias A, Facultad de Ingeniería PUCV",
    },
    {
      id: 3,
      imagen: "https://randomuser.me/api/portraits/men/7.jpg",
      nombre: "Emprendimiento e Innovación",
      locutor: "Juan López",
      rol: "Fundador de StartupChile",
      descripcion:
        "Descubre cómo transformar ideas innovadoras en oportunidades de negocio y el rol de la ingeniería en el emprendimiento.",
      hora: "12:00 - 12:40",
      ubicacion: "Auditorio Principal, Facultad de Ingeniería PUCV",
    },
  ];

  // Mock data para espacios de diálogo
  const espaciosDialogo = [
    {
      id: 1,
      icono: Building2,
      titulo: "Stands Empresariales",
      descripcion:
        "Espacios individuales para cada empresa donde podrás conocer sus proyectos y oportunidades",
      caracteristicas: [
        "Presentación de proyectos actuales",
        "Entrevistas informales",
        "Distribución de material informativo",
      ],
    },
    {
      id: 2,
      icono: Handshake,
      titulo: "Zona de Networking",
      descripcion:
        "Área abierta para conversaciones espontáneas y conexión con profesionales",
      caracteristicas: [
        "Coffee breaks y refrigerios",
        "Espacios de conversación",
        "Interacción con mentores",
      ],
    },
  ];

  // Mock data para empresas
  const empresas = [
    { id: 1, nombre: "EMPRESA 1" },
    { id: 2, nombre: "EMPRESA 2" },
    { id: 3, nombre: "EMPRESA 3" },
    { id: 4, nombre: "EMPRESA 4" },
    { id: 5, nombre: "EMPRESA 5" },
    { id: 6, nombre: "EMPRESA 6" },
    { id: 7, nombre: "EMPRESA 7" },
    { id: 8, nombre: "EMPRESA 8" },
  ];

  // Mock data para estadísticas
  const estadisticas = [
    { id: 1, valor: "50+", etiqueta: "Empresas participantes" },
    { id: 2, valor: "500+", etiqueta: "Estudiantes conectados" },
    { id: 3, valor: "85%", etiqueta: "Tasa de inserción laboral" },
  ];

  // Mock data para oportunidades laborales
  const oportunidades = [
    {
      id: 1,
      empresa: "TechCorp",
      logo: "https://placehold.co/50",
      posicion: "Desarrollador Frontend",
      tiempo: "6 meses",
      descripcion:
        "Desarrollo de aplicaciones web utilizando React y Node.js. Participarás en proyectos innovadores y trabajarás en equipo con profesionales experimentados.",
      remuneracion: "$300.000 CLP/mes",
    },
    {
      id: 2,
      empresa: "DataSolutions",
      logo: "https://placehold.co/50",
      posicion: "Analista de Datos",
      tiempo: "4 meses",
      descripcion:
        "Análisis de datos empresariales, creación de dashboards y reportes. Utilizarás herramientas como Python, SQL y Power BI.",
      remuneracion: null,
    },
    {
      id: 3,
      empresa: "InnovaTech",
      logo: "https://placehold.co/50",
      posicion: "Ingeniero de Software",
      tiempo: "8 meses",
      descripcion:
        "Desarrollo de software backend, APIs RESTful y bases de datos. Experiencia con Java Spring Boot y PostgreSQL.",
      remuneracion: "$350.000 CLP/mes",
    },
  ];

  // Mock data para historias de éxito
  const historiasExito = [
    {
      id: 1,
      imagen: "https://randomuser.me/api/portraits/women/27.jpg",
      nombre: "María González",
      carrera: "Ing. Civil Informática",
      posicionActual: "Ahora en TechCorp",
      testimonio:
        "Conecta Talento me ayudó a fortalecer mis competencias y conectar con el mundo laboral. Participé en talleres que mejoraron mi CV y tuve la oportunidad de dialogar con empresas, lo que resultó en mi práctica profesional.",
    },
    {
      id: 2,
      imagen: "https://randomuser.me/api/portraits/men/26.jpg",
      nombre: "Carlos Muñoz",
      carrera: "Ing. Industrial",
      posicionActual: "Ahora en Consultora XYZ",
      testimonio:
        "Las conferencias y espacios de diálogo fueron clave para entender la realidad laboral. Aprendí a destacar mis fortalezas y conecté con profesionales que me guiaron hacia mi primera oportunidad laboral.",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <div className="bg-cyan-600 text-white py-2 text-center text-sm">
        <Calendar className="inline-block w-4 h-4 mr-2" />
        Próximo evento: 15 de Diciembre 2025 | Auditorio Central PUCV
        <Button
          variant="outline"
          size="sm"
          className="ml-4 text-cyan-600 bg-white hover:bg-gray-100 text-xs px-3 py-1"
        >
          Reservar cupo
        </Button>
      </div> */}

      <section className="bg-cyan-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-cyan-900 mb-6 tracking-tight text-balance">
            Conecta Talento PUCV
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Un encuentro diseñado para fortalecer tus competencias técnicas y
            profesionales, apoyándote en tu incorporación al mundo laboral.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg shadow-lg"
              onClick={() => alert("Funcionalidad de inscripción próximamente")}
            >
              Inscribirme al Evento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg"
              onClick={() => setMostrarDetalles(!mostrarDetalles)}
            >
              Ver Detalles del Evento
              {mostrarDetalles ? (
                <ChevronUp className="ml-2 w-5 h-5" />
              ) : (
                <ChevronDown className="ml-2 w-5 h-5" />
              )}
            </Button>
          </div> */}

          {mostrarDetalles && (
            <Card className="max-w-4xl mx-auto border-2 border-cyan-100 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-cyan-50">
                <CardTitle className="text-2xl text-cyan-900">
                  Información del Evento
                </CardTitle>
                <CardDescription>Conecta Talento 2025</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Fecha</p>
                      <p className="text-sm text-gray-600">
                        Martes 30 de Septiembre, 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Horario</p>
                      <p className="text-sm text-gray-600">09:30 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Lugar</p>
                      <p className="text-sm text-gray-600">
                        Auditorio de la Facultad de Ingeniería. Avenida Brasil
                        2162, Valparaíso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Dirigido a</p>
                      <p className="text-sm text-gray-600">
                        Estudiantes de últimos años PUCV
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-cyan-900 mb-2">
                      Incluye:
                    </p>
                    <ul className="space-y-1 text-sm text-cyan-800">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Conferencias y talleres
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Espacios de networking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Material de apoyo
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Talleres de Empleabilidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sesiones prácticas para desarrollar tus habilidades profesionales
              y prepararte para el mercado laboral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talleres.map((taller) => {
              const IconComponent = taller.icono;
              return (
                <Card
                  key={taller.id}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg">{taller.titulo}</CardTitle>
                    <CardDescription>{taller.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {taller.contenido}
                    </p>
                    <div className="flex items-center text-sm text-cyan-600 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {taller.duracion}
                    </div>
                    <Button className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700">
                      Inscribirme
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Conferencias y Charlas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escucha a profesionales exitosos y egresados PUCV compartir su
              experiencia y visión del mercado laboral
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {conferencias.map((conferencia) => (
              <div
                key={conferencia.id}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={conferencia.imagen}
                    alt={`${conferencia.locutor} foto`}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-900 mb-2">
                      {conferencia.nombre}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <strong>{conferencia.locutor}</strong> - {conferencia.rol}
                    </p>
                    <p className="text-sm text-gray-600">
                      {conferencia.descripcion}
                    </p>
                    <div className="flex items-center text-sm text-cyan-600 mt-2 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {conferencia.hora}
                    </div>
                    <div className="flex items-center text-sm text-cyan-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {conferencia.ubicacion}
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="absolute bottom-4 right-4 text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1 hover:underline"
                >
                  Más información
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Empresas Participantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conecta con organizaciones líderes de diversos sectores
              industriales
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {empresas.map((empresa) => (
                <div
                  key={empresa.id}
                  className="text-gray-400 font-bold text-2xl"
                >
                  {empresa.nombre}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {estadisticas.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  {stat.valor}
                </div>
                <p className="text-gray-600 text-sm">{stat.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Oportunidades Laborales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prácticas profesionales y ofertas laborales de empresas
              participantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oportunidades.map((offer) => (
              <Card
                key={offer.id}
                className="shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <img
                      src={offer.logo}
                      alt={`${offer.empresa} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{offer.empresa}</CardTitle>
                      <CardDescription className="text-cyan-600 font-semibold">
                        {offer.posicion}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        <strong>Tiempo:</strong> {offer.tiempo}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {offer.descripcion}
                    </p>
                    {offer.remuneracion && (
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">
                          <strong>Remuneración:</strong> {offer.remuneracion}
                        </span>
                      </div>
                    )}
                  </div>
                  <Button className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700">
                    Postular
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Historias de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudiantes que fortalecieron su empleabilidad a través de Conecta
              Talento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {historiasExito.map((historia) => (
              <div
                key={historia.id}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={historia.imagen}
                    alt={`${historia.nombre} foto`}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-cyan-900 text-lg">
                      {historia.nombre}
                    </h3>
                    <p className="text-sm text-gray-600">{historia.carrera}</p>
                    <p className="text-xs text-cyan-600 font-semibold mt-1">
                      {historia.posicionActual}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{historia.testimonio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
