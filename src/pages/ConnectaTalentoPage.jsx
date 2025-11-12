import { Button } from "@/components/ui/button";
import { useEffect } from "react";
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
} from "lucide-react";

export default function ConectaTalentoPage() {
    // Hook para asegurar que la página siempre comience arriba al montarse
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-white">
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

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-cyan-200">
                <Handshake className="w-4 h-4 mr-2" />
                Conecta Industria
              </div>
              <h1 className="text-5xl font-extrabold text-cyan-900 mb-6 tracking-tight text-balance">
                Conecta Talento PUCV
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Un seminario diseñado para fortalecer tus competencias técnicas
                y profesionales, apoyándote en tu incorporación al mundo
                laboral. Recibirás orientación sobre postulación a prácticas
                profesionales y conocerás oportunidades laborales de empresas
                participantes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-900 mb-1">
                      Talleres prácticos
                    </h3>
                    <p className="text-sm text-gray-600">
                      Preparación de CV y técnicas de entrevista
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-900 mb-1">
                      Feria empresarial
                    </h3>
                    <p className="text-sm text-gray-600">
                      Stands de empresas líderes de la región
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-900 mb-1">
                      Charlas inspiradoras
                    </h3>
                    <p className="text-sm text-gray-600">
                      Profesionales exitosos comparten su experiencia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-900 mb-1">
                      Networking directo
                    </h3>
                    <p className="text-sm text-gray-600">
                      Conecta con reclutadores y profesionales
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                Inscribirme al seminario
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-2 border-cyan-100 shadow-xl sticky top-4">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-cyan-50">
                  <CardTitle className="text-2xl text-cyan-900">
                    Detalles del evento
                  </CardTitle>
                  <CardDescription>
                    Conecta Talento 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
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
                        Auditorio de la Facultad de Ingeniería. Avenida Brasil 2162, Valparaíso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Cupos</p>
                      <p className="text-sm text-gray-600">
                        300 estudiantes (Limitado)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-cyan-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-cyan-900">Requisitos</p>
                      <p className="text-sm text-gray-600">
                        Estudiante PUCV activo
                      </p>
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
                          Material de apoyo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Coffee break
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Certificado de participación
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Agenda del seminario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un día completo de actividades diseñadas para potenciar tu
              empleabilidad
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-cyan-600 font-bold text-lg">
                      09:30 - 10:00
                    </span>
                    <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-semibold">
                      Inauguración
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-2">
                    Bienvenida y charla inaugural
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Palabras de autoridades PUCV y charla motivacional sobre el
                    mercado laboral actual
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-green-600 font-bold text-lg">
                      10:00 - 12:00
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                      Talleres
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-2">
                    Talleres de empleabilidad
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Sesiones prácticas sobre preparación de CV, LinkedIn
                    profesional y técnicas de entrevista
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Taller 1: CV efectivo
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Taller 2: Perfil LinkedIn
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      Taller 3: Entrevistas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-purple-600 font-bold text-lg">
                      12:00 - 13:00
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                      Break
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-2">
                    Coffee break y networking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Momento para conocer a otros estudiantes y comenzar a
                    conectar con representantes de empresas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-orange-600 font-bold text-lg">
                      13:00 - 16:00
                    </span>
                    <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-semibold">
                      Feria
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-2">
                    Feria empresarial
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Visita los stands de empresas participantes, conoce sus
                    oportunidades y entrega tu CV directamente a reclutadores
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-cyan-600 font-bold text-lg">
                      16:00 - 18:00
                    </span>
                    <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-semibold">
                      Panel
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-900 mb-2">
                    Panel de egresados exitosos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Escucha las experiencias de egresados PUCV que destacan en
                    sus campos profesionales y aprende de su trayectoria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Empresas participantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conecta con organizaciones líderes de diversos sectores
              industriales
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 1</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 2</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 3</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 4</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 5</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 6</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 7</div>
              <div className="text-gray-400 font-bold text-2xl">EMPRESA 8</div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <p className="text-gray-600 text-sm">Empresas participantes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">500+</div>
              <p className="text-gray-600 text-sm">Estudiantes conectados</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">85%</div>
              <p className="text-gray-600 text-sm">Tasa de inserción laboral</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Historias de éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudiantes que encontraron su oportunidad en ediciones anteriores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  MG
                </div>
                <div>
                  <h3 className="font-bold text-cyan-900 text-lg">
                    María González
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ing. Civil Informática
                  </p>
                  <p className="text-xs text-cyan-600 font-semibold mt-1">
                    Ahora en TechCorp
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "En Conecta Talento conocí a mi actual empleador. La feria me
                permitió entregar mi CV directamente y tener una entrevista
                informal que resultó en mi práctica profesional y luego en mi
                primer trabajo."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  CM
                </div>
                <div>
                  <h3 className="font-bold text-cyan-900 text-lg">
                    Carlos Muñoz
                  </h3>
                  <p className="text-sm text-gray-600">Ing. Industrial</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">
                    Ahora en Consultora XYZ
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Los talleres de CV y entrevistas fueron fundamentales. Aprendí
                a destacar mis fortalezas y a presentarme profesionalmente. Tres
                semanas después del evento, ya tenía mi práctica asegurada."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
