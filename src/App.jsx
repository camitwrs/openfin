import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/HomePage";
import EstudiantesPage from "./pages/EstudiantesPage";
import ConnectaIndustriaPage from "./pages/ConnectaIndustriaPage";
import AcademiaIDPage from "./pages/AcademiaIDPage";
import AcedemiaEBCT from "./pages/AcademiaEBCTPage";
import EmpresasPage from "./pages/EmpresasPage";
import AcademicosPage from "./pages/AcademicosPage";
import Footer from "./pages/components/Footer";
import EmpresasForm from "./pages/EmpresasForm";
import VentureStudioPage from "./pages/VentureStudioPage";
import AcademicosForm from "./pages/AcademicosForm";
import DesafiosPage from "./pages/DesafiosPage";
import DesafiosForm from "./pages/DesafiosForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<DesafiosPage />} />
            <Route path="/desafios-inscripcion" element={<DesafiosForm />} />
            {/* <Route path="/estudiantes" element={<EstudiantesPage />} />
            <Route
              path="/estudiantes/connecta-industria"
              element={<ConnectaIndustriaPage />}
            />
            <Route
              path="/estudiantes/academia-id"
              element={<AcademiaIDPage />}
            />
            <Route
              path="/estudiantes/academia-ebct"
              element={<AcedemiaEBCT />}
            />
            <Route path="/empresas" element={<EmpresasPage />} />
            <Route path="/empresas/inscripcion" element={<EmpresasForm />} />

            <Route path="/academicos" element={<AcademicosPage />} />
            <Route path="/academicos/inscripcion" element={<AcademicosForm />} />
            <Route path="/venture-studio" element={<VentureStudioPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
