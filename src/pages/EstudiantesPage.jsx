import React, { useState } from "react";
import {
  GraduationCap,
  Sparkles,
  Zap,
  Briefcase,
  Users,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
// Asegúrate de que estas rutas sean correctas en tu proyecto
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Datos de facultades y carreras
const facultades = [
  { id: 1, nombre: "Facultad de Arquitectura y Urbanismo", codigo: "FAU" },
  { id: 2, nombre: "Facultad de Ciencias", codigo: "FC" },
  {
    id: 3,
    nombre: "Facultad de Ciencias Agronómicas y de los Alimentos",
    codigo: "FCAA",
  },
  { id: 4, nombre: "Facultad de Ciencias del Mar y Geografía", codigo: "FCMG" },
  {
    id: 5,
    nombre: "Facultad de Ciencias Económicas y Administrativas",
    codigo: "FCEA",
  },
  { id: 6, nombre: "Facultad de Derecho", codigo: "FD" },
  { id: 7, nombre: "Facultad Eclesiástica de Teología", codigo: "FET" },
  { id: 8, nombre: "Facultad de Filosofía y Educación", codigo: "FFE" },
  { id: 9, nombre: "Facultad de Ingeniería", codigo: "FI" },
];

const carreras = [
  {
    id: 1,
    nombre: "Arquitectura",
    facultad_id: 1,
    facultad: "Facultad de Arquitectura y Urbanismo",
  },
  {
    id: 2,
    nombre: "Bachillerato en Ciencias",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 3,
    nombre: "Kinesiología",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 4,
    nombre: "Tecnología Médica",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 5,
    nombre: "Pedagogía en Biología y Ciencias Naturales",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 6,
    nombre: "Licenciatura en Biología",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 7,
    nombre: "Ingeniería en Estadística",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 8,
    nombre: "Licenciatura en Física / mención Astronomía",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 9,
    nombre: "Pedagogía en Física y Ciencias Naturales",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 10,
    nombre: "Licenciatura en Matemáticas",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 11,
    nombre: "Pedagogía en Matemáticas",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 12,
    nombre: "Bioquímica",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 13,
    nombre: "Pedagogía en Química y Ciencias Naturales",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 14,
    nombre: "Química Industrial",
    facultad_id: 2,
    facultad: "Facultad de Ciencias",
  },
  {
    id: 15,
    nombre: "Agronomía",
    facultad_id: 3,
    facultad: "Facultad de Ciencias Agronómicas y de los Alimentos",
  },
  {
    id: 16,
    nombre: "Ingeniería de Alimentos",
    facultad_id: 3,
    facultad: "Facultad de Ciencias Agronómicas y de los Alimentos",
  },
  {
    id: 17,
    nombre: "Ingeniería en Acuicultura",
    facultad_id: 4,
    facultad: "Facultad de Ciencias del Mar y Geografía",
  },
  {
    id: 18,
    nombre: "Ingeniería Pesquera",
    facultad_id: 4,
    facultad: "Facultad de Ciencias del Mar y Geografía",
  },
  {
    id: 19,
    nombre: "Oceanografía / Biología Marina",
    facultad_id: 4,
    facultad: "Facultad de Ciencias del Mar y Geografía",
  },
  {
    id: 20,
    nombre: "Geografía",
    facultad_id: 4,
    facultad: "Facultad de Ciencias del Mar y Geografía",
  },
  {
    id: 21,
    nombre: "Ingeniería Comercial",
    facultad_id: 5,
    facultad: "Facultad de Ciencias Económicas y Administrativas",
  },
  {
    id: 22,
    nombre: "Ingeniería en Administración de Negocios",
    facultad_id: 5,
    facultad: "Facultad de Ciencias Económicas y Administrativas",
  },
  {
    id: 23,
    nombre: "Administración Pública",
    facultad_id: 5,
    facultad: "Facultad de Ciencias Económicas y Administrativas",
  },
  {
    id: 24,
    nombre: "Derecho",
    facultad_id: 6,
    facultad: "Facultad de Derecho",
  },
  {
    id: 25,
    nombre: "Psicología",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 26,
    nombre: "Periodismo",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 27,
    nombre: "Educación Parvularia",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 28,
    nombre: "Pedagogía en Educación Especial",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 29,
    nombre: "Fotografía Profesional",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 30,
    nombre: "Publicidad",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 31,
    nombre: "Licenciatura en Lingüística y Literatura",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 32,
    nombre: "Ilustración",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 33,
    nombre: "Producción Musical",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 34,
    nombre: "Pedagogía en Enseñanza Media en Artes y Religión y Moral",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 35,
    nombre: "Pedagogía en Filosofía",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 36,
    nombre: "Animación Digital",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 37,
    nombre: "Desarrollo de Videojuegos y Simulación Virtual",
    facultad_id: 8,
    facultad: "Facultad de Filosofía y Educación",
  },
  {
    id: 38,
    nombre: "Ingeniería Civil",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 39,
    nombre: "Ingeniería Civil Bioquímica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 40,
    nombre: "Ingeniería en Bioprocesos",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 41,
    nombre: "Ingeniería de Ejecución en Bioprocesos",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 42,
    nombre: "Ingeniería Civil en Telecomunicaciones",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 43,
    nombre: "Ingeniería Civil Eléctrica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 44,
    nombre: "Ingeniería Civil Electrónica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 45,
    nombre: "Ingeniería Eléctrica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 46,
    nombre: "Ingeniería Electrónica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 47,
    nombre: "Ingeniería Civil en Ciencia de Datos",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 48,
    nombre: "Ingeniería Civil Informática",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 49,
    nombre: "Ingeniería en Informática",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 50,
    nombre: "Ingeniería de Ejecución en Informática",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 51,
    nombre: "Ingeniería Civil en Construcción",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 52,
    nombre: "Ingeniería en Construcción",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 53,
    nombre: "Ingeniería Civil Industrial",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 54,
    nombre: "Ingeniería de Transporte",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 55,
    nombre: "Ingeniería Civil Mecánica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 56,
    nombre: "Ingeniería Mecánica",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 57,
    nombre: "Ingeniería Civil Química",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 58,
    nombre: "Ingeniería Civil en Metalurgia Extractiva",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
  {
    id: 59,
    nombre: "Ingeniería Civil de Minas",
    facultad_id: 9,
    facultad: "Facultad de Ingeniería",
  },
];

// Datos de las actividades dirigidas a estudiantes
const studentActivities = [
  {
    title: "Academias I+D",
    description:
      "Programas intensivos para el desarrollo de habilidades en Investigación y Desarrollo (I+D), enfocados en la innovación tecnológica.",
    icon: <FlaskConical className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/academia-id",
    badge: "Investigación",
  },
  {
    title: "Academia EBCT",
    description:
      "Formación especializada en Emprendimiento de Base Científico Tecnológica, transformando ideas innovadoras en startups viables.",
    icon: <Zap className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/academia-ebct",
    badge: "Emprendimiento",
  },
  {
    title: "Venture Studio",
    description:
      "Plataforma de co-creación y lanzamiento de empresas, donde el talento universitario colabora directamente con la industria.",
    icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/venture-studio",
    badge: "Innovación",
  },
  {
    title: "Conecta Talento",
    description:
      "Eventos de networking y ferias de oportunidades que vinculan directamente a estudiantes con empresas en busca de talento especializado.",
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    link: "/estudiantes/conecta-talento",
    badge: "Vinculación",
  },
];

const EstudiantesPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    facultad_id: "",
    carrera_id: "",
    correo: "",
    intereses: [],
    empresa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, intereses: [...prev.intereses, name] };
      } else {
        return { ...prev, intereses: prev.intereses.filter((i) => i !== name) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registro enviado exitosamente!");
  };
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sección Hero para Estudiantes */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-cyan-50 to-cyan-100 border-b border-cyan-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto text-cyan-700 mb-4 animate-bounce-slow" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-900 mb-4 tracking-tight">
            Despega tu Carrera
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            Accede a las mejores oportunidades de{" "}
            <strong>I+D, Emprendimiento e Innovación</strong> que conectan a la
            universidad con el sector productivo.
          </p>
        </div>
      </section>

      {/* Sección de Actividades Visibles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-900 mb-12">
            Actividades para Estudiantes
          </h2>

          {/* Grid de Actividades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentActivities.map((activity, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-cyan-500/80"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-cyan-100/50 shadow-inner">
                      {activity.icon}
                    </div>
                    <Badge className="bg-cyan-500/10 text-cyan-800 font-semibold">
                      {activity.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-cyan-900 mb-3">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 flex-grow mb-4">
                    {activity.description}
                  </p>

                  {/* Botón de Enlace */}
                  <Button
                    asChild
                    variant="link"
                    className="text-cyan-600 font-semibold p-0 h-auto self-start hover:text-cyan-700"
                  >
                    <Link to={activity.link}>
                      Explorar Actividad
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Registro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-900 mb-12">
            Regístrate para Participar
          </h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="facultad_id"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Facultad
                  </label>
                  <select
                    id="facultad_id"
                    name="facultad_id"
                    value={formData.facultad_id}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Selecciona una facultad</option>
                    {facultades.map((facultad) => (
                      <option key={facultad.id} value={facultad.id}>
                        {facultad.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="carrera_id"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Carrera
                  </label>
                  <select
                    id="carrera_id"
                    name="carrera_id"
                    value={formData.carrera_id}
                    onChange={handleChange}
                    required
                    disabled={!formData.facultad_id}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:bg-gray-100"
                  >
                    <option value="">Selecciona una carrera</option>
                    {carreras
                      .filter(
                        (c) => c.facultad_id === parseInt(formData.facultad_id)
                      )
                      .map((carrera) => (
                        <option key={carrera.id} value={carrera.id}>
                          {carrera.nombre}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Me interesa inscribirme en:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="Academia I+D"
                        checked={formData.intereses.includes("Academia I+D")}
                        onChange={handleCheckbox}
                        className="mr-2"
                      />
                      Academia I+D
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="Academia EBCT"
                        checked={formData.intereses.includes("Academia EBCT")}
                        onChange={handleCheckbox}
                        className="mr-2"
                      />
                      Academia EBCT
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="Práctica"
                        checked={formData.intereses.includes("Práctica")}
                        onChange={handleCheckbox}
                        className="mr-2"
                      />
                      Práctica
                    </label>
                  </div>
                </div>
                {formData.intereses.includes("Práctica") && (
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Especifique la empresa que le interesa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md"
                >
                  Enviar Registro
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="py-10 bg-cyan-600 mb-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center items-center mb-4">
            <Users className="w-10 h-10 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">
              ¿Necesitas más información?
            </h3>
          </div>
          <p className="text-gray-100 text-md max-w-2xl mx-auto">
            ¿Tienes dudas sobre cómo participar o qué actividad es ideal para tu
            perfil?
          </p>
          <p className="text-gray-100 font-bold text-lg mb-6 max-w-2xl mx-auto uppercase">
            Contáctanos.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-cyan-800 hover:bg-gray-100 transition-all duration-300 shadow-xl rounded-full px-8 py-3 text-base font-semibold"
          >
            <Link to="mailto:openfin@ing.pucv.cl">openfin@ing.pucv.cl</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EstudiantesPage;
