import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Rocket,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function VentureStudioPage() {
  // Hook para asegurar que la página siempre comience arriba al montarse
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* cyan notification bar
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 text-center text-sm">
        <Sparkles className="inline-block w-4 h-4 mr-2" />
        ¡Convocatoria abierta! Transforma tu idea en una startup real
        <Button
          variant="outline"
          size="sm"
          className="ml-4 text-cyan-600 bg-white hover:bg-gray-100 text-xs px-3 py-1"
        >
          Postular ahora
        </Button>
      </div> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Venture Studio PUCV
              </div>
              <h1 className="text-5xl font-extrabold text-cyan-900 mb-6 tracking-tight">
                Construye tu startup desde cero con apoyo experto
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Un Venture Studio es una empresa que crea y desarrolla startups
                de forma activa. A diferencia de un fondo de capital de riesgo
                que invierte en empresas ya existentes, nosotros co-creamos
                nuevas empresas contigo, proporcionando recursos, mentoría y el
                ecosistema completo para llevar tu idea al mercado.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg"
                >
                  Postular al programa
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                >
                  Ver casos de éxito
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 p-8 rounded-2xl text-white shadow-2xl">
              <Rocket className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué Venture Studio?
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-cyan-50">
                    Co-creamos startups desde la idea hasta el lanzamiento
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-cyan-50">
                    Acceso a recursos, infraestructura y red de mentores
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-cyan-50">
                    Financiamiento inicial y conexión con inversionistas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-cyan-50">
                    Metodología probada para validar y escalar tu negocio
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso del Venture Studio */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">
              Cómo funciona nuestro Venture Studio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso estructurado de 6 meses para transformar tu idea en una
              startup lista para el mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fase 1 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 1: Ideación</CardTitle>
                <CardDescription className="text-sm">
                  Semanas 1-4
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Validamos tu idea, identificamos el problema real y definimos
                  tu propuesta de valor única.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Análisis de mercado y competencia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Definición de cliente objetivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Modelo de negocio inicial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 2 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 2: Validación</CardTitle>
                <CardDescription className="text-sm">
                  Semanas 5-10
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Probamos tus hipótesis con clientes reales y ajustamos el
                  producto según feedback del mercado.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Entrevistas con clientes potenciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Desarrollo de MVP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Pruebas de concepto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 3 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 3: Construcción</CardTitle>
                <CardDescription className="text-sm">
                  Semanas 11-16
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Desarrollamos el producto completo con un equipo técnico
                  experto y preparamos el go-to-market.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Desarrollo de producto escalable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Estrategia de marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Preparación de pitch deck</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 4 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 4: Lanzamiento</CardTitle>
                <CardDescription className="text-sm">
                  Semanas 17-20
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lanzamos tu startup al mercado y comenzamos a adquirir los
                  primeros clientes pagando.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Lanzamiento oficial del producto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Campañas de adquisición</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Métricas y optimización</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 5 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 5: Tracción</CardTitle>
                <CardDescription className="text-sm">
                  Semanas 21-24
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Escalamos las operaciones, optimizamos procesos y preparamos
                  la ronda de inversión.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Crecimiento de base de usuarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Optimización de conversión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Preparación para inversión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 6 */}
            <Card className="border-2 border-cyan-50 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fase 6: Escala</CardTitle>
                <CardDescription className="text-sm">Mes 6+</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Conectamos con inversionistas, aceleramos el crecimiento y
                  consolidamos tu posición en el mercado.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Pitch a inversionistas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Expansión de mercado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Consolidación del equipo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      {/* Requisitos y postulación */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requisitos */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-900 mb-6">
                Requisitos para postular
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Buscamos estudiantes apasionados por el emprendimiento, con
                ganas de aprender y disposición para trabajar duro en construir
                algo significativo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-900 mb-2">
                      Ser estudiante PUCV
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Estudiantes de pregrado o postgrado de cualquier carrera.
                      Valoramos equipos multidisciplinarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-900 mb-2">
                      Dedicación tiempo completo
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Disponibilidad de al menos 30 horas semanales durante los
                      6 meses del programa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-900 mb-2">
                      Idea o problema identificado
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tener una idea de negocio o haber identificado un problema
                      real que quieras resolver. No necesitas tener todo
                      resuelto, solo la motivación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-900 mb-2">
                      Mentalidad de crecimiento
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Disposición para aprender, recibir feedback, pivotar
                      cuando sea necesario y trabajar en equipo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceso de postulación */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-900 mb-6">
                Proceso de postulación
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Un proceso simple y transparente diseñado para conocerte mejor y
                entender tu potencial emprendedor.
              </p>

              <div className="bg-gradient-to-br from-cyan-600 to-cyan-600 p-8 rounded-2xl text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Pasos para postular</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Formulario de postulación
                      </h4>
                      <p className="text-cyan-50 text-sm">
                        Completa el formulario online con tu información y
                        cuéntanos sobre tu idea.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Entrevista inicial</h4>
                      <p className="text-cyan-50 text-sm">
                        Una conversación de 30 minutos para conocerte mejor y
                        entender tu motivación.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Pitch de tu idea</h4>
                      <p className="text-cyan-50 text-sm">
                        Presenta tu idea en 5 minutos frente a nuestro comité de
                        selección.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Decisión final</h4>
                      <p className="text-cyan-50 text-sm">
                        Recibirás una respuesta en 7 días hábiles. ¡Bienvenido
                        al Venture Studio!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-50">
                <h4 className="font-semibold text-cyan-900 mb-3">
                  Próxima convocatoria
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  <strong>Fecha de cierre:</strong> 30 de Noviembre, 2025
                  <br />
                  <strong>Inicio del programa:</strong> Enero 2026
                  <br />
                  <strong>Cupos disponibles:</strong> 10 equipos
                </p>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Postular ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="py-16 bg-gradient-to-r mb-6 from-cyan-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Listo para construir tu startup?
          </h2>
          <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            No esperes más. Únete al Venture Studio PUCV y transforma tu idea en
            una empresa real con el apoyo de expertos, recursos y una comunidad
            de emprendedores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl"
            >
              Postular al programa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:text-cyan-800 px-8 py-6 text-lg bg-transparent"
            >
              Agendar una reunión
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
