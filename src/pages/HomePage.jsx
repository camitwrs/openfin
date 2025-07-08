import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, ChevronRight, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import patronHomePage from "../assets/patronHomePage.png";

function HomePage() {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/estudiantes");
  };

  const handleCompanyClick = () => {
    navigate("/empresas");
  };

  const handleAcademicClick = () => {
    navigate("/academicos");
  };

  return (
    <div className="bg-slate-100 py-6">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${patronHomePage})`,
          opacity: 0.25,
        }}
      ></div>

      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-sky-800 mb-4 tracking-tight ">
            OPEN<span className="text-sky-600">FIN</span>
          </h1>

          <div className="w-20 h-1 bg-sky-950 mx-auto mb-6"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 font-light">
          Oportunidades de prácticas, empleos, visitas, charlas, financiamiento,
          desafíos de la Industria y del ecosistema{" "}
          <span className="font-semibold text-sky-800">
            Ciencia, Tecnología, Conocimiento e Innovación.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        <Card className="group z-50 hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
          <CardContent className="p-5 text-center">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 transition-colors">
              <GraduationCap className="w-7 h-7 text-sky-700" />
            </div>

            <h3 className="text-xl font-bold text-sky-900 mb-2">
              Soy estudiante
            </h3>
            {/* Reduje el tamaño del párrafo de text-base a text-sm y el mb-5 a mb-4 */}
            <p className="text-sm text-sky-700 mb-4 leading-relaxed">
              Explora desafíos reales, postula a Academias I+D o EBCT, y ofrece
              tu talento para sumarte a proyectos de impacto.
            </p>
            <Button
              className="bg-sky-800 cursor-pointer hover:bg-sky-800 text-white w-full group"
              onClick={handleStudentClick}
            >
              Buscar desafíos
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        <Card className="group z-50 hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
          <CardContent className="p-5 text-center">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 transition-colors">
              <Building2 className="w-7 h-7 text-sky-700" />
            </div>
            <h3 className="text-xl font-bold text-sky-900 mb-2">Soy empresa</h3>
            <p className="text-sm text-sky-700 mb-4 leading-relaxed">
              Publica tus desafíos reales para conectar con talento
              universitario, innovación aplicada y redes académicas.
            </p>
            <Button
              className="bg-sky-800 cursor-pointer hover:bg-sky-800 text-white w-full group"
              onClick={handleCompanyClick}
            >
              Subir un desafío
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        <Card className="group z-50 hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
          <CardContent className="p-5 text-center">
            <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 transition-colors">
              <Users className="w-7 h-7 text-sky-700" />
            </div>
            <h3 className="text-xl font-bold text-sky-900 mb-2">
              Soy académico/a
            </h3>
            <p className="text-sm text-sky-700 mb-4 leading-relaxed">
              Encuentra desafíos de la industria donde puedas aportar desde tu
              experiencia e impulsar colaboraciones I+D.
            </p>
            <Button
              className="bg-sky-800 cursor-pointer hover:bg-sky-800 text-white w-full group"
              onClick={handleAcademicClick}
            >
              Encontrar desafíos
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
