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
import VentureStudioPage from "./pages/VentureStudioPage";

function App() {
  return (
    <BrowserRouter>
      {/* 1. Contenedor flex-col para que Navbar quede arriba y main crezca */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* 2. Main con flex-grow para que HomePage y rutas llenen el resto */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/estudiantes" element={<EstudiantesPage />} />
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
            <Route path="/academicos" element={<AcademicosPage />} />
            <Route path="/venture-studio" element={<VentureStudioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
