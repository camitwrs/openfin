// src/components/Footer.jsx
import React from "react"; // Necesario para componentes de React
// import pucvlogo from "../../assets/pucv.gif"; // Asegúrate de las rutas correctas
// import anidlogo from "../../assets/anid.png";
// import finLogo from "../../assets/FINCOLOR.png"; // Asumo que este es el logo de la Facultad de Ingeniería o similar
// import otlLogo from "../../assets/logo_OTL.png";
// import inesLogo from "../../assets/ines.png";
// import vicerrectoriaLogo from "../../assets/vicerrectoria.svg"; // Si tienes este o lo omitiste, ajusta

// Logos para la sección "Organiza"
import organizaPUCV from "../../assets/logo-fin.png"; // LOGO PUCV y Facultad de Ingeniería
import organizaK2I from "../../assets/k2i-blanco.png"; // LOGO KEI
import organizaCII from "../../assets/centrointer-blanco.png"; // LOGO CII

// Logos para la sección "Colabora"
import colaboraNano from "../../assets/nano-blanco.png"; // LOGO NANO TC
import colaboraCMF from "../../assets/cmf-blanco.png"; // LOGO CMF

// Logos para la sección "Apoya"
import apoyaOTL from "../../assets/otl-blanco.png"; // LOGO OTL
import apoyaINES from "../../assets/ines-blanco.png"; // LOGO INES+D
import apoyaANID from "../../assets/anid-blanco.png"; // LOGO ANID

function Footer() {
  // Define tus grupos de logos con sus imágenes
  const sections = [
    {
      title: "Organiza",
      logos: [
        {
          src: organizaPUCV,
          alt: "Logo Pontificia Universidad Católica de Valparaíso",
        },
        { src: organizaK2I, alt: "Logo Knowledge to Industry Group" },
        {
          src: organizaCII,
          alt: "Logo Centro Interdisciplinario de Ingeniería",
        },
      ],
    },
    {
      title: "Colabora",
      logos: [
        { src: colaboraNano, alt: "Logo Nano TC" },
        { src: colaboraCMF, alt: "Logo CMF" },
      ],
    },
    {
      title: "Apoya",
      logos: [
        { src: apoyaOTL, alt: "Logo OTL" },
        { src: apoyaINES, alt: "Logo InES I+D PUCV" },
        { src: apoyaANID, alt: "Logo ANID" },
      ],
    },
  ];

  return (
    <footer className="relative z-50 p-8 sm:p-12 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 last:mb-0">
            {" "}
            {/* Reducido mb-12 a mb-8 */}
            <h3 className="text-xl md:text-lg font-bold mb-6">
              {section.title}
            </h3>{" "}
            {/* Título de la sección */}
            {/*
              --- AJUSTE CLAVE AQUÍ: LÓGICA DE GRILLA RESPONSIVA Y CENTRADO ---
              Aplicamos diferentes configuraciones de grilla basadas en el número de logos
              y el tamaño de la pantalla, para que se vea como en tu esquema.
              Para PC (lg: y xl:), la grilla se adaptará para centrar los logos.
            */}
            <div className="flex justify-center">
              {" "}
              {/* Contenedor flex para centrar la grilla completa */}
              <div
                className={`grid gap-y-4 gap-x-10 items-center justify-items-center ${
                  // Por defecto, 2 columnas en móvil
                  // En sm: 3 columnas
                  // En lg: adaptamos las columnas basadas en el NÚMERO DE LOGOS
                  // En xl: también adaptamos

                  section.logos.length === 2
                    ? "grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" // Si hay 2 logos, 2 columnas y un max-w más pequeño para que estén más juntos
                    : section.logos.length === 3
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" // Si hay 3 logos, 3 columnas y un max-w medio
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5" // Por defecto (para 5+ logos o si quieres que se estiren más)
                } `} // mx-auto para centrar la grilla si no llena el ancho del flex padre
              >
                {section.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    src={logo.src}
                    alt={logo.alt}
                    className="sm:h-8 md:h-12 lg:h-16"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
