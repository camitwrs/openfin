import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/HomePage";
import EstudiantesPage from "./pages/EstudiantesPage";
import AcademiaIDPage from "./pages/AcademiaIDPage";
import AcademiaEBCTPage from "./pages/AcademiaEBCTPage";
import EmpresasPage from "./pages/EmpresasPage";
import AcademicosPage from "./pages/AcademicosPage";
import Footer from "./pages/components/Footer";
import EmpresasForm from "./pages/EmpresasForm";
import VentureStudioPage from "./pages/VentureStudioPage";
import AcademicosForm from "./pages/AcademicosForm";
import DesafiosPage from "./pages/DesafiosPUCVPage";
import DesafiosEnCursoPage from "./pages/DesafiosEnCursoPage";
import CalendarioPage from "./pages/CalendarioPage";
import NoticiasPage from "./pages/NoticiasPage";
import DesafiosForm from "./pages/DesafiosForm";
import ConectaTalentoPage from "./pages/ConnectaTalentoPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/actividades" element={<ActividadesPage />} /> */}
            <Route path="/desafios/vigentes" element={<DesafiosPage />} />
            <Route
              path="/desafios/en-curso"
              element={<DesafiosEnCursoPage />}
            />
            <Route path="/desafios/inscripcion" element={<DesafiosForm />} />
            <Route path="/estudiantes" element={<EstudiantesPage />} />
            <Route path="/actividades/noticias" element={<NoticiasPage />} />
            <Route path="/academicos" element={<AcademicosPage />} />
            <Route
              path="/estudiantes/academia-id"
              element={<AcademiaIDPage />}
            />
            <Route
              path="/estudiantes/academia-ebct"
              element={<AcademiaEBCTPage />}
            />
            <Route
              path="/estudiantes/venture-studio"
              element={<VentureStudioPage />}
            />
            <Route
              path="/estudiantes/conecta-talento"
              element={<ConectaTalentoPage />}
            />
            <Route path="/empresas" element={<EmpresasPage />} />
            {/* <Route path="/empresas/inscripcion" element={<EmpresasForm />} /> */}
            {/* <Route path="/academicos" element={<AcademicosPage />} />
            <Route
              path="/academicos/inscripcion"
              element={<AcademicosForm />}
            />
            */}
            <Route
              path="/actividades/calendario"
              element={<CalendarioPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
